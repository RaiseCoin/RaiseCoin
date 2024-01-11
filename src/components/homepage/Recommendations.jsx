import React from "react";
import "swiper/css";
import StockWidget from "../Utils/StockWidget";

const Recommendations = ({ title }) => {
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
		<div className="w-full bg-gray-700">
			<div className="w-3/4 m-auto py-14">
				<h1 className="text-3xl text-gray-100 font-semibold text-left pb-10">
					{title}
				</h1>
				<div className="grid grid-cols-3 gap-7">
					{data.map((e, index) => (
						<StockWidget key={index} e={e} />
					))}
				</div>
			</div>
		</div>
	);
};


export default Recommendations;
