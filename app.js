const Reader = require('./Reader');
const { Process } = require('./Processor');

let reader = new Reader();

async function main() {
  let data = await reader.Read('./users.csv');
  let rows = Process(data);
  console.log(rows);
};

main();
