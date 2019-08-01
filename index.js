const path = require('path')

// Sharing the dependencies of zce-cli
module.paths = module.parent.paths

const chalk = require('chalk')
const { logger } = require(path.resolve(module.paths[0], '../../common'))

const date = new Date()

module.exports = {
  name: 'nm',
  version: '0.2.0',
  metadata: {
    year: date.getFullYear(),
    month: ('0' + (date.getMonth() + 1)).substr(-2),
    day: ('0' + date.getDate()).substr(-2)
  },
  prompts: {
    name: {
      type: 'input',
      message: 'Project name'
    },
    version: {
      type: 'input',
      message: 'Project version'
    },
    description: {
      type: 'input',
      message: 'Project description',
      default: 'Awesome node module'
    },
    author: {
      type: 'input',
      message: 'Project author'
    },
    github: {
      type: 'input',
      message: 'GitHub username',
      default: 'zce'
    },
    license: {
      type: 'list',
      message: 'Project license',
      // TODO: more license choices~
      // http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html
      choices: ['MIT', 'Apache']
    },
    features: {
      type: 'checkbox',
      message: 'Choose the features you need',
      choices: [
        { name: 'CLI Program', value: 'cli' },
        { name: 'Additional docs', value: 'doc' },
        { name: 'Additional examples', value: 'example' },
        { name: 'Automatic test', value: 'test', checked: true },
        { name: 'Test coverage', value: 'coverage' }
      ]
    }
  },
  filters: {
    'bin/**': answers => answers.features.includes('cli'),
    'doc/**': answers => answers.features.includes('doc'),
    'example/**': answers => answers.features.includes('example'),
    'test/**': answers => answers.features.includes('test'),
    '.travis.yml': answers => answers.features.includes('test')
  },
  plugin: (files, app, next) => {
    // app.metadata() => answers
    // TODO: before filter
    next()
    // TODO: after template render
  },
  complete: context => {
    const { dest } = context
    const cwd = process.cwd()

    logger.log('✨  To get started:')
    logger.log()
    dest === cwd || logger.log(chalk.cyan(`   $ cd ${path.relative(cwd, dest)}`))
    logger.log(chalk.cyan('   $ yarn'))
    logger.log()
    logger.log('👻  Good luck :)')
  }
}
