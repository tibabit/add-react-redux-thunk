const fs = require ('fs');
const path = require ('path');
const ncp = require ('ncp').ncp;

// files to copy

const files = [
'actions',
'reducers',
'selectors',
'store',
];

files.forEach(file => {
  console.log('checking for ', path.join(process.cwd(), 'src', file));
  if (fs.existsSync(path.join(process.cwd(), 'src', file))) {
    console.error('directories with same name already exist');
    process.exit(1);
  }
});

files.forEach(file => {
  ncp(file, path.join(__dirname, 'src', file), function (err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
})

console.log('run command "npm install redux react-redux redux-thunk" to complete the setup');

process.exit(0);
