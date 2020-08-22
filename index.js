const fs = require('fs'); //modulo para a manipulação de arquivos pelo node


fs.writeFile('./diego.richard', 'This is a new content added by fs.writeFile() method', (error) => {
  if (error) {
    console.log('Failed to add content');
  }
});

fs.readFile('./diego.richard', { encoding: 'utf-8' }, (error, content) => { 
  if (error) {
    console.log('Failed to read the file');
  } else {
    console.log(content);
  }
});