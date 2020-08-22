const fs = require('fs'); //modulo para a manipulação de arquivos pelo node

fs.readFile('./diego.richard',{encoding: 'utf-8'}, (error, content) => { 
  if (error) {
    console.log('Failed to read the file');
  } else {
    console.log(content);
  }
});

