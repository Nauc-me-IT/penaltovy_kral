import { GoogleSpreadsheet } from "google-spreadsheet";

export default async function handler(req, res) {
  const doc = new GoogleSpreadsheet(
    "1s6GBtj7ItUPdbnYUGZ7ghzAtbwCO-PKU4RqivCXdotI"
  );
  doc.useApiKey("AIzaSyBP6A-1rMWSR2Oi2maHP0KIk73Nn5_Psbc");
  await doc.getInfo();
  console.log(doc.title);

  const sheet = doc.sheetsByIndex[0]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`
  console.log(sheet.title);
  console.log(sheet.rowCount);

  await sheet.loadCells("A1:J50");
  console.log(sheet.cellStats); // total cells, loaded, how many non-empty
  const a1 = sheet.getCell(0, 0); // access cells using a zero-based index
  const c6 = sheet.getCellByA1("C6"); // or A1 style notation
  // access everything about the cell
  console.log(a1.value);
  console.log(a1.formula);
  console.log(a1.formattedValue);
  console.log(c6.value);
  console.log(c6.formula);
  console.log(c6.formattedValue);

  res.status(200).json(a1.value);
}