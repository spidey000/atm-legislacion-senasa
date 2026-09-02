from pathlib import Path
import base64
import gzip
import io
import shutil
import tarfile

ROOT = Path(__file__).resolve().parents[1]
BUILD = ROOT / "build"

# Legislación travels as one small gzip/base64 file.
source = BUILD / "legislacion.js.gz.b64"
target = ROOT / "data" / "legislacion.js"
target.parent.mkdir(parents=True, exist_ok=True)
raw = base64.b64decode(source.read_text(encoding="ascii").strip())
target.write_bytes(gzip.decompress(raw))
print("materialized data/legislacion.js")

# ATM + Fernando travel in one temporary tar.gz/base64 bundle.
bundle_source = BUILD / "remaining-data.tar.gz.b64"
bundle = base64.b64decode(bundle_source.read_text(encoding="ascii").strip())
with tarfile.open(fileobj=io.BytesIO(bundle), mode="r:gz") as archive:
    for member in archive.getmembers():
        if not member.isfile() or not member.name.startswith("data/") or ".." in Path(member.name).parts:
            raise RuntimeError(f"Unsafe bundle member: {member.name}")
        destination = ROOT / member.name
        destination.parent.mkdir(parents=True, exist_ok=True)
        extracted = archive.extractfile(member)
        if extracted is None:
            raise RuntimeError(f"Unable to read {member.name}")
        destination.write_bytes(extracted.read())
        print(f"materialized {member.name}")

# Remove the legacy compressed loader and all temporary transport files.
for legacy in [ROOT / "app.b64", ROOT / "data" / "leg.b64", ROOT / "data" / "atm.1.b64"]:
    if legacy.exists():
        legacy.unlink()

if BUILD.exists():
    shutil.rmtree(BUILD)

# This migration helper and workflow are one-shot; remove them from the final repository.
workflow = ROOT / ".github" / "workflows" / "materialize-data.yml"
if workflow.exists():
    workflow.unlink()
try:
    (ROOT / ".github" / "workflows").rmdir()
    (ROOT / ".github").rmdir()
except OSError:
    pass

Path(__file__).unlink()
try:
    (ROOT / "scripts").rmdir()
except OSError:
    pass
