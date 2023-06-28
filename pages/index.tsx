import "./globals.css";
import Stream from "../components/Stream";
import Aside from "../components/Aside";

export default function Home() {


	return (
		<main className="flex min-h-screen w-screen items-center justify-between">
			<Stream />
			<Aside />
		</main>
	);
}
