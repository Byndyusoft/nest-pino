# nest-pino

[![npm@latest](https://img.shields.io/npm/v/@byndyusoft/nest-pino/latest.svg)](https://www.npmjs.com/package/@byndyusoft/nest-pino)
[![test](https://github.com/Byndyusoft/nest-pino/actions/workflows/test.yaml/badge.svg?branch=master)](https://github.com/Byndyusoft/nest-pino/actions/workflows/test.yaml)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Patches for `nestjs-pino`

## Requirements

- Node.js v16 LTS or later
- Yarn

## Install

```bash
yarn add @byndyusoft/nest-pino
```

## Migrate to `@byndyusoft/nest-pino`

- Replace import

```bash
yarn dlx jscodeshift ./packages/app --extensions=ts --parser=ts --transform=./node_modules/@byndyusoft/nest-pino/codemods/replace-import-specifier.js
```

- Fix lint issues

```bash
yarn run lint:fix
```

## Usage

[See upstream README](https://github.com/iamolegga/nestjs-pino#readme)

## How to release new version

- Get tag from [upstream releases](https://github.com/iamolegga/nestjs-pino/releases) and verify codebase
- Make changes in patches and [deploy](./.github/workflows/deploy.yaml) workflow if necessary
- Create new tag and release in this repository in format: **v**_[upstream tag]_-_[patch version]_, e.g. `v3.1.2-1`
- See deploy progress [here](https://github.com/Byndyusoft/nest-pino/actions/workflows/deploy.yaml)

## Maintainers

- [@Byndyusoft/owners](https://github.com/orgs/Byndyusoft/teams/owners) <<github.maintain@byndyusoft.com>>
- [@Byndyusoft/team](https://github.com/orgs/Byndyusoft/teams/team)
- [@KillWolfVlad](https://github.com/KillWolfVlad)

## License

This repository is released under version 2.0 of the
[Apache License](https://www.apache.org/licenses/LICENSE-2.0).
