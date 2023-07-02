import React from "react";
import Player from "./Player";
import {useState, useEffect} from "react";

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

interface Props {
	stats: {
		restPlayers: number;
		round: number;
		shooter_1: string;
		shooter_2: string;
		totalPlayers: number;
		nextPlayers: {
			[key: string]: string;
		};
	};
	loading: boolean;
}

const Players = ({stats, loading}:Props) => {
	const [shooters, setShooters] = useState<[] | string[]>([])
	const [nextPlayers, setNextPlayers] = useState<[] | string[]>([])
	console.log(stats)

	const showNextPlayers = () => {
		const nextPlayers = stats.nextPlayers;
		const nextPlayersArray = [];
		for (const [key, value] of Object.entries(nextPlayers)) {
			nextPlayersArray.push(value);
		}
		setNextPlayers(nextPlayersArray);
	}


	useEffect(() => {
		setShooters([stats.shooter_1, stats.shooter_2]);
		showNextPlayers();
	}
	, [stats])

	return (
		<section className="flex flex-col justify-between w-full h-[50%] text-2xl font-semibold border-2 border-black grow">
			<h2 className="text-center bg-gradient-to-r from-[#11193a] to-[#36457a] font-bold text-white py-1">
				Aréna:
			</h2>

			{!loading &&
				shooters.map((shooter, index) => <Player key={index} name={shooter} />)}

			<h2 className="text-center bg-gradient-to-r from-cyan-500 to-blue-500 font-bold from-[#11193a] to-[#36457a] font-bold text-white py-1">
				Next Round:
			</h2>
			{nextPlayers.map((player, index) => (
				<Player key={index} name={player} />
			))}
		</section>
	);
};

export default Players;
