import React from 'react'

type Props = {
	stats: {
		[key: string]: number;
	}
}

const Stats = ({stats}:Props) => {

  return (
		<section className=" flex flex-col justify-around w-full h-[15%] text-2xl  font-semibold">
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
}

export default Stats