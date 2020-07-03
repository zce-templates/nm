// Sharing the dependencies of zce-cli
module.paths = module.parent.paths

const path = require('path')
// const { logger } = require(path.resolve(module.paths[0], '../../common'))

const date = new Date()

/**
 * @type {import('../../../src/commands/generator').TemplateOptions}
 */
module.exports = {
  name: 'nm',
  version: '0.2.0',
  metadata: {
    year: date.getFullYear(),
    month: ('0' + (date.getMonth() + 1)).substr(-2),
    day: ('0' + date.getDate()).substr(-2)
  },
  questions: [
    {
      name: 'name',
      type: 'input',
      message: 'Project name'
    },
    {
      name: 'version',
      type: 'input',
      message: 'Project version'
    },
    {
      name: 'description',
      type: 'input',
      message: 'Project description',
      initial: 'Awesome node module'
    },
    {
      name: 'author',
      type: 'input',
      message: 'Project author'
    },
    {
      name: 'github',
      type: 'input',
      message: 'GitHub username',
      initial: 'zce'
    },
    {
      name: 'license',
      type: 'select',
      message: 'Project license',
      // TODO: more license choices~
      // http://www.ruanyifeng.com/blog/2011/05/how_to_choose_free_software_licenses.html
      choices: ['MIT', 'Apache']
    },
    {
      name: 'features',
      type: 'multiselect',
      message: 'Choose the features you need',
      initial: [3],
      choices: [
        { message: 'CLI Program', name: 'cli' },
        { message: 'Additional docs', name: 'doc' },
        { message: 'Additional examples', name: 'example' },
        { message: 'Automatic test', name: 'test' },
        { message: 'Test coverage', name: 'coverage' }
      ]
    }
  ],
  filters: {
    'bin/**': answers => answers.features.includes('cli'),
    'doc/**': answers => answers.features.includes('doc'),
    'example/**': answers => answers.features.includes('example'),
    'test/**': answers => answers.features.includes('test'),
    '.travis.yml': answers => answers.features.includes('test')
  },
  plugin: async (context, next) => {
    // app.metadata() => answers
    // TODO: before filter
    next()
    // TODO: after template render
  },
  complete: async (context) => {
    const { dest } = context
    const cwd = process.cwd()

    // logger.log('✨  To get started:')
    // logger.log()
    // dest === cwd || logger.log(logger.color.cyan(`   $ cd ${path.relative(cwd, dest)}`))
    // logger.log(logger.color.cyan('   $ yarn'))
    // logger.log()
    // logger.log('👻  Good luck :)')
  }
}
