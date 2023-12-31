import React from 'react'
import Image from 'next/image'
import myGif from "../components/logo/ball.gif";
type Props = {
	[key: string]: string;
}

const NextPlayers = ({name, number}:Props) => {

	return (
		<div
			className="flex flex-row  w-full justify-between text-center text-3xl font-bold playersText"
			id={crypto.randomUUID()}>
			<h4 className="w-[20%]">{number}</h4>
			<h4 className="w-[60%]">{name}</h4>
			<span className="w-[20%] flex justify-center">
				<Image src={myGif} width={40} height={40} alt="ball-gif" />
			</span>
		</div>
	);
}

export default NextPlayers