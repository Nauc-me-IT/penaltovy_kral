import React from 'react'
import Stats from './Stats'
import Players from './Players'
import Sponsors from './Sponsors'
import { useState, useEffect } from "react";



const Aside = ({width}:any) => {
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
	 			});
	 	}, 10000);
	 	return () => clearInterval(interval);
	 }, []);

	if (loading) {
		return (
			<aside
				className={"flex flex-col items-center justify-center h-screen w-full max-w-[550px] "}>
				<img src="https://git.io/typing-svg" alt="" />
				<a href="https://git.io/typing-svg">
					<img
						src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=35&pause=1000&color=2C9BF7&center=true&vCenter=true&width=435&lines=.+.+.+Loading+.+.+."
						alt="Typing SVG"
					/>
				</a>

				<img
					src="https://i.gifer.com/origin/9e/9eb95f634cef84f81f2d4d9929441f53_w200.webp"
					alt="loading-icon"
				/>
			</aside>
		);
	}

	return (
		<aside
			className={`flex flex-col items-center
		  h-screen w-full ${width}`}>
			<div className="w-full flex flex-col items-center justify-center h-[10%] bg-gradient-to-r from-[#11193a] to-[#36457a] font-bold text-white py-1">
				<h1 className="text-4xl font-bold appName">O Penaltového Krále 2023</h1>
				<h2 className="font-bold text-2xl">{stats.category}</h2>
			</div>
			<div className="w-full h-[85%] flex flex-col justify-between grow">
				<Stats stats={stats.stats} />
				<Players stats={stats} loading={loading} />
				<Sponsors />
			</div>
		</aside>
	);
}

export default Aside