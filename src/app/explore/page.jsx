import StockCard from '@/components/explore/StockCard';
import StockWidget from '@/components/homepage/StockWidget'
import React from 'react'

const page = () => {
	const data = [
		{
			image: `/recomendation_images/c_one.webp`,
			name: `WiGL`,
			subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
			raised: `$4.5M`,
			investors: `504`,
			mininvestment: `$1500`,
		},
		{
			image: `/recomendation_images/c_two.webp`,
			name: `NERD Focus`,
			subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
			raised: `$1.3M`,
			investors: `200`,
			mininvestment: `$500`,
		},
		{
			image: `/recomendation_images/c_three.webp`,
			name: `ACME AtronOmatic`,
			subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
			raised: `$2.3M`,
			investors: `267`,
			mininvestment: `$1000`,
		},

	];
	return (
		<div className="w-full bg-gray-50 min-h-screen">
			<div className="w-3/4 m-auto py-14">
				<h1 className="text-2xl text-green-500 font-semibold text-left pb-10">
					3 Current Funding Rounds
				</h1>
				<div className="grid grid-cols-3 gap-7">
					{data.map((e, index) => (
						<StockCard
							key={index}
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
		</div>
	)
}

export default page