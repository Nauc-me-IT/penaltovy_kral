import React from "react";
import Player from "./Player";

interface Props {
	stats: {
		stats: Record<number, number>;
		shooters: Record<string, string>;
		nextPlayers: Record<string, string>;
	};
	loading: boolean;
}

const Players = ({stats, loading}:Props) => {

	return (
		<section className="flex flex-col justify-between w-full h-[60%] text-2xl font-semibold">
			<h2 className="text-center bg-gradient-to-r from-[#11193a] to-[#36457a] font-bold text-white py-1">
				Aréna:
			</h2>

			{!loading &&
				Object.values(stats.shooters).map((shooter:any) => (
					<Player
						key={shooter.id}
						name={shooter.name}
						number={shooter.startNumber}
					/>
				))}

			<h2 className="text-center bg-gradient-to-r from-[#11193a] to-[#36457a] font-bold text-white py-1">
				Připraví se:
			</h2>
			{!loading&&
				Object.values(stats.nextPlayers).map((nextPlayer:any) => (
					<Player key={nextPlayer.id} name={nextPlayer.name} number={nextPlayer.startNumber} />
			))}
		</section>
	);
};

export default Players;
