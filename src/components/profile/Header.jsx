import React from "react";

const Header = () => {
	return (
		<div className="h-[18vh] w-full flex justify-between border bg-green-600 rounded-t-2xl">
			<div className="flex flex-col items-center my-auto ml-20">
				<p className="text-xl font-semibold">Total Investments</p>
				<p className="text-2xl font-bold">$ 1,23,456</p>
			</div>
			<div className="flex items-center my-auto mx-4">
				{/* Name */}
				<p className="mr-4 font-bold text-2xl">User Full Name</p>
				{/* Profile pic */}
				<div className="w-20 h-20 rounded-full bg-black"></div>
			</div>
		</div>
	);
};

export default Header;
