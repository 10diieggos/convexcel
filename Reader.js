const fs = require('fs');
const util = require('util');


class Reader {

  constructor() {
    this.readFile = util.promisify(fs.readFile); // turns fs.readFile into a promise
  };
  
  async Read (filePath) {
    
    try {
      return await this.readFile(filePath, { encoding: 'utf-8' });
    } catch (err) {
      return err;
    };

  };

};

module.exports = Reader;