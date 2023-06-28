import { GoogleSpreadsheet } from "google-spreadsheet";

export default async function handler(_req, res) {
  const doc = new GoogleSpreadsheet(
    "1s6GBtj7ItUPdbnYUGZ7ghzAtbwCO-PKU4RqivCXdotI"
  );
  doc.useApiKey("AIzaSyBP6A-1rMWSR2Oi2maHP0KIk73Nn5_Psbc");
  await doc.getInfo();

  const sheet = doc.sheetsByIndex[0];
  await sheet.loadCells("A2:J50");

  const rowsCount = (await sheet.getRows()).length;
  const columnsCount = 10;

  // array of length rowsCount * columnsCount
  const data = Array(rowsCount)
    .fill(0)
    .map((_, row) =>
      Array(columnsCount)
        .fill(0)
        .map((_, col) => sheet.getCell(row + 1, col).value)
    );

  res.status(200).json(data);
}
