const fs = require('fs');
const util = require('util');


class Writer {

  static Write (filePath, data) {
      
      fs.writeFile(filePath, data);

  };

};

module.exports = Writer;
