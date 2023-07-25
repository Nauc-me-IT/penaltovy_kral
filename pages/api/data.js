import { GoogleSpreadsheet } from "google-spreadsheet";

export default async function totalPlayers(req, res) {
	const doc = new GoogleSpreadsheet(
		"1s6GBtj7ItUPdbnYUGZ7ghzAtbwCO-PKU4RqivCXdotI"
	);
	doc.useApiKey("AIzaSyBP6A-1rMWSR2Oi2maHP0KIk73Nn5_Psbc");
	await doc.loadInfo(); // Přepnuli jsme z getInfo() na loadInfo()

	/*
	const checkCellValues = cell => !cell.value ? ["", ""] : cell.value.split("")
	*/

	const checkCellValues = (cell) => {
		!cell.value ? "" : cell.value.split("");
		if (
			!cell.value ||
			cell.value === "" ||
			cell.value === null ||
			cell.value === undefined
		) {
			return ["", ""];
		}
		return cell.value.split(". ");
	};

	// Select menu on list 2 VYBRAT_KATEGORII
	//Sends number of chosen list
	let vyberList = doc.sheetsByIndex[2];
	await vyberList.loadCells("C2:D2");

	// list = index of list in google sheets
	const list = vyberList.getCellByA1("D2");
	const category = vyberList.getCellByA1("C2");

	//Data for Stats.tsx component
	const index = doc.sheetsByIndex[list.value];
	await index.loadCells("A3:C3");

	// Save data into variables
	const totalPlayers = index.getCellByA1("A3");
	const restPlayers = index.getCellByA1("B3");
	const round = index.getCellByA1("C3");

	//Select players for ARENA
	//const arena = doc.sheetsByIndex[list.value];
	await index.loadCells("AF3:AG4");

	// Check what data exact cell returns
	const shooter_1 = index.getCellByA1("AG3");
	const shooter_2 = index.getCellByA1("AG4");

	await index.loadCells("AI3:AL5");

	//Select cells for PRIPRAVI-SE
	const nextPlayer1 = index.getCellByA1("AJ3");
	const nextPlayer2 = index.getCellByA1("AJ4");
	const nextPlayer3 = index.getCellByA1("AJ5");
	const nextPlayer4 = index.getCellByA1("AK3");
	const nextPlayer5 = index.getCellByA1("AK4");
	const nextPlayer6 = index.getCellByA1("AK5");

	// export a JSON object with the data we need
	res.status(200).json({
		category: category.value,
		stats: {
			totalPlayers: totalPlayers.value,
			restPlayers: restPlayers.value,
			round: round.value,
		},
		shooters: [
			{
				id: crypto.randomUUID(),
				startNumber: checkCellValues(shooter_1)[0],
				name: checkCellValues(shooter_1)[1],
			},
			{
				id: crypto.randomUUID(),
				startNumber: checkCellValues(shooter_2)[0],
				name: checkCellValues(shooter_2)[1],
			},
		],
		nextPlayers: [
			{
				id: crypto.randomUUID(),
				startNumber: checkCellValues(nextPlayer1)[0],
				name: checkCellValues(nextPlayer1)[1],
			},
			{
				id: crypto.randomUUID(),
				startNumber: checkCellValues(nextPlayer2)[0],
				name: checkCellValues(nextPlayer2)[1],
			},
			{
				id: crypto.randomUUID(),
				startNumber: checkCellValues(nextPlayer3)[0],
				name: checkCellValues(nextPlayer3)[1],
			},
			{
				id: crypto.randomUUID(),
				startNumber: checkCellValues(nextPlayer4)[0],
				name: checkCellValues(nextPlayer4)[1],
			},
			{
				id: crypto.randomUUID(),
				startNumber: checkCellValues(nextPlayer5)[0],
				name: checkCellValues(nextPlayer5)[1],
			},
			{
				id: crypto.randomUUID(),
				startNumber: checkCellValues(nextPlayer6)[0],
				name: checkCellValues(nextPlayer6)[1],
			},
		],
	});
}
