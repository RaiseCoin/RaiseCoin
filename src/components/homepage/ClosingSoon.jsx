import React from "react";

import StockWidget from "./StockWidget";

const ClosingSoon = ({ title }) => {
	const data = [
		{
			image: `/recomendation_images/c_one.webp`,
			name: `WiGL`,
			review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
		},
		{
			image: `/recomendation_images/c_two.webp`,
			name: `NERD Focus`,
			review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
		},
		{
			image: `/recomendation_images/c_three.webp`,
			name: `ACME AtronOmatic`,
			review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
		},

	];
	return (
		<div className="w-full bg-gray-100 ">
			<div className="w-4/5 m-auto py-14">
				<h1 className="text-3xl text-gray-700 font-semibold text-left pb-10">
					{title}
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-7">
					{data.map((e, index) => (
						<StockWidget key={index} e={e} />
					))}
				</div>
			</div>
		</div>
	);
};


export default ClosingSoon;
