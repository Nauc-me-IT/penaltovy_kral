import React from "react";

type Props = {
	stats: {
		totalPlayers: number;
		restPlayers: number;
		round: number;
	};
};

const Stats = ({ stats }: Props) => {
	return (
		<section className=" flex flex-col justify-around w-full h-[15%] text-xl  font-semibold border-2 border-red-500">
			<div className="flex flex-row justify-between pl-4">
				<h4>Celkem střelců</h4>
				<span className="w-[20%] text-center">{stats.totalPlayers}</span>
			</div>
			<div className="flex flex-row justify-between border-t  pl-4">
				<h4>Zbývá</h4>
				<span className="w-[20%] text-center">{stats.restPlayers}</span>
			</div>
			<div className="flex flex-row justify-between border-t pl-4">
				<h4>Kolo</h4>
				<span className="w-[20%] text-center">{stats.round}</span>
			</div>
		</section>
	);
};

export default Stats;
