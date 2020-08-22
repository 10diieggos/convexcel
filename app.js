const Reader = require('./Reader');
const { Process } = require('./Processor');
const Table = require('./Table');
const { Parse } = require('./HTMLparser');
const Writer = require('./Writer');
const { WritePDF } = require('./PDFwriter');


let reader = new Reader();
let writer = new Writer();

async function main() {
  let data = await reader.Read('./users.csv');
  data = Process(data); //turns data string into data arrays;
  let table = new Table(data);
  let HTML = await Parse(table);
  let message = await writer.Write(`./${Date.now()}.html`, HTML);
  console.log(message)
  WritePDF(`./${Date.now()}.pdf`, HTML);
};

main();

