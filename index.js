const fs = require('fs');


function modifyUser(name, course, category) {
  fs.readFile('./usuario.json', { encoding: 'utf-8' }, (error, content) => { 
  
    //alterando os valores do JSON
    if (error) {
      console.log('Failed to read the file');
    
    } else {
     
      content = JSON.parse(content);
      content.name = name;
      content.course = course;
      content.category = category;
      content = JSON.stringify(content)
    
      //subescreevendo as alterações no arquivo usuário.json
      fs.writeFile('./usuario.json', content, (error) => { 
        
        if (error) {
          console.log(error);
        };

      });
  
    };
  
  });

};

modifyUser('Diego', 'Node', 'JS development');