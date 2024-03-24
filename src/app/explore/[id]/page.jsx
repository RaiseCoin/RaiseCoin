"use client";
import CompWrapper from "@/components/Utils/CompWrapper";
import PopUp from "@/components/Utils/PopUp";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { CSpinner } from "@coreui/react";

const page = ({ params }) => {
  const [open, setOpen] = useState(false);
  const id = params.id;
  const handleOpen = () => {
    setOpen(!open);
  };

  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`https://backendpostgres-76ng.onrender.com/api/startups/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setDetails(data.data.attributes); // Assuming the entire response is what you want

          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);

          setLoading(false); 
        });
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CSpinner color="success" />
      </div>
    );
  }
  if (!details) {
    console.log("detailes not found");
    return (
      <div className="flex flex-col justify-center items-center h-svh bg-gray-50 text-green-500">
        <img src="/error.png" alt="Error" className="w-80 h-64 mb-4" />
        <p className="text-xl font-semibold">Details not found.</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <CompWrapper>
        <div className="w-4/5 flex flex-col items-start mx-auto py-10 md:py-28 text-gray-900 ">
          {/* <p className="text-green-500 text-lg tracking-wide font-medium">
            
          </p> */}
          <h2 className="text-gray-900  text-4xl font-bold mt-4 mb-10">
            {details.startupName}
          </h2>
          <div className="md:grid grid-cols-1 md:grid-cols-1 gap-x-5 gap-y-5 pb-10">
            <div className="mt-auto">
              <span className="text-green-500 text-lg font-medium">
                Summary
              </span>
              <p className="text-justify py-8">
                {details.summary}{" "}
              </p>
            </div>
            <Image
              src={"/recomendation_images/c_one.webp"}
              height={300}
              width={400}
              alt=""
              className="w-full hidden md:flex md:w-[90%] md:ml-auto my-auto aspect-video rounded-xl object-cover"
            />

            <button
              onClick={handleOpen}
              className="bg-green-500 text-white font-medium px-14 py-4 rounded hover:bg-green-600 duration-300 self-center uppercase w-fit col-span-2"
            >
              Invest Now
            </button>
            <div className="w-full bg-white rounded-md shadow cursor-pointer flex gap-4 justify-between items-center  px-6 py-4">
              <span className="text-gray-900 uppercase font-light my-10">
                Previous Funding
              </span>
              <span className="text-green-500 text-lg">${details.previousFunding}</span>
            </div>
            <div className="w-full bg-white rounded-md shadow cursor-pointer flex gap-4 justify-between items-center  px-6 py-4">
              <span className="text-gray-900 uppercase font-light">
                Currently rasied
              </span>
              <span className="text-green-500 text-lg">${details.currentFunding}</span>
            </div>
            <div className="w-full bg-white rounded-md shadow cursor-pointer flex gap-4 justify-between items-center  px-6 py-4">
              <span className="text-gray-900 uppercase font-light">
                Investors
              </span>
              <span className="text-green-500 text-lg">{details.noInvestors}</span>
            </div>
            <div className="w-full bg-white rounded-md shadow cursor-pointer flex gap-4 justify-between items-center  px-6 py-4">
              <span className="text-gray-900 uppercase font-light">
                Min. investment
              </span>
              <span className="text-green-500 text-lg">${details.minInvestment}</span>
            </div>
            <div className="w-full bg-white rounded-md shadow cursor-pointer flex gap-4 justify-between items-center  px-6 py-4">
              <span className="text-gray-900 uppercase font-light">
                Company Valuation
              </span>
              <span className="text-green-500 text-lg">$723.4M</span>
            </div>
          </div>
          <h3 className="text-center text-3xl text-green-500 w-full mt-10 pb-5">
            Company Overview
          </h3>
          <p className="w-full text-justify text-gray-500 md:px-10">
            PowerFlow Innovations is a Silicon Valley-based startup specializing
            in the development and implementation of WiGL
            technology—Wireless-electric Grid Local Air Networks. The name
            "WiGL," pronounced "wiggle," perfectly encapsulates the dynamic and
            flexible nature of the company's innovative approach to wireless
            power. Key Features and Technologies:
            <br />
            <b>1. Over-the-Air Wireless Power:</b>
            <br />
            - PowerFlow Innovations is at the forefront of over-the-air wireless
            power technology, allowing devices to be charged without the need
            for physical connections. This breakthrough technology is set to
            revolutionize the way we power and interact with our electronic
            devices.
            <br />
            <b>2. Renewable Energy Integration:</b>
            <br />
            - WiGL seamlessly integrates with renewable energy sources, aligning
            with PowerFlow Innovations' commitment to sustainability. The
            company envisions a future where IoT devices are powered by clean
            and green energy, reducing the carbon footprint associated with
            traditional power sources.
            <br />
            <b>3. Military-Origin Technology Transition:</b>
            <br />
            - Leveraging expertise gained from developing technologies for the
            Department of Defense, PowerFlow Innovations is successfully
            transitioning military-originated innovations into the commercial
            sector. This ensures that cutting-edge solutions are adapted for
            widespread use, benefitting both consumers and industries.
            <br />
            <b>4. Smart, Touchless, Wireless Power Networks:</b>
            <br />
            - PowerFlow Innovations is spearheading the creation of smart,
            touchless wireless power networks. WiGL's technology enables
            efficient and intelligent power distribution, facilitating a
            connected ecosystem where devices seamlessly communicate and
            recharge wirelessly.
            <br />
            Strategic Partnerships:
            <br />
            PowerFlow Innovations has forged strategic partnerships with key
            players in the wireless power and energy industries. These
            collaborations enable the startup to stay at the forefront of
            technological advancements, fostering an environment of innovation
            and excellence.
            <br />
            Mission and Impact:
            <br />
            The mission of PowerFlow Innovations is to propel the Internet of
            Things into a new era of sustainability and efficiency. By providing
            a scalable and reliable wireless power solution, the company aims to
            reduce dependency on traditional power grids and promote the use of
            renewable energy sources, contributing to a more sustainable future.
            <br />
            Vision:
            <br />
            PowerFlow Innovations envisions WiGL as the go-to technology for
            wireless power solutions globally. The company strives to create a
            world where wireless power networks are seamlessly integrated into
            everyday life, making charging as simple and intuitive as the
            natural "wiggle" of energy through the air.
          </p>
        </div>
        {open && <PopUp handleOpen={handleOpen} />}
      </CompWrapper>
    </div>
  );
};

export default page;
