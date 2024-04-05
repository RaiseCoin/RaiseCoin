"use client";
import StockCard from "@/components/explore/StockCard";
import StockWidget from "@/components/homepage/StockWidget";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState([]);
  const [totalEntries, setTotalEntries] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://backendpostgres-76ng.onrender.com/api/startups?populate=*")
      .then((response) => response.json())
      .then((data) => {
        const transformedData = data.data.map((item) => ({
          id: item.id,
          // image: `/recomendation_images/c_one.webp`, // Static image, consider dynamic handling if needed
          image: item.attributes.displayImg.data.attributes.url, // Static image, consider dynamic handling if needed
          name: item.attributes.startupName,
          subtitle: item.attributes.subtitle,
          raised: `${item.attributes.currentFunding}`, // Adjust formatting as needed
          investors: item.attributes.noInvestors,
          mininvestment: `${item.attributes.minInvestment}`,
        }));
        setData(transformedData);
        setTotalEntries(data.meta.pagination.total);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  // const data = [
  // 	{
  // 		image: `/recomendation_images/c_one.webp`,
  // 		name: `WiGL`,
  // 		subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  // 		raised: `$4.5M`,
  // 		investors: `504`,
  // 		mininvestment: `$1500`,
  // 	},
  // 	{
  // 		image: `/recomendation_images/c_two.webp`,
  // 		name: `NERD Focus`,
  // 		subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  // 		raised: `$1.3M`,
  // 		investors: `200`,
  // 		mininvestment: `$500`,
  // 	},
  // 	{
  // 		image: `/recomendation_images/c_three.webp`,
  // 		name: `ACME AtronOmatic`,
  // 		subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  // 		raised: `$2.3M`,
  // 		investors: `267`,
  // 		mininvestment: `$1000`,
  // 	},

  // ];
  return (
    <>
      <div className="w-full bg-gray-50 min-h-screen">
        {loading ? (
          <div className="h-[90vh] w-full flex flex-row justify-center items-center">
            <p className="w-full text-center text-black">Loading ...</p>
          </div>
        ) : (
          <div className="w-3/4 m-auto py-14">
            <h1 className="text-2xl text-green-500 font-semibold text-left pb-10">
              {totalEntries} Current Funding Rounds
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {data.map((e, index) => (
                <StockCard
                  key={index}
                  id={e.id}
                  image={e.image}
                  name={e.name}
                  subtitle={e.subtitle}
                  amtRaised={e.raised}
                  noOfInvestors={e.investors}
                  minInvestment={e.mininvestment}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default page;
