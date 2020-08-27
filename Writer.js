const fs = require('fs');


class Writer {

  static Write (filePath, data) {
      
      fs.writeFile(filePath, data, (err)=>{});

  };

};

module.exports = Writer;
