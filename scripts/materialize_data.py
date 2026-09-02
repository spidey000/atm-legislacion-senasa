from pathlib import Path
import base64
import gzip
import io
import re
import shutil
import tarfile

ROOT = Path(__file__).resolve().parents[1]
BUILD = ROOT / "build"
DATA = ROOT / "data"
DATA.mkdir(parents=True, exist_ok=True)

# Legislación travels as one small gzip/base64 file.
source = BUILD / "legislacion.js.gz.b64"
target = DATA / "legislacion.js"
raw = base64.b64decode(source.read_text(encoding="ascii").strip())
target.write_bytes(gzip.decompress(raw))
print("materialized data/legislacion.js")

# ATM + Fernando travel as sequential temporary base64 parts.
parts = sorted(BUILD.glob("remaining-data.part*.txt"))
if not parts:
    raise RuntimeError("No remaining-data parts found")
bundle_b64 = "".join(p.read_text(encoding="ascii").strip() for p in parts)
bundle = base64.b64decode(bundle_b64)
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

# Rewrite index script tags to match the materialized files exactly.
index = ROOT / "index.html"
html = index.read_text(encoding="utf-8")
data_files = [DATA / "legislacion.js"]
data_files += sorted(DATA.glob("atm-*.js"), key=lambda p: int(p.stem.split("-")[-1]))
data_files += sorted(DATA.glob("fernando-*.js"), key=lambda p: int(p.stem.split("-")[-1]))
script_tags = "\n".join(f'<script src="data/{p.name}"></script>' for p in data_files)
html = re.sub(r'(?:<script src="data/[^\"]+\.js"></script>\s*)+', script_tags + "\n", html, count=1)
index.write_text(html, encoding="utf-8")

# Remove legacy compressed loader and temporary transport files.
for legacy in [ROOT / "app.b64", DATA / "leg.b64", DATA / "atm.1.b64"]:
    if legacy.exists():
        legacy.unlink()
if BUILD.exists():
    shutil.rmtree(BUILD)

# One-shot migration helpers remove themselves from the final repo.
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
