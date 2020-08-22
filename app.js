const Reader = require('./Reader');
const { Process } = require('./Processor');
const Table = require('./Table');
const { Parse } = require('./HTMLparser');

let reader = new Reader();


async function main() {
  let data = await reader.Read('./users.csv');
  data = Process(data); //turns data string into data arrays;
  let table = new Table(data);
  let HTML = await Parse(table);
  console.log(HTML)
};

main();
