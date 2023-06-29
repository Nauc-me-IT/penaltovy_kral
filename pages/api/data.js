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

	const sheet = doc.sheetsByIndex[0];
    await sheet.loadCells("A3:I3"); // Načteme buňky A15 až C15

	// Save data into variables
	const totalPlayers = sheet.getCellByA1("A3");
	const restPlayers = sheet.getCellByA1("B3");
	const round = sheet.getCellByA1("C3");
  const playerOne = sheet.getCellByA1("D3");
  const playerTwo = sheet.getCellByA1("F3")
  const nextPlayerOne = sheet.getCellByA1("H3");
  const nextPlayerTwo = sheet.getCellByA1("I3");
  const playerOneLive = sheet.getCellByA1("E3");
  const playerTwoLive = sheet.getCellByA1("G3");

  // Standings names
  /*/const first = sheet.getCellByA1("B4");
  const second = sheet.getCellByA1("B5");
  const third = sheet.getCellByA1("B6");
  const fourth = sheet.getCellByA1("B7")
  const fifth = sheet.getCellByA1("B8");
  const sixth = sheet.getCellByA1("B9");
  const seventh = sheet.getCellByA1("B10");
  const eighth = sheet.getCellByA1("B11");
  const ninth = sheet.getCellByA1("B12");
  const tenth = sheet.getCellByA1("B13");*/


// export a JSON object with the data we need
	res.status(200).json({ 
    totalPlayers: totalPlayers.value, 
    restPlayers: restPlayers.value, 
    round: round.value,
    playerOne: playerOne.value,
    playerTwo: playerTwo.value,
    nextPlayerOne: nextPlayerOne.value,
    nextPlayerTwo: nextPlayerTwo.value,
    playerOneLive: playerOneLive.value,
    playerTwoLive: playerTwoLive.value,
   /* first: first.value,
    second: second.value,
    third: third.value,
    fourth: fourth.value,
    fifth: fifth.value,
    sixth: sixth.value,
    seventh: seventh.value,
    eighth: eighth.value,
    ninth: ninth.value,
    tenth: tenth.value*/
  });
}