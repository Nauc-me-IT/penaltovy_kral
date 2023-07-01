import React from 'react'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const SelectMenu = () => {
  return (
		<Select>
					<SelectTrigger className="w-auto text-2xl font-extrabold border-0">
						<SelectValue placeholder="Kategorie"  />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="kategorie-do-15">
							Kategorie KADET
						</SelectItem>
						<SelectItem value="kategorie-15+">
							Kategorie ELITE
						</SelectItem>
						<SelectItem value="vysledky-do-15">
							Výsledky KADET
						</SelectItem>
						<SelectItem value="vysledky-15+">
							Výsledky ELITE
						</SelectItem>
					</SelectContent>
				</Select>
  )
}

export default SelectMenu