import Image from "next/image";
import React from "react";
import { FaPen, FaEthereum } from "react-icons/fa6";

const Header = () => {
	return (
		<div className="h-[18vh] shadow-2xl w-full flex justify-between rounded-2xl mb-10 relative overflow-hidden">
			{/* Banner Image */}
			<div
				className="absolute inset-0 bg-[url(/baner.jpg)] bg-cover bg-center opacity-75"
				style={{ filter: "brightness(0.9)" }}></div>

			{/* Overlay */}
			<div className="absolute inset-0 bg-green-600 opacity-25"></div>

			<div className="flex flex-col items-start my-auto ml-20 relative z-10">
				<p className="text-s font-semibold">Total Investments</p>
				<p className="text-4xl font-bold flex items-center mt-4">$ 1,233.67</p>
			</div>

			<div className="flex items-center my-auto mx-4 relative z-10">
				{/* Name */}
				{/* <p className="mr-4 font-bold text-2xl text-white">Jitesh Puri</p> */}
				{/* Profile pic */}
				<div className="group relative aspect-square w-full flex justify-center items-center overflow-clip rounded-full">
					{/* <button
						onClick={"#"}
						className="opacity-100 flex items-center invisible group-hover:visible absolute z-10 py-1 px-2 rounded-xl bg-green-600">
						<FaPen className="pr-1" />
						edit
					</button> */}
					<Image
						width={100}
						height={100}
						src="/metamask.png"
						className="group-hover:opacity-40"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
