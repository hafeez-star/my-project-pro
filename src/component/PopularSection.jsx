
import { RiHotelBedLine } from "react-icons/ri"




import React from 'react'

const PopularSection = () => {
    return (
        <div className='bg-white reounded-2xl shadow-2xl p-4 mt-5 col-span-2'>

            <h1>Popular Devises</h1>
            <div className="flex border-1 col-span-3"><h3>Refrigerator </h3>
                <div className=" w-10 h-10 bg-violet-500 rounded-full flex justify-center items-center text-white">
                    <RiHotelBedLine />
                </div>
                <div className="w-10 h-8 bg-violet-500 rounded-full p-1 flex items-center mb-6 ">
                    <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                </div>
            </div>


        </div>
    )
}

export default PopularSection
