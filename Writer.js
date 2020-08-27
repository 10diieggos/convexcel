const fs = require('fs');
const util = require('util');


class Writer {
  constructor () {
    this.writeFile = util.promisify(fs.writeFile);
  };

  Write (filePath, data) {
      
      this.writeFile(filePath, data);

  };

};

module.exports = Writer;
