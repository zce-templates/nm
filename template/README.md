# {{name}}

{{#test}}
[![Build Status][travis-image]][travis-url]
{{#coverage}}
[![Coverage Status][codecov-image]][codecov-url]
{{/coverage}}
{{/test}}
[![NPM Downloads][downloads-image]][downloads-url]
[![NPM Version][version-image]][version-url]
[![License][license-image]][license-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> {{description}}

## Installation

```sh
$ yarn add {{name}}

# or npm
$ npm install {{name}}
```

## Usage

```js
const {{camel name}} = require('{{name}}')
const result = {{camel name}}('zce')
console.log(result)
// => 'zce@zce.me'
```

## API

### {{camel name}}(name[, options])

#### name

- Type: `string`
- Details: name string

#### options

##### host

- Type: `string`
- Details: host string
- Default: `'zce.me'`

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[{{license}}](LICENSE) &copy; {{author}}



{{#test}}
[travis-image]: https://img.shields.io/travis/{{user}}/{{name}}.svg
[travis-url]: https://travis-ci.org/{{user}}/{{name}}
{{#coverage}}
[codecov-image]: https://img.shields.io/codecov/c/github/{{user}}/{{name}}.svg
[codecov-url]: https://codecov.io/gh/{{user}}/{{name}}
{{/coverage}}
{{/test}}
[downloads-image]: https://img.shields.io/npm/dm/{{name}}.svg
[downloads-url]: https://npmjs.org/package/{{name}}
[version-image]: https://img.shields.io/npm/v/{{name}}.svg
[version-url]: https://npmjs.org/package/{{name}}
[license-image]: https://img.shields.io/npm/l/{{name}}.svg
[license-url]: https://github.com/{{user}}/{{name}}/blob/master/LICENSE
[dependency-image]: https://img.shields.io/david/{{user}}/{{name}}.svg
[dependency-url]: https://david-dm.org/{{user}}/{{name}}
[devdependency-image]: https://img.shields.io/david/dev/{{user}}/{{name}}.svg
[devdependency-url]: https://david-dm.org/{{user}}/{{name}}?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: http://standardjs.com
