# @zce-templates/nm

[![Build Status][travis-image]][travis-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

> A template for generating node modules by [zce-cli](https://github.com/zce/zce-cli)

## Usage

```shell
# Install the zce-cli globally
$ yarn global install zce-cli # or npm install -g zce-cli

# Init a module through this template
$ zce init nm my-module
$ cd my-module

# Installing the dependencies
$ yarn # or npm install

# Running test if you choose test features
$ yarn test # or npm run test
```

## TODOS

- [x] `template/package.json` dependencies stay up to date.
- [x] More license choices support.
- [ ] Optional package manager: yarn/npm.
- [ ] ECMAScript Module support.

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; [汪磊](https://zce.me)



[travis-image]: https://img.shields.io/travis/zce-templates/nm.svg
[travis-url]: https://travis-ci.org/zce-templates/nm
[dependency-image]: https://img.shields.io/david/zce-templates/nm.svg
[dependency-url]: https://david-dm.org/zce-templates/nm
[devdependency-image]: https://img.shields.io/david/dev/zce-templates/nm.svg
[devdependency-url]: https://david-dm.org/zce-templates/nm?type=dev
[style-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[style-url]: http://standardjs.com
