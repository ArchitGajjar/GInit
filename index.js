const chalk  = require('chalk'),
  clear  = require('clear'),
  figlet = require('figlet'),
  files = require('./lib/files'),
  inquirer = require('./lib/inquirer');
clear();
console.log(
  chalk.yellow(
    figlet.textSync('Ginit', { horizontal: 'full'})
  )
);

if ( files.directoryExists('.git')) {
  console.log(chalk.red('Already a git repository'));
  process.exit();
}

const run = async () => {
  const credentials = await inquirer.askGithubCredentials();
  console.log(credentials);
};

run();