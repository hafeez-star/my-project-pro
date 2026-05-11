
import { RiHotelBedLine } from "react-icons/ri"




import React from 'react'

const PopularSection = () => {
    return (
        <div className='bg-white   p-4 mt-5 '>

            <h1>Popular Devises</h1>
            <div className="grid grid-cols-2 gap-2  shadow-2xl rounded-2xl mt-2">
                <div className="grid grid-cols-2  gap-1">
                    <div className="shadow-2xl  p-3  rounded-2xl"><h3>Refrigerator <span className="text-gray-300">Off</span></h3>
                        <div className="flex justify-between items-center">
                            <div className=" w-8  h-8 bg-violet-500 rounded-full flex justify-center items-center text-white">
                                <RiHotelBedLine />
                            </div>
                            <div className="w-12 h-7 mt-5 bg-gray-300  rounded-full p-1 flex items-center mb-6 ">
                                <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-2xl "><h3>Refrigerator </h3>
                        <div className="flex">
                            <div className=" w-10 h-10 bg-violet-500 rounded-full flex justify-center items-center text-white">
                                <RiHotelBedLine />
                            </div>
                            <div className="w-10 h-8 bg-violet-500 rounded-full  p-1 flex items-center mb-6 ">
                                <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-2xl "><h3>Refrigerator </h3>
                        <div className="flex">
                            <div className=" w-10 h-10 bg-violet-500 rounded-full flex justify-center items-center text-white">
                                <RiHotelBedLine />
                            </div>
                            <div className="w-10 h-8 bg-violet-500 rounded-full p-1 flex items-center mb-6 ">
                                <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-2xl "><h3>Refrigerator </h3>
                        <div className="flex">
                            <div className=" w-10 h-10 bg-violet-500 rounded-full flex justify-center items-center text-white">
                                <RiHotelBedLine />
                            </div>
                            <div className="w-10 h-8 bg-violet-500 rounded-full p-1 flex items-center mb-6 ">
                                <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shadow-2xl">
                    dfdkf
                </div>
            </div>


        </div>
    )
}

export default PopularSection
