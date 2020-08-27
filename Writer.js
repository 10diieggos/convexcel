const fs = require('fs');
const util = require('util');


class Writer {
  constructor () {
    this.writeFile = util.promisify(fs.writeFile);
  };

  async Write (filePath, data) {
    
    try {
      
      await this.writeFile(filePath, data);
    
    } catch (err) {
     
      return err;
    
    };

  };

};

module.exports = Writer;
