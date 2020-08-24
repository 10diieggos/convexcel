const Reader = require('./Reader');
const { Process } = require('./Processor');
const Table = require('./Table');
const { Parse } = require('./HTMLparser');
const Writer = require('./Writer');
const { WritePDF } = require('./PDFwriter');


let reader = new Reader();
let writer = new Writer();

async function main() {
  let data = await reader.Read('./users.csv');//getting the contents of the file (csv) in a string
  data = Process(data); //turns string into arrays;
  let table = new Table(data);//defining headers, rows and counting columns and rows
  let HTML = await Parse(table);//generate source code as a unique string (HTML)
  await writer.Write(`./${Date.now()}.html`, HTML);//write the source code in a generated .pdf file
  WritePDF(`./${Date.now()}.pdf`, HTML);//write the source code in a generated .pdf file
};

main();

