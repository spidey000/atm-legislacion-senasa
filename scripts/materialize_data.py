from pathlib import Path
import base64
import gzip
import shutil

ROOT = Path(__file__).resolve().parents[1]
BUILD = ROOT / "build"

FILES = {
    "legislacion.js.gz.b64": "data/legislacion.js",
    "atm-1.js.gz.b64": "data/atm-1.js",
    "atm-2.js.gz.b64": "data/atm-2.js",
    "fernando-1.js.gz.b64": "data/fernando-1.js",
    "fernando-2.js.gz.b64": "data/fernando-2.js",
    "fernando-3.js.gz.b64": "data/fernando-3.js",
    "fernando-4.js.gz.b64": "data/fernando-4.js",
    "fernando-5.js.gz.b64": "data/fernando-5.js",
}

for source_name, target_name in FILES.items():
    source = BUILD / source_name
    target = ROOT / target_name
    target.parent.mkdir(parents=True, exist_ok=True)
    raw = base64.b64decode(source.read_text(encoding="ascii").strip())
    target.write_bytes(gzip.decompress(raw))
    print(f"materialized {target_name}")

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
