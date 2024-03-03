import React from "react";
import Image from "next/image";

import { FaMobileAlt, FaRegEnvelope, FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const signup = () => {
	return (
		<div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center bg-gray-100 h-[100vh]">
			<div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
				<div className="w-3/5 p-5">
					{/*signup Section*/}
					<div className="text-left font-bold">
						<Link href="/" className="text-green-600">
							RaiseCoin
						</Link>
						href="/"
					</div>
					<div className="py-10">
						<h2 className="text-3xl font-bold text-green-600 mb-2">Sign Up</h2>
						{/*green bar*/}
						<div className="border-2 w-10 border-green-600 inline-block mb-5"></div>
						<div className="flex flex-col items-center">
							<div className="bg-gray-200 w-64 p-2 flex items-center mb-3">
								{/*name section*/}
								<FaRegUser className="text-gray-600 m-2" />
								<input
									type="text"
									name="name"
									placeholder="Full Name"
									className="bg-gray-200 outline-none text-sm flex-1"
								/>
							</div>
							<div className="bg-gray-200 w-64 p-2 flex items-center mb-3">
								{/*name section*/}
								<FaMobileAlt className="text-gray-600 m-2" />
								<input
									type="number"
									name="mobile"
									placeholder="Mobile"
									className="bg-gray-200 outline-none text-sm flex-1"
								/>
							</div>
							<div className="bg-gray-200 w-64 p-2 flex items-center mb-3">
								{/*email section*/}
								<FaRegEnvelope className="text-gray-600 m-2" />
								<input
									type="email"
									name="email"
									placeholder="Email"
									className="bg-gray-200 outline-none text-sm flex-1"
								/>
							</div>
							{/* <button
								className="logo-button flex items-center mt-3 border-2 pr-3 rounded-xl bg-slate-800"
								onClick="#">
								<Image
									src={`/sign_in/metamask.png`}
									height={40}
									width={60}
									className="logo h-10 w-14"
								/>
								<span className="text">Connect MetaMask</span>
							</button> */}
							<ConnectButton chainStatus="none" label="Connect wallet" showBalance={false}/>
							<p className="mt-5 text-black text-[10px]">
								By signing up you agree with our<br/>{" "}
								<a href="#" className="font-semibold text-green-600">Terms and Conditions</a> &{" "}
								<a href="#" className="font-semibold text-green-600">Privacy
								Policy</a>
							</p>
							<a
								href="#"
								className="mt-1 border-2 text-green-600 border-green-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-600 hover:text-white">
								Sign Up
							</a>
							{/*signup button*/}
						</div>
					</div>
				</div>
				<div className="w-2/5 bg-green-600 rounded-tr-2xl rounded-br-2xl py-36 px-12">
					{/*Signup section*/}
					<h2 className="text-3xl font-bold mb-2">Hey, There!</h2>
					<div className="border-2 w-10 border-white inline-block mb-10"></div>
					{/*white bar*/}
					<p className="mb-4">
						Already have an account?
						<br />
						Sign in here.
					</p>
					<a
						href="/signin"
						className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-600">
						Sign In
					</a>
					{/*signup button*/}
				</div>
			</div>
		</div>
	);
};

export default signup;
