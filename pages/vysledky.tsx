import React from 'react'
import Results from "../components/Results";
import { useState, useEffect } from "react";

const Vysledky = () => {
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
					className="flex flex-col items-center justify-center
		  h-screen w-full max-w-[550px]">
					<h2 className="text-2xl">Loading...</h2>
				</aside>
			);
		}

	return <Results />;
}

export default Vysledky