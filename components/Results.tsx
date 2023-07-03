import React from 'react';
import { useState, useEffect } from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

interface Props {
	results: {
		[key: string]: string;
	},
	loading: boolean;
};
const Results = ({results, loading}:Props) => {
const [props, setProps] = useState<any>([]);

useEffect(() => {
	setProps(results);
}, [results]);

  return (
		<div className="w-screen h-screen">
			<h2 className="text-center text-4xl font-bold">Výsledky KADETI </h2>
			<Table>
				<TableCaption>A list of your recent invoices.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Status</TableHead>
						<TableHead className="text-right">Method</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className="font-medium">INV001</TableCell>

						<TableCell className="text-right">Credit Card</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
}

export default Results