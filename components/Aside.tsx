import React from 'react'
import Category from './Category'
import Stats from './Stats'
import Players from './Players'
import Sponsors from './Sponsors'

const Aside = () => {
  return (
		<aside
			className="flex flex-col items-center
		  h-screen w-1/3 pt-8">
			<h1 className="text-5xl font-extrabold">Penaltový Král</h1>
			<Category />
			<div className="w-full h-full flex flex-col justify-between pt-8">
				<Stats />
				<Players />
				<Sponsors />
			</div>
		</aside>
	);
}

export default Aside