"""
Writes `.versionrc.json` for a Python project, adding a bump-file entry for the
`__init__.py` of every top-level module the project ships.

Module locations come from `pyproject.toml`:

- uv with `[tool.uv.build-backend]`: `module-root` (default `src`) joined with each
  `module-name` (a string or a list; defaults to the normalized project name).
- poetry with `[tool.poetry].packages`: each entry's `from` joined with its `include`.
- Otherwise: `<normalized project name>/__init__.py` at the repo root.
"""
import json
import pathlib
import tomllib

TEMPLATE = pathlib.Path(__file__).parent / 'python.versionrc.json'
INIT_UPDATER = './.reusable-workflows/versionsrc-config/python-init'


def normalize(name: str) -> str:
    return name.replace('-', '_').replace('.', '_').lower()


def module_paths(pyproject: dict) -> list[pathlib.Path]:
    tool = pyproject.get('tool', {})
    poetry = tool.get('poetry', {})
    project_name = pyproject.get('project', {}).get('name') or poetry['name']

    build_backend = tool.get('uv', {}).get('build-backend')
    if build_backend is not None:
        root = pathlib.Path(build_backend.get('module-root', 'src'))
        names = build_backend.get('module-name', normalize(project_name))
        if isinstance(names, str):
            names = [names]
        return [root.joinpath(*name.split('.')) for name in names]

    packages = poetry.get('packages')
    if packages:
        return [pathlib.Path(p.get('from', '')) / p['include'] for p in packages]

    return [pathlib.Path(normalize(project_name))]


def main():
    pyproject = tomllib.loads(pathlib.Path('pyproject.toml').read_text())
    config = json.loads(TEMPLATE.read_text())

    for path in module_paths(pyproject):
        init_file = path / '__init__.py'
        if not init_file.is_file():
            print(f"Warning: module init file ({init_file}) not found; its version won't be bumped.")
            continue
        print(f'Adding bump file ({init_file}).')
        config['bumpFiles'].append({'filename': init_file.as_posix(), 'updater': INIT_UPDATER})

    pathlib.Path('.versionrc.json').write_text(json.dumps(config, indent=2) + '\n')


if __name__ == '__main__':
    main()
