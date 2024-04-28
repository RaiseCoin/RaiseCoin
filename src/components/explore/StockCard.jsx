import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEthereum } from "react-icons/fa6";

const StockCard = ({
	id,
	image,
	name,
	subtitle,
	amtRaised,
	noOfInvestors,
	minInvestment,
	link,
}) => {
	console.log(image);
	
	return (
		<div className="bg-gray-100 shadow-md w-full text-black rounded-xl">
			<div className="w-full rounded-t-xl flex justify-center items-center relative">
				<Image
					src={image}
					height={300}
					width={400}
					alt=""
					className="w-full aspect-video rounded-t-xl object-contain"
				/>
				<div className="absolute bottom-0 right-4 cursor-pointer bg-green-500 rounded-full translate-y-[50%] h-12 w-12 flex justify-center items-center">
					<span className="text-3xl text-green-50 font-light">+</span>
				</div>
			</div>
			<div className="flex flex-col justify-center items-start p-4">
				<p className="text-xl text-gray-900 font-bold pb-1">{name}</p>
				<p className="text-sm text-gray-500 pb-3">{subtitle}</p>
				<div className="w-full border-t border-gray-900 border-dashed pb-3" />
				<div className="grid grid-cols-3 pb-3">
					<div>
						<p className="text-sm text-green-500 font-bold flex items-center gap-0.5">
							
							{amtRaised}
						</p>
						<p className="text-sm text-gray-500">Raised</p>
					</div>
					<div>
						<p className="text-sm text-green-500 font-bold">{noOfInvestors}</p>
						<p className="text-sm text-gray-500">Investors</p>
					</div>
					<div>
						<p className="text-sm text-green-500 font-bold flex items-center gap-0.5">
							{/* <FaEthereum /> */}
							{minInvestment}
						</p>
						<p className="text-sm text-gray-500">Min. Investment</p>
					</div>
				</div>
				<Link
					href={`/explore/${id}`}
					className="bg-[#023047] self-end text-white text-sm px-6 py-1.5 rounded-lg">
					More Details
				</Link>
			</div>
		</div>
	);
};

export default StockCard;
