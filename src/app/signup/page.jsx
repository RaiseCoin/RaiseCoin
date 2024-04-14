"use client"
import React ,{useState} from "react";
import Image from "next/image";

import { FaMobileAlt, FaRegEnvelope, FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from "wagmi";
import toast, { Toaster } from 'react-hot-toast';

const signup = () => {
	const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    
	const { address } = useAccount();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Adjusted to match the expected structure
        const payload = {
            data: {
                name,
                number: mobile, // Assuming 'mobile' should be sent as 'number'
                address:address,
                email,
            }
        };

        // Replace `base_url` with your actual base URL
        const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/profiles`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                console.log("Signup successful");
				toast.success("Signup successful");
                // Reset form or redirect user as needed
             } 
			 else {
                console.log("Signup failed",response);
				toast.error("Signup failed");
            }
        } catch (error) {
            console.error("Error during signup:", error);
			toast.error(`Error during signup: ${error.message}`);
        }
    };

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
						<form onSubmit={handleSubmit}>
						<div className="flex flex-col items-center">
							<div className="bg-gray-200 w-64 p-2 flex items-center mb-3">
								{/*name section*/}
								<FaRegUser className="text-gray-600 m-2" />
								<input
									type="text"
									name="name"
									placeholder="Full Name"
									className="bg-gray-200 outline-none text-sm flex-1"
									value={name} onChange={(e) => setName(e.target.value)}
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
									value={mobile} 
									onChange={(e) => setMobile(e.target.value)}
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
									value={email} 
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
						
							<ConnectButton chainStatus="none" label="Connect wallet" showBalance={false}/>
							<p className="mt-5 text-black text-[10px]">
								By signing up you agree with our<br/>{" "}
								<a href="#" className="font-semibold text-green-600">Terms and Conditions</a> &{" "}
								<a href="#" className="font-semibold text-green-600">Privacy
								Policy</a>
							</p>
							<button
                            type="submit"
                            className="mt-1 border-2 text-green-600 border-green-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-600 hover:text-white">
                            Sign Up
                        </button>
							{/*signup button*/}
						</div>
						</form>
					</div>
				</div>
				<div className="w-2/5 bg-green-600 rounded-t-2xl rounded-b-2xl py-36 px-12">
					{/*Signin section*/}
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
