import React from 'react'
import SelectMenu from './SelectMenu'
import Stats from './Stats'
import Players from './Players'
import Sponsors from './Sponsors'
import { useState, useEffect } from "react";

/*
const styles = {
	btn15: "text-xs ",
	btnActive15:
		"text-3xl transition-all duration-500 ease-in-out transform text-center border-sky-200 border-4 font-bold ml-[25%]",
	btn18: "text-xs ",
	btnActive18:
		"text-3xl transition-all duration-500 ease-in-out transform text-center justify-center  border-sky-200 border-4 font-bold mr-[30%]",
};*/
const Aside = () => {
	const [stats, setStats] = useState<any>([]);
	const [loading, setLoading] = useState(true);
	const [active, setActive] = useState("15");


	//REFRESH IS SET TO 10 SECONDS by setTimeout
	 useEffect(() => {
	 	const interval = setInterval(() => {
	 		fetch("api/data")
	 			.then((res) => res.json())
	 			.then((data) => {
	 				setStats(data);
	 				setLoading(false);
					console.log(data)
	 			});
	 	}, 10000);
	 	return () => clearInterval(interval);
	 }, []);

	if (loading) {
		return <aside
			className="flex flex-col items-center justify-center
		  h-screen w-1/3">
			<h2 className="text-2xl">Loading...</h2>
		  </aside>

	}

	return (
		<aside
			className="flex flex-col items-center
		  h-screen w-1/4">
			<div className="w-full flex flex-col items-center justify-center h-[15%]">
				<h1 className="text-4xl font-extrabold">Penaltový Král</h1>
				<SelectMenu />
			</div>
			<div className="w-full h-[85%] flex flex-col justify-between grow">
				<Stats stats={stats} />
				<Players />
				<Sponsors />
			</div>
		</aside>
	);
}

export default Aside