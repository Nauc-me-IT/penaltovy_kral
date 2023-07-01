import React from "react";
import Player from "./Player";


const arena = [
	{
		id: crypto.randomUUID(),
		playerNumber: 21,
		firstName: "Aleš",
		secondName: "Dostál",
	},
	{
		id: crypto.randomUUID(),
		playerNumber: 1,
		firstName: "Milan",
		secondName: "Diviš",
	},
];

const nextRound = [
	{
		id: crypto.randomUUID(),
		playerNumber: 17,
		firstName: "David",
		secondName: "Kalaš",
	},
	{
		id: crypto.randomUUID(),
		playerNumber: 44,
		firstName: "Milan",
		secondName: "Pešák",
	},
	{
		id: crypto.randomUUID(),
		playerNumber: 17,
		firstName: "David",
		secondName: "Kalaš",
	},
	{
		id: crypto.randomUUID(),
		playerNumber: 44,
		firstName: "Milan",
		secondName: "Pešák",
	},
	{
		id: crypto.randomUUID(),
		playerNumber: 17,
		firstName: "David",
		secondName: "Kalaš",
	},
	{
		id: crypto.randomUUID(),
		playerNumber: 44,
		firstName: "Milan",
		secondName: "Pešák",
	},
];


const Players = () => {
	return (
		<section className="flex flex-col justify-between w-full h-[50%] text-2xl font-semibold border-2 border-black grow">
			<h2 className="text-center bg-sky-600 font-bold">Aréna:</h2>
			{arena.map((player) => (
				<Player
					key={player.id}
					id={player.id}
					playerNumber={player.playerNumber}
					firstName={player.firstName}
					secondName={player.secondName}
				/>
			))}

			<h2 className="text-center bg-sky-600 font-bold ">Next Round:</h2>
			{nextRound.map((player) => (
				<Player
					key={player.id}
					id={player.id}
					playerNumber={player.playerNumber}
					firstName={player.firstName}
					secondName={player.secondName}
				/>
			))}

		</section>
	);
};

export default Players;
