import Image from "next/image";
import React from "react";

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
				<p className="text-4xl font-bold">$ 1,23,456.67</p>
			</div>

			<div className="flex items-center my-auto mx-4 relative z-10">
				{/* Name */}
				<p className="mr-4 font-bold text-2xl text-white">User Full Name</p>
				{/* Profile pic */}
				<div className="aspect-square w-1/3 flex items-center overflow-clip rounded-full bg-black">
					<Image width={100} height={100} src="/metamask.png" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Header;
