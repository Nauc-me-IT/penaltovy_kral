import { GoogleSpreadsheet } from "google-spreadsheet";

export default async function totalPlayers(req, res) {
	const doc = new GoogleSpreadsheet(
		"1s6GBtj7ItUPdbnYUGZ7ghzAtbwCO-PKU4RqivCXdotI"
	);
	doc.useApiKey("AIzaSyBP6A-1rMWSR2Oi2maHP0KIk73Nn5_Psbc");
	await doc.loadInfo(); // Přepnuli jsme z getInfo() na loadInfo()
	// Select menu on list 2 VYBRAT_KATEGORII
	//Sends number of chosen list
	let vyberList = doc.sheetsByIndex[2];
	await vyberList.loadCells("C2:D2");

	const list = vyberList.getCellByA1("D2");
	const category = vyberList.getCellByA1("C2");

	//Data for Stats.tsx component
	const stats = doc.sheetsByIndex[list.value];
	await stats.loadCells("A3:C3");

	// Save data into variables
	const totalPlayers = stats.getCellByA1("A3");
	const restPlayers = stats.getCellByA1("B3");
	const round = stats.getCellByA1("C3");

  //Select players for ARENA
	const arena = doc.sheetsByIndex[list.value];
	await arena.loadCells("AF3:AG4");

		// Check what data exact cell returns
	const shooter_1_name = arena.getCellByA1("AG3");
	const shooter_1_split =
		shooter_1_name.value === "" ||
		shooter_1_name.value === null ||
		shooter_1_name.value === undefined
			? ["", ""]
			: shooter_1_name.value.split(". ");

	const shooter_2_name = arena.getCellByA1("AG4");
	const shooter_2_split =
		shooter_2_name.value === "" ||
		shooter_2_name.value === null ||
		shooter_2_name.value === undefined
			? ["", ""]
			: shooter_2_name.value.split(". ");

	const pripraviSe = doc.sheetsByIndex[list.value];
	await pripraviSe.loadCells("AI3:AL5");

	//Select cells for PRIPRAVI-SE
	const nextPlayer1 = pripraviSe.getCellByA1("AJ3");
	const nextPlayer2 = pripraviSe.getCellByA1("AJ4");
	const nextPlayer3 = pripraviSe.getCellByA1("AJ5");
	const nextPlayer4 = pripraviSe.getCellByA1("AK3");
	const nextPlayer5 = pripraviSe.getCellByA1("AK4");
	const nextPlayer6 = pripraviSe.getCellByA1("AK5");

	// Check incomming data from cells
	const nextPlayer1_Split =
		nextPlayer1.value === "" ||
		nextPlayer1.value === null ||
		nextPlayer1.value === undefined
			? ["", ""]
			: nextPlayer1.value.split(". ");

	const nextPlayer2_Split =
		nextPlayer2.value === "" ||
		nextPlayer2.value === null ||
		nextPlayer2.value === undefined
			? ["", ""]
			: nextPlayer2.value.split(". ");

	const nextPlayer3_Split =
		nextPlayer3.value === "" ||
		nextPlayer3.value === null ||
		nextPlayer3.value === undefined
			? ["", ""]
			: nextPlayer3.value.split(". ");

	const nextPlayer4_Split =
		nextPlayer4.value === "" ||
		nextPlayer4.value === null ||
		nextPlayer4.value === undefined
			? ["", ""]
			: nextPlayer4.value.split(". ");

	const nextPlayer5_Split =
		nextPlayer5.value === "" ||
		nextPlayer5.value === null ||
		nextPlayer5.value === undefined
			? ["", ""]
			: nextPlayer5.value.split(". ");

	const nextPlayer6_Split =
		nextPlayer6.value === "" ||
		nextPlayer6.value === null ||
		nextPlayer6.value === undefined
			? ["", ""]
			: nextPlayer6.value.split(". ");

	// export a JSON object with the data we need
	res.status(200).json({
		category: category.value,
		stats: {
			totalPlayers: totalPlayers.value,
			restPlayers: restPlayers.value,
			round: round.value,
		},
		shooters: {
			shooter_1_nr: shooter_1_split[0],
			shooter_1_name: shooter_1_split[1],
			shooter_2_nr: shooter_2_split[0],
			shooter_2_name: shooter_2_split[1],
		},
		nextPlayers_NR: {
			nextPlayer1_NR: nextPlayer1_Split[0],
			nextPlayer2_NR: nextPlayer2_Split[0],
			nextPlayer3_NR: nextPlayer3_Split[0],
			nextPlayer4_NR: nextPlayer4_Split[0],
			nextPlayer5_NR: nextPlayer5_Split[0],
			nextPlayer6_NR: nextPlayer6_Split[0],
		},
		nextPlayers_Name: {
			nextPlayer1_Name: nextPlayer1_Split[1],
			nextPlayer2_Name: nextPlayer2_Split[1],
			nextPlayer3_Name: nextPlayer3_Split[1],
			nextPlayer4_Name: nextPlayer4_Split[1],
			nextPlayer5_Name: nextPlayer5_Split[1],
			nextPlayer6_Name: nextPlayer6_Split[1],
		},
	});
}