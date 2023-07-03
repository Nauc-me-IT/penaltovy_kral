import React from 'react'
import Stats from './Stats'
import Players from './Players'
import Sponsors from './Sponsors'
import { useState, useEffect } from "react";


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
	 			});
	 	}, 10000);
	 	return () => clearInterval(interval);
	 }, []);

	if (loading) {
		return <aside
			className="flex flex-col items-center justify-center
		  h-screen w-full max-w-[550px]">
			<h2 className="text-2xl">Loading...</h2>
		  </aside>

	}

	return (
		<aside
			className="flex flex-col items-center
		  h-screen max-w-[550px]">
			<div className="w-full flex flex-col items-center justify-center h-[15%] bg-gradient-to-r from-[#11193a] to-[#36457a] font-bold text-white py-1">
				<h1 className="text-4xl font-extrabold ">Penaltový Král 2023</h1>
				<h2 className="font-bold text-2xl">{stats.category}</h2>

			</div>
			<div className="w-full h-[85%] flex flex-col justify-between grow">
				{!loading && <Stats stats={stats.stats} />}
				<Players stats={stats} loading={loading} />
				<Sponsors />
			</div>
		</aside>
	);
}

export default Aside