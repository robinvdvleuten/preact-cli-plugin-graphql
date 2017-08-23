# preact-cli-plugin-graphql

Preprocess GraphQL queries with the Preact CLI.

[![NPM version](https://img.shields.io/npm/v/preact-cli-plugin-graphql.svg)](https://www.npmjs.com/package/preact-cli-plugin-graphql)
[![Build Status](https://travis-ci.org/robinvdvleuten/preact-cli-plugin-graphql.svg?branch=master)](https://travis-ci.org/robinvdvleuten/preact-cli-plugin-graphql)

## Installation

```
$ yarn add preact-cli-plugin-graphql --dev
```

Alternatively using npm:

```
$ npm i preact-cli-plugin-graphql --save-dev
```

And include in your project by creating a `preact.config.js`:

```js
const graphql = require('preact-cli-plugin-graphql');

export default function (config) {
  graphql(config);
}
```

## Usage

The plugin allows to import any graphql files (with the `.graphql` or `.gql`) extension directly within your script:

```js
import query from './query.gql';
```

You can read more about this processing at the [graphql-tag](https://www.npmjs.com/package/graphql-tag#webpack-preprocessing) documentation

## License

MIT © [Robin van der Vleuten](https://www.robinvdvleuten.nl)
