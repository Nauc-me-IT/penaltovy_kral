import { GoogleSpreadsheet } from "google-spreadsheet";

export default async function roundTwo(req, res) {
	const doc = new GoogleSpreadsheet(
		"1s6GBtj7ItUPdbnYUGZ7ghzAtbwCO-PKU4RqivCXdotI"
	);
	doc.useApiKey("AIzaSyBP6A-1rMWSR2Oi2maHP0KIk73Nn5_Psbc");
	await doc.loadInfo(); // Přepnuli jsme z getInfo() na loadInfo()

	const sheet = doc.sheetsByIndex[1];
	const firstNames = await sheet.loadCells("B5:B12");

	const dataArr = [];
	// Save data into variables
	firstNames.map((firstName) => {

		return dataArr.push(firstName.value);
	})

	// export a JSON object with the data we need
	res
		.status(200)
		.json({ dataArr: dataArr });
}
