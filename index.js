// @ts-check
// !!! Sharing the dependencies of zce-cli
module.paths = module.parent.paths

const path = require('path')
const { logger } = require('zce-cli/lib/core')

const date = new Date()

/** @type {import('zce-cli/lib/commands/init').TemplateOptions} */
module.exports = {
  name: 'nm',
  version: '0.3.0',
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
      // TODO: more license choices
      choices: ['MIT', 'Apache']
    },
    {
      name: 'features',
      type: 'multiselect',
      message: 'Choose the features you need',
      initial: [3],
      choices: [
        { name: 'cli', message: 'CLI Program' },
        { name: 'doc', message: 'Additional docs' },
        { name: 'example', message: 'Additional examples' },
        { name: 'test', message: 'Automatic test' },
        { name: 'coverage', message: 'Test coverage' }
      ]
    }
  ],
  filters: {
    // @ts-ignore
    'bin/**': answers => answers.features.includes('cli'),
    // @ts-ignore
    'doc/**': answers => answers.features.includes('doc'),
    // @ts-ignore
    'example/**': answers => answers.features.includes('example'),
    // @ts-ignore
    'test/**': answers => answers.features.includes('test'),
    // @ts-ignore
    '.travis.yml': answers => answers.features.includes('test')
  },
  plugin: async (context, next) => {
    // TODO: before inquire
    await next()
    // TODO: after completed
  },
  complete: async context => {
    const { dest } = context
    const { info, color } = logger
    const cwd = process.cwd()
    info('✨ Getting Started:')
    info()
    if (dest !== cwd) {
      info(color.cyan(`  $ cd ${path.relative(cwd, dest)}`))
    }
    info(color.cyan('  $ npm install') + color.gray(' # or yarn'))
    info()
    info('👻 Good luck :)')
    info()
  }
}
