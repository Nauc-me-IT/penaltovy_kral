import React from "react";
import Player from "./Player";
import {useState, useEffect} from "react";



interface Props {
	stats: {
		stats: {
			[key: number]: number;
		};
		shooters: {
			[key: string]: string;
		};
		nextPlayers_NR: {
			[key: string]: string;
		};
		nextPlayers_Name:{
			[key: string]: string | any;
		}
	};
	loading: boolean;
}

const Players = ({stats, loading}:Props) => {
	const [numbers, setNumbers] = useState<[] | string[]>([]);
	const [shooters, setShooters] = useState<[] | string[]>([]);
	const [next_Nr, setNext_Nr] = useState<[] | string[]>([]);
	const [nextPlayers, setNextPlayers] = useState<[] | string[]>([]);



	const showNextPlayers = () => {
		const nextPlayers = stats.nextPlayers_Name;
		const nextPlayersArray = [];
		for (const [key, value] of Object.entries(nextPlayers)) {
			nextPlayersArray.push(value);
		}
		setNextPlayers(nextPlayersArray);
	}

	const saveNumbers = () => {
		const nextNr = stats.nextPlayers_NR;
		const nextNrArray = [];
		for (const [key, value] of Object.entries(nextNr)) {
			nextNrArray.push(value);
		}
		setNext_Nr(nextNrArray);
	}

	useEffect(() => {
		setNumbers([stats.shooters.shooter_1_nr, stats.shooters.shooter_2_nr]);
		setShooters([stats.shooters.shooter_1_name, stats.shooters.shooter_2_name]);
		saveNumbers();
		showNextPlayers();
	}
	, [stats])

	return (
		<section className="flex flex-col justify-between w-full h-[50%] text-2xl font-semibold border-2 border-black grow">
			<h2 className="text-center bg-gradient-to-r from-[#11193a] to-[#36457a] font-bold text-white py-1">
				Aréna:
			</h2>

			{!loading &&
				shooters.map((shooter, index) => (
					<Player key={index} name={shooter} number={numbers[index]} />
				))}

			<h2 className="text-center bg-gradient-to-r from-[#11193a] to-[#36457a] font-bold text-white py-1">
				Next Round:
			</h2>
			{nextPlayers.map((player, index) => (
				<Player key={index} name={player} number={next_Nr[index]} />
			))}
		</section>
	);
};

export default Players;
