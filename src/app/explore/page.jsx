import StockWidget from '@/components/Utils/StockWidget'
import React from 'react'

const page = () => {
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
  return (
    <div className="w-full bg-gray-50 min-h-screen">
        <div className="w-3/4 m-auto py-14">
				<h1 className="text-2xl text-green-500 font-semibold text-left pb-10">
					23 Current Funding Rounds
				</h1>
				<div className="grid grid-cols-3 gap-7">
					{data.map((e, index) => (
						<StockWidget key={index} e={e} />
					))}
                    {data.map((e, index) => (
						<StockWidget key={index} e={e} />
					))}
                    {data.map((e, index) => (
						<StockWidget key={index} e={e} />
					))}
                    {data.map((e, index) => (
						<StockWidget key={index} e={e} />
					))}
                    {data.map((e, index) => (
						<StockWidget key={index} e={e} />
					))}
				</div>
			</div>
    </div>
  )
}

export default page