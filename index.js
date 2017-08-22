module.exports = {
  name: 'nm',
  version: '0.1.0',
  metadata: {
    year: new Date().getYear() + 1900
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
    repo: {
      type: 'input',
      message: 'GitHub repository name'
    },
    license: {
      type: 'list',
      message: 'Project license',
      choices: ['MIT', 'Apache', 'GPL']
    },
    cli: {
      type: 'confirm',
      message: 'Need a CLI?',
      default: false
    },
    doc: {
      type: 'confirm',
      message: 'Need doc?',
      default: false
    },
    example: {
      type: 'confirm',
      message: 'Need example?',
      default: false
    },
    test: {
      type: 'confirm',
      message: 'Need test?',
      default: false
    },
    ci: {
      type: 'confirm',
      message: 'Need CI?',
      default: false
    },
    cov: {
      type: 'confirm',
      message: 'Need coverage?',
      default: false
    }
  },
  filters: {
    'bin/**': a => a.cli,
    'doc/**': a => a.doc,
    'example/**': a => a.example,
    'test/**': a => a.test,
    '.travis.yml': a => a.ci
  },
  complete (context) {
    console.log('  Good luck~ :-D')
  }
}
