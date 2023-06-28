import React from 'react'


const Stats = () => {
  return (
		<section className="w-full text-3xl font-semibold border-y-2">
			<div className="flex flex-row justify-between py-2">
				<h4>Počet hráčů</h4>
				<span className="w-[20%] text-center">10</span>
			</div>
			<div className="flex flex-row justify-between border-t  py-2">
				<h4>Zbývá</h4>
				<span className="w-[20%] text-center">8</span>
			</div>
			<div className="flex flex-row justify-between border-t py-2">
				<h4>Kolo</h4>
				<span className="w-[20%] text-center">2</span>
			</div>
		</section>
	);
}

export default Stats