import React from 'react'
import Stats from './Stats'
import Players from './Players'
import Sponsors from './Sponsors'
import { useState, useEffect } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
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
		  h-screen w-1/3">
			<div className="w-full flex flex-col items-center justify-around h-[20%]">
				<h1 className="text-5xl font-extrabold">Penaltový Král</h1>
				<Select>
					<SelectTrigger className="w-[350px] text-4xl font-bold border-0">
						<SelectValue placeholder="Kategorie" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="kategorie-do-15">Kategorie do 15</SelectItem>
						<SelectItem value="kategorie-15+">Kategorie 15+</SelectItem>
						<SelectItem value="vysledky-do-15">Výsledky do 15</SelectItem>
						<SelectItem value="vysledky-15+">Výsledky 15+</SelectItem>
					</SelectContent>
				</Select>

				{/*
				<Tabs
					defaultValue="account"
					className="w-full flex justify-center">
					<TabsList className="bg-white">
						<TabsTrigger
							value="account"
							onClick={() => setActiveTab(!activeTab)}
							className={activeTab ? styles.btn15 : styles.btnActive15}>
							Kategorie do 15
						</TabsTrigger>
						<TabsTrigger
							value="password"
							onClick={() => setActiveTab(!activeTab)}
							className={activeTab ? styles.btnActive18 : styles.btn18}>
							Kategorie 15 +
						</TabsTrigger>
					</TabsList>
				</Tabs>
				*/}
			</div>
			<div className="w-full h-[80%] flex flex-col">
				<Stats stats={stats} />
				<Players />
				<Sponsors />
			</div>
		</aside>
	);
}

export default Aside