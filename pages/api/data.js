import { GoogleSpreadsheet } from "google-spreadsheet";

/*export default async function handler(req, res) {
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
}*/

export default async function totalPlayers(req, res) {
	const doc = new GoogleSpreadsheet(
		"1s6GBtj7ItUPdbnYUGZ7ghzAtbwCO-PKU4RqivCXdotI"
	);
	doc.useApiKey("AIzaSyBP6A-1rMWSR2Oi2maHP0KIk73Nn5_Psbc");
	await doc.loadInfo(); // Přepnuli jsme z getInfo() na loadInfo()

	const sheet = doc.sheetsByIndex[4];
    await sheet.loadCells("A15:C15"); // Načteme buňky A15 až C15

	// Save data into variables
	const totalPlayers = sheet.getCellByA1("A15");
	const restPlayers = sheet.getCellByA1("B15");
	const round = sheet.getCellByA1("C15");

// export a JSON object with the data we need
	res.status(200).json({ totalPlayers: totalPlayers.value, restPlayers: restPlayers.value, round: round.value});
}