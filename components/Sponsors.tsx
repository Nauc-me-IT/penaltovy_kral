import React from 'react'
import Carousel from "./Carousel";

const Sponsors = () => {


	return (
		<section className="h-[30%] flex flex-col items-center justify-center w-full">
			<h2 className="absolute -z-10 text-6xl font-bold">Sponzoři</h2>
			<Carousel />
		</section>
	);
}

export default Sponsors