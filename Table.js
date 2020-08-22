class Table {
  constructor (data) {
    this.header = data.shift();
    this.rows = data;
  };

  get RowsCount () {
    return this.rows.length
  };
 
  get ColumnsCount() {
    return this.header.length
  };

};

module.exports = Table