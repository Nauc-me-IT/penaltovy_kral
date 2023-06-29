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
	{	id: crypto.randomUUID(),
		playerNumber: 44,
		firstName: "Milan",
		secondName: "Pešák",
	},
];


const Players = () => {
	return (
		<section className="w-full h-[40%] text-3xl font-semibold">
			<h2 className="text-center bg-sky-600 ">Aréna:</h2>
			{arena.map((player) => (
				<Player
					key={player.id}
					id={player.id}
					playerNumber={player.playerNumber}
					firstName={player.firstName}
					secondName={player.secondName}
				/>
			))}

			<h2 className="text-center bg-sky-600 my-4">Next Round:</h2>
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
