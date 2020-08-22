class Table {
  constructor (data) {
    this.header = data.shift();
    this.rows = data;
  };

  Log () {
    console.log(this.header);
    console.log(this.rows);
  }

};

module.exports = Table