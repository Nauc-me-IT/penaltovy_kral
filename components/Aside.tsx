import React from 'react'
import Category from './Category'
import Stats from './Stats'
import Players from './Players'
import Sponsors from './Sponsors'
import { useState, useEffect } from "react";
const Aside = () => {
	const [stats, setStats] = useState<any>([]);
	const [loading, setLoading] = useState(true);

	//REFRESH IS SET TO 10 SECONDS by setTimeout
	 useEffect(() => {
	 	const interval = setInterval(() => {
	 		fetch("api/data")
	 			.then((res) => res.json())
	 			.then((data) => {
	 				setStats(data);
	 				setLoading(false);
					//console.log(data)
	 			});
	 	}, 10000);
	 	return () => clearInterval(interval);
	 }, []);



	if (loading) {
		return <h1>Loading...</h1>;
	}

	return (
		<aside
			className="flex flex-col items-center
		  h-screen w-1/3 pt-8">
			<h1 className="text-5xl font-extrabold">Penaltový Král</h1>
			<Category  />
			<div className="w-full h-full flex flex-col justify-between pt-8">
				<Stats stats={stats} />
				<Players />
				<Sponsors />
			</div>
		</aside>
	);
}

export default Aside