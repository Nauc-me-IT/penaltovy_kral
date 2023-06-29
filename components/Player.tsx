import React from 'react'

interface Props {
	  id: string;
	  playerNumber: number;
	  firstName: string;
	  secondName: string;
}

const NextPlayers = ({id, playerNumber, firstName, secondName}:Props) => {
  return (
		<div id={id} className="flex flex-row  w-full justify-between text-center">
			<h4 className="w-[20%]">{playerNumber}</h4>
			<h4 className="w-[60%]">
				{firstName} {secondName}
			</h4>
			<span className=" w-[20%]">⚽</span>
		</div>
	);
}

export default NextPlayers