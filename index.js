// @ts-check
// !!! Sharing the dependencies of zce-cli
module.paths = module.parent.paths

const { relative } = require('path')
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
      message: 'Project author name'
    },
    {
      name: 'email',
      type: 'input',
      message: 'Project author email'
    },
    {
      name: 'url',
      type: 'input',
      message: 'Project author url'
    },
    {
      name: 'github',
      type: 'input',
      message: 'Github username',
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
      initial: [3, 5],
      choices: [
        { name: 'cli', message: 'CLI Program' },
        { name: 'doc', message: 'Additional docs' },
        { name: 'example', message: 'Additional examples' },
        { name: 'test', message: 'Automatic test' },
        { name: 'coverage', message: 'Test coverage' },
        { name: 'maintain', message: 'Maintain dependencies' },
      ]
    }
  ],
  filters: {
    /** @param {{ features: string[] }} answers */
    '.github/workflows/**': answers => answers.features.includes('test'),
    /** @param {{ features: string[] }} answers */
    '.github/dependabot.yml': answers => answers.features.includes('maintain'),
    /** @param {{ features: string[] }} answers */
    'bin/**': answers => answers.features.includes('cli'),
    /** @param {{ features: string[] }} answers */
    'doc/**': answers => answers.features.includes('doc'),
    /** @param {{ features: string[] }} answers */
    'example/**': answers => answers.features.includes('example'),
    /** @param {{ features: string[] }} answers */
    'test/**': answers => answers.features.includes('test'),
    /** @param {{ features: string[] }} answers */
    '.travis.yml': answers => answers.features.includes('test'),
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
    info('✨ Getting Started:\n')
    if (dest !== cwd) {
      info(color.cyan(`  $ cd ${relative(cwd, dest)}`))
    }
    info(color.cyan('  $ npm install') + color.gray(' # or yarn'))
    info('\ni🐱‍🏍 Good luck :)')
  }
}
