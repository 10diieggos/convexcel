class Processor {

  static Process(data) {
    let rows = data.split('\n');
    
    let rows2 = []
    
    rows.forEach(row => {
      row = row.split(',');
      rows2.push(row);
    });
    
    return rows2;

  };

};

module.exports = Processor;