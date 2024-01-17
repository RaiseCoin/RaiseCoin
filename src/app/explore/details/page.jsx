import CompWrapper from '@/components/Utils/CompWrapper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className="w-full bg-gray-50 min-h-screen">
            <CompWrapper>
                <div className="w-4/5 flex flex-col items-start mx-auto py-28 text-gray-900 ">
                    <p className='text-green-500 text-lg tracking-wide font-medium'>GET A PIECE OF WIGL</p>
                    <h2 className='text-gray-900  text-4xl font-bold mb-10'>
                        WiGL’s Back - Touchless Wireless Power
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5 pb-10'>
                        <div className='mt-auto'>
                            <span className='text-green-500 text-lg font-medium'>
                                Summary
                            </span>
                            <p className='text-justify'>By partnering with pioneers in the wireless power and innovative energy  industries, WiGL has emerged as the umbrella technology creating the future for smart, touchless, wireless power networks. WiGL, Wireless-electric Grid Local Air Networks (pronounced “wiggle”), is transitioning  new technologies developed for the Department of Defense to commercial markets. WiGL is on a mission to use over-the-air  wireless power and renewable energy solutions  to recharge the Internet of Things (“IoT”). </p>
                        </div>
                        <Image
                            src={"/recomendation_images/c_one.webp"}
                            height={300}
                            width={400}
                            alt=""
                            className="w-full md:w-[90%] md:ml-auto my-auto aspect-video rounded-xl object-cover"
                        />

                        <Link href={"#"} className="bg-green-500 text-white font-medium px-14 py-4 rounded hover:bg-green-600 duration-300 self-center uppercase w-fit col-span-2">Invest Now</Link>
                        <div className='w-full bg-white rounded-md shadow cursor-pointer flex gap-4 justify-between items-center  px-6 py-4'>
                            <span className='text-gray-900 uppercase font-light'>Previous Funding</span>
                            <span className='text-green-500 text-lg'>$4,993,856</span>
                        </div>
                        <div className='w-full bg-white rounded-md shadow cursor-pointer flex gap-4 justify-between items-center  px-6 py-4'>
                            <span className='text-gray-900 uppercase font-light'>Currently rasied</span>
                            <span className='text-green-500 text-lg'>$7,091,801</span>
                        </div>
                        <div className='w-full bg-white rounded-md shadow cursor-pointer flex gap-4 justify-between items-center  px-6 py-4'>
                            <span className='text-gray-900 uppercase font-light'>Investors</span>
                            <span className='text-green-500 text-lg'>4,543</span>
                        </div>
                        <div className='w-full bg-white rounded-md shadow cursor-pointer flex gap-4 justify-between items-center  px-6 py-4'>
                            <span className='text-gray-900 uppercase font-light'>Min. investment</span>
                            <span className='text-green-500 text-lg'>$505.43</span>
                        </div>
                        <div className='w-full bg-white rounded-md shadow cursor-pointer flex gap-4 justify-between items-center  px-6 py-4'>
                            <span className='text-gray-900 uppercase font-light'>Company Valuation</span>
                            <span className='text-green-500 text-lg'>$723.4M</span>
                        </div>
                    </div>
                    <h3 className='text-center text-3xl text-green-500 w-full mt-10 pb-5'>Company Overview</h3>
                    <p className='w-full text-justify text-gray-500 px-10'>
                        PowerFlow Innovations is a Silicon Valley-based startup specializing in the development and implementation of WiGL technology—Wireless-electric Grid Local Air Networks. The name "WiGL," pronounced "wiggle," perfectly encapsulates the dynamic and flexible nature of the company's innovative approach to wireless power.

                        Key Features and Technologies:<br />

                        <b>1. Over-the-Air Wireless Power:</b><br />
                        - PowerFlow Innovations is at the forefront of over-the-air wireless power technology, allowing devices to be charged without the need for physical connections. This breakthrough technology is set to revolutionize the way we power and interact with our electronic devices.
                        <br />
                        <b>2. Renewable Energy Integration:</b><br />
                        - WiGL seamlessly integrates with renewable energy sources, aligning with PowerFlow Innovations' commitment to sustainability. The company envisions a future where IoT devices are powered by clean and green energy, reducing the carbon footprint associated with traditional power sources.
                        <br />
                        <b>3. Military-Origin Technology Transition:</b><br />
                        - Leveraging expertise gained from developing technologies for the Department of Defense, PowerFlow Innovations is successfully transitioning military-originated innovations into the commercial sector. This ensures that cutting-edge solutions are adapted for widespread use, benefitting both consumers and industries.
                        <br />
                        <b>4. Smart, Touchless, Wireless Power Networks:</b><br />
                        - PowerFlow Innovations is spearheading the creation of smart, touchless wireless power networks. WiGL's technology enables efficient and intelligent power distribution, facilitating a connected ecosystem where devices seamlessly communicate and recharge wirelessly.
                        <br />
                        Strategic Partnerships:<br />
                        PowerFlow Innovations has forged strategic partnerships with key players in the wireless power and energy industries. These collaborations enable the startup to stay at the forefront of technological advancements, fostering an environment of innovation and excellence.
                        <br />
                        Mission and Impact:<br />
                        The mission of PowerFlow Innovations is to propel the Internet of Things into a new era of sustainability and efficiency. By providing a scalable and reliable wireless power solution, the company aims to reduce dependency on traditional power grids and promote the use of renewable energy sources, contributing to a more sustainable future.
                        <br />
                        Vision:<br />
                        PowerFlow Innovations envisions WiGL as the go-to technology for wireless power solutions globally. The company strives to create a world where wireless power networks are seamlessly integrated into everyday life, making charging as simple and intuitive as the natural "wiggle" of energy through the air.
                    </p>
                </div>

            </CompWrapper>
        </div>
    )
}

export default page