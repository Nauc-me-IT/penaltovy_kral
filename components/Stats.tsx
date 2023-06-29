import React from 'react'

type Props = {
	stats: {
		totalPlayers: number;
		restPlayers: number;
		round: number;
	}
}

const Stats = ({stats}:Props) => {

  return (
		<section className="w-full h-[20%] text-3xl font-semibold">
			<div className="flex flex-row justify-between pl-4">
				<h4>Celkem hráčů</h4>
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
}

export default Stats