import React, { useState, useEffect } from "react";
import Bauer from "./logo/bauer.webp";
import Autoskola_beskyd from "./logo/autoskola.webp";
import Autoopravna from "./logo/autoopravna.webp";
import Klimont from "./logo/air-klimont.webp";
import Alfest from "./logo/alfest.webp";
import Beton from "./logo/bobeton.webp";
import Buzek from "./logo/bu1.webp";
import Dante from "./logo/dante.webp";
import Denik from "./logo/denik.webp";
import Hukvaldske from "./logo/hukvald-pivo.webp";
import Kalman from "./logo/kalman.webp";
import Naucme from "./logo/naucme2.webp";
import MsKraj from "./logo/ms-kraj.webp";
import Hukvaldy from "./logo/obec-hukvaldy.webp";
import Palec from "./logo/palec-barber.webp";
import Piesa from "./logo/piecha-leseni.webp";
import Potucek from "./logo/potucek.webp";
import Proseco from "./logo/prosecco.webp";
import Vetrny from "./logo/romanvrtny.webp";
import Rusek from "./logo/jindrich-rusek.webp";
import Schulz from "./logo/fruko.webp";
import Silesia from "./logo/silesia.webp";
import Stk from "./logo/stk-plachta.webp";
import Trailog from "./logo/trainlog.webp";
import Tryhard from "./logo/try-hard.webp";
import Viky from "./logo/viky-mont.webp";
import Vzv from "./logo/vzv-steel.webp";

import Image from "next/image";

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [cislo, setCislo] = useState(0);
	const images = [
		Bauer,
		Autoskola_beskyd,
		Autoopravna,
		Klimont,
		Alfest,
		Beton,
		Buzek,
		Dante,
		Denik,
		Hukvaldske,
		Kalman,
		Naucme,
		MsKraj,
		Hukvaldy,
		Palec,
		Piesa,
		Potucek,
		Proseco,
		Vetrny,
		Rusek,
		Schulz,
		Silesia,
		Stk,
		Trailog,
		Tryhard,
		Viky,
		Vzv,
	];

	useEffect(() => {
		const timer = setInterval(() => {

		currentIndex === images.length ? setCislo(0) : setCislo(cislo - 100);

			if (currentIndex > images.length) {
				setCurrentIndex(0);
			} else {
				setCurrentIndex(currentIndex + 1);
			}
		}, 10000);

		return () => clearTimeout(timer);
	}, [currentIndex, images.length]);

	return (
		<div className="carousel w-full h-full ">
			{images.map((image, index) => {

				return (
					<Image
						key={index}
						className={`slide`}
						width={200}
						height={100}
						src={image}
						alt={`Sponzor ${index + 1}`}
						loading="lazy"
						style={{
							transform: `translateX(${cislo}%)`,
						}}
					/>
				);
			})}
		</div>
	);
};

export default Carousel;
