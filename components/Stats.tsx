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
		<section className="w-full text-3xl font-semibold border-y-2">
			<div className="flex flex-row justify-between py-2">
				<h4>Celkem hráčů</h4>
				<span className="w-[20%] text-center">{stats.totalPlayers}</span>
			</div>
			<div className="flex flex-row justify-between border-t  py-2">
				<h4>Zbývá</h4>
				<span className="w-[20%] text-center">{stats.restPlayers}</span>
			</div>
			<div className="flex flex-row justify-between border-t py-2">
				<h4>Kolo</h4>
				<span className="w-[20%] text-center">{stats.round}</span>
			</div>
		</section>
	);
}

export default Stats