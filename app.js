const Reader = require('./Reader');
const { Process } = require('./Processor');
const Table = require('./Table');

let reader = new Reader();


async function main() {
  let data = await reader.Read('./users.csv');
  data = Process(data); //turns data string into data arrays;
  
  data.push(['ddddd', 'fffff', 'gggg', 'hhhh']);
  data.push(['ddddd', 'fffff', 'gggg', 'hhhh']);
  data.push(['ddddd', 'fffff', 'gggg', 'hhhh']);

  let table = new Table(data);
  console.log(table.RowsCount);
  console.log(table.ColumnsCount);
};

main();
