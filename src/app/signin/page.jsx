import React from "react";
import { FaFacebook, FaGoogle, FaRegEnvelope, FaLock } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

const signin = () => {
	return (
		<div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
			<div className="bg-grey-100 rounded-2xl  shadow-2xl flex w-2/3 max-w-4xl">
				<div className="w-3/5 p-5">
					{/*Login Section*/}
					<div className="text-left font-bold">
						<span className="text-green-600">RaiseCoin</span>
					</div>
					<div className="py-10">
						<h2 className="text-3xl font-bold text-green-600 mb-2">Sign In</h2>
						<div className="border-2 w-10 border-green-600 inline-block mb-5"></div>
						{/*green bar*/}
						<div className="flex justify-center my-2">
							<a
								href="#"
								className="border-2 border-gray-200 rounded-full p-3 mx-1">
								<FaFacebook className="text-xl text-black" />
							</a>
							<a
								href="#"
								className="border-2 border-gray-200 rounded-full p-3 mx-1">
								<FaGoogle className="text-xl text-black" />
							</a>
						</div>
						{/* {other Login options} */}
						<p className="text-gray-400 my-3">or use email & passowrd</p>
						<div className="flex flex-col items-center">
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
							<div className="bg-gray-200 w-64 p-2 flex items-center mb-3">
								{/*password section*/}
								<MdLockOutline className="text-gray-600 m-2" />
								<input
									type="password"
									name="password"
									placeholder="Password"
									className="bg-gray-200 outline-none text-sm flex-1"
								/>
							</div>
							<div className="flex justify-between w-64 mb-5">
								<label className="flex items-center text-xs text-black">
									<input type="checkbox" name="remember" className="mr-1" />
									Remember me
								</label>
								<a href="#" className="text-xs text-black">
									Forgot Password
								</a>
							</div>
							<a
								href="#"
								className="border-2 text-green-600 border-green-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-600 hover:text-white">
								Sign In
							</a>
							{/*signin button*/}
						</div>
					</div>
				</div>
				<div className="w-2/5 bg-green-600 rounded-tr-2xl rounded-br-2xl py-36 px-12">
					{/*Signup section*/}
					<h2 className="text-3xl font-bold mb-2">Hey, There!</h2>
					<div className="border-2 w-10 border-white inline-block mb-10"></div>
					{/*white bar*/}
					<p className="mb-4">
						Don't have an account?
						<br /> No worries, SignUp here.
					</p>
					<a
						href="#"
						className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-600">
						Sign Up
					</a>
					{/*signup button*/}
				</div>
			</div>
		</div>
	);
};

export default signin;
