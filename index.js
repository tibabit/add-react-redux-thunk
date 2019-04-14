const fs = require ('fs');
const path = require ('path');
const ncp = require ('ncp').ncp;
const chalk = require('chalk');

function log(...args) {
  console.log('\n');
  console.log(...args);
}
// files to copy

const files = [
'actions',
'reducers',
'selectors',
'store',
];

files.forEach(file => {
  if (fs.existsSync(path.join(process.cwd(), 'src', file))) {
    console.log(chalk.red('directories with same name already exist'), chalk.red(files.join(', ')));
    log(chalk.bgRed('FAILED!!!'));
    process.exit(1);
  }
});

function task(file) {
  return new Promise((resolve, reject) => {
    ncp(path.join(__dirname, 'src', file), path.join(process.cwd(), 'src', file), function (err) {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

Promise.all(files.map(task)).
  then(() => {
    console.log('added files to project');
    console.log(chalk.cyan.bold('run command "npm i --save redux react-redux redux-thunk" to complete the setup'));
    log(chalk.bgGreen('SUCCESS'));
    process.exit(0);
  }).
  catch(err => {
    console.error(err);
    log(chalk.bgRed('FAILED!!!'));
    process.exit(0);
  });
