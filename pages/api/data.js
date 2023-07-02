import { GoogleSpreadsheet } from "google-spreadsheet";

export default async function totalPlayers(req, res) {
	const doc = new GoogleSpreadsheet(
		"1s6GBtj7ItUPdbnYUGZ7ghzAtbwCO-PKU4RqivCXdotI"
	);
	doc.useApiKey("AIzaSyBP6A-1rMWSR2Oi2maHP0KIk73Nn5_Psbc");
	await doc.loadInfo(); // Přepnuli jsme z getInfo() na loadInfo()

	const sheet = doc.sheetsByIndex[2];
    await sheet.loadCells("A3:I3"); // Načteme buňky A15 až C15

	const AI_Column = doc.sheetsByIndex[2];
	await AI_Column.loadCells("AI9:AI14");

	// Save data into variables
	const totalPlayers = sheet.getCellByA1("A3");
	const restPlayers = sheet.getCellByA1("B3");
	const round = sheet.getCellByA1("C3");
  	const shooter_1 = sheet.getCellByA1("D3");
  	const shooter_2 = sheet.getCellByA1("E3")

	const nextPlayer1 = AI_Column.getCellByA1("AI9");
	const nextPlayer2 = AI_Column.getCellByA1("AI10");
	const nextPlayer3 = AI_Column.getCellByA1("AI11");
	const nextPlayer4 = AI_Column.getCellByA1("AI12");
	const nextPlayer5 = AI_Column.getCellByA1("AI13");
	const nextPlayer6 = AI_Column.getCellByA1("AI14");


// export a JSON object with the data we need
	res.status(200).json({
    totalPlayers: totalPlayers.value,
    restPlayers: restPlayers.value,
    round: round.value,
	shooter_1: shooter_1.value,
	shooter_2: shooter_2.value,
	nextPlayers: {
		nextPlayer1: nextPlayer1.value,
		nextPlayer2: nextPlayer2.value,
		nextPlayer3: nextPlayer3.value,
		nextPlayer4: nextPlayer4.value,
		nextPlayer5: nextPlayer5.value,
		nextPlayer6: nextPlayer6.value,
	}
  });
}