"""Cria e verifica a entrega local; não acessa GitHub, WordPress ou outros projetos."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import hashlib
import json
import subprocess
import tempfile
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
EXCLUDED = {'.git', 'node_modules', '__pycache__', '.cache', '.pytest_cache', '.codex', '.agents'}
ESSENTIAL = {'index.html', 'style.css', 'atlas.css', 'js/app.js', 'js/neuron.js',
             'data/content.js', 'README.md', 'LICENSE', 'CREDITS.md', 'VALIDATION.md'}


def check(folder):
    """Teste real do código extraído, mais XML e sintaxe; não substitui teste visual."""
    subprocess.run(['node', '--test'], cwd=folder, check=True)
    for path in list((folder / 'js').glob('*.js')) + list((folder / 'data').glob('*.js')):
        subprocess.run(['node', '--check', str(path)], cwd=folder, check=True)
    result = subprocess.run(['node', 'tests/export-svg.mjs'], cwd=folder,
                            capture_output=True, text=True, encoding='utf-8', check=True)
    drawings = json.loads(result.stdout)
    for drawing in drawings:
        svg = ET.fromstring(drawing['svg'])
        assert svg.tag == 'svg', drawing['name']
        ids = [element.attrib['id'] for element in svg.iter() if 'id' in element.attrib]
        assert len(ids) == len(set(ids)), drawing['name']
        assert 'NaN' not in drawing['svg'] and 'undefined' not in drawing['svg'], drawing['name']
    print(f'XML bem formado e IDs únicos: {len(drawings)} variantes SVG.', flush=True)
    return len(drawings)


if __name__ == '__main__':
    assert ROOT.name == 'Neural-Explorer', f'Pasta inesperada: {ROOT}'
    files = sorted(p for p in ROOT.rglob('*') if p.is_file()
                   and not any(part in EXCLUDED for part in p.relative_to(ROOT).parts)
                   and p.suffix.lower() not in {'.zip', '.pyc', '.tmp', '.log'}
                   and not p.name.startswith('.env'))
    names = {p.relative_to(ROOT).as_posix() for p in files}
    assert ESSENTIAL <= names, f'Arquivos ausentes: {ESSENTIAL - names}'
    target = ROOT / 'Neural-Explorer-v2.0.zip'
    # Nunca altera o backup externo ou ZIPs da versão anterior.
    with ZipFile(target, 'w', ZIP_DEFLATED) as archive:
        for path in files:
            archive.write(path, path.relative_to(ROOT).as_posix())
    extracted = Path(tempfile.mkdtemp(prefix='Neural-Explorer-v2-verified-')).resolve()
    assert extracted.is_relative_to(Path(tempfile.gettempdir()).resolve())
    with ZipFile(target) as archive:
        assert archive.testzip() is None, 'Falha de CRC'
        assert set(archive.namelist()) == names
        for path in files:
            name = path.relative_to(ROOT).as_posix()
            assert hashlib.sha256(path.read_bytes()).digest() == hashlib.sha256(archive.read(name)).digest(), name
        # Todos os nomes vieram de caminhos relativos internos conferidos acima.
        archive.extractall(extracted)
    count = check(extracted)
    print(json.dumps({'zip': str(target), 'files': len(files), 'svgVariants': count,
                      'sha256': hashlib.sha256(target.read_bytes()).hexdigest(),
                      'verifiedExtraction': str(extracted)}, indent=2, ensure_ascii=False), flush=True)
