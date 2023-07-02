import React from 'react'

type Props = {
	name: string,

}

const NextPlayers = ({name}:Props) => {

	return (
		<div className="flex flex-row  w-full justify-between text-center text-xl font-bold">
			<h4 className="w-[20%]"></h4>
			<h4 className="w-[60%]">{name}</h4>
			<span className=" w-[20%]">⚽</span>
		</div>
	);
}

export default NextPlayers