import { GoogleSpreadsheet } from "google-spreadsheet";

export default async function handler(req, res) {
  const doc = new GoogleSpreadsheet(
    "1s6GBtj7ItUPdbnYUGZ7ghzAtbwCO-PKU4RqivCXdotI"
  );
  doc.useApiKey("AIzaSyBP6A-1rMWSR2Oi2maHP0KIk73Nn5_Psbc");
  await doc.loadInfo(); // Přepnuli jsme z getInfo() na loadInfo()

  const sheet = doc.sheetsByIndex[0];
  await sheet.loadCells("A15"); // Načte pouze buňku A15

  const cell = sheet.getCellByA1("A15");
  const value = cell.value;

  res.status(200).json({ value });
}