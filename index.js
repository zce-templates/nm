const { relative } = require('path')

module.exports = {
  name: 'nm',
  version: '0.1.0',
  metadata: {
    year: new Date().getYear() + 1900,
    month: ('0' + (new Date().getMonth() + 1)).substr(-2),
    day: ('0' + new Date().getDate()).substr(-2)
  },
  prompts: {
    name: {
      type: 'input',
      message: 'Project name'
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
    version: {
      type: 'input',
      message: 'Project version'
    },
    license: {
      type: 'list',
      message: 'Project license',
      choices: ['MIT', 'Apache', 'GPL']
    },
    user: {
      type: 'input',
      message: 'GitHub username',
      default: 'zce'
    },
    cli: {
      type: 'confirm',
      message: 'Need a CLI?',
      default: false
    },
    doc: {
      type: 'confirm',
      message: 'Need additional doc?',
      default: false
    },
    example: {
      type: 'confirm',
      message: 'Need some examples?',
      default: false
    },
    test: {
      type: 'confirm',
      message: 'Need unit/e2e tests?',
      default: false
    },
    coverage: {
      type: 'confirm',
      message: 'Need code coverage?',
      when: a => a.test,
      default: false
    }
  },
  filters: {
    'bin/**': a => a.cli,
    'doc/**': a => a.doc,
    'example/**': a => a.example,
    'test/**': a => a.test,
    '.travis.yml': a => a.test
  },
  complete: context => {
    console.log('  To get started:')
    console.log()
    context.inPlace || console.log(`    $ cd ${relative(process.cwd(), context.dest)}`)
    console.log('    $ yarn')
    console.log()
    console.log('  Good luck~')
  }
}
