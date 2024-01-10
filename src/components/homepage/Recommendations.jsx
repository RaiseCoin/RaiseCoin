import Image from "next/image";
import React from "react";
import "swiper/css";

const Recommendations = () => {
	return (
		<div className="w-full  bg-pink-600">
			<div className="w-3/4 m-auto swiper">
				<div className="my-10 swiper-wrapper grid-cols-3 gap-5">
					{data.map((e) => (
						<div className="bg-gray-50 w-full text-black rounded-xl">
							<div className="w-full rounded-t-xl flex justify-center items-center">
								<Image
									src={e.image}
									height={300}
									width={400}
									alt=""
									className="w-full aspect-video rounded-t-xl object-cover"
								/>
							</div>

							<div className="flex flex-col justify-center items-center gap-4 p-4">
								<p className="text-xl font-semibold">{e.name}</p>
								<p>{e.review}</p>
								<button className="bg-[#023047] text-white text-lg px-6 py-1 rounded-xl">
									Read More
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

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

export default Recommendations;
