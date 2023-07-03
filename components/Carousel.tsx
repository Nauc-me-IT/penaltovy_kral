import React, { useState, useEffect } from "react";
import Bauer from "./logos/bauer.webp";
import Autoskola_beskyd from "./logos/autoskola_beskyd.webp";
import Autoopravna from "./logos/autoopravna.webp";
import Klimont from "./logos/air-klimont.webp";
import Alfest from "./logos/alfest2.webp";
import Beton from "./logos/bo-beton.webp";
import Buzek from "./logos/bu-1.webp";
import Dante from "./logos/dante.webp";
import Denik from "./logos/denik.webp";
import Hukvaldske from "./logos/hukvaldske.webp";
import Kalman from "./logos/kalman.webp";
import Naucme from "./logos/naucme2.webp";
import MsKraj from "./logos/ms-kraj.webp";
import Hukvaldy from "./logos/obec-hukvaldy.webp";
import Palec from "./logos/palec-barber.webp";
import Piesa from "./logos/piecha-leseni.webp";
import Potucek from "./logos/potucek.webp";
import Proseco from "./logos/proseco.webp";
import Vetrny from "./logos/roman-vetrny.webp";
import Rusek from "./logos/rusek.webp";
import Schulz from "./logos/schulz.webp";
import Silesia from "./logos/silesia-dent.webp";
import Stk from "./logos/stk-plachta.webp";
import Trailog from "./logos/trailog.webp";
import Tryhard from "./logos/try-hard.webp";
import Viky from "./logos/viky-mont.webp";
import Vzv from "./logos/vzv-steel.webp";

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
		<div className="carousel w-full ">
			{images.map((image, index) => {

				return (
					<Image
						key={index}
						className={`slide`}
						width={200}
						height={100}

						src={image}
						alt={`Slide ${index + 1}`}
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
