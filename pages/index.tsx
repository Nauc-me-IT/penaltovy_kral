import "./globals.css";
import Stream from "../components/Stream";
import Aside from "../components/Aside";
import { useState, useEffect } from "react";
export default function Home() {
const [firstNames, setFirstNames] = useState<string[]>([]);
const [loading, setLoading] = useState(true);
 /*
 useEffect(() => {
		const interval = setInterval(() => {
			fetch("api/roundTwo")
				.then((res) => res.json())
				.then((data) => {
					setFirstNames(data);
					setLoading(false);
					console.log(data);
				});
		}, 10000);
		return () => clearInterval(interval);
 }, []);

 if (loading) {
		return <h1>Loading...</h1>;
 }
*/
	return (
		<main className="flex min-h-screen w-screen items-center justify-between">
			<Stream />
			<Aside />
		</main>
	);
}
