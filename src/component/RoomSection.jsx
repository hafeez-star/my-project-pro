



import Left from './Left'
import React from 'react'
import Right from './Right'
import PopularSection from './PopularSection'
import AnalyticsCard from './AnalyticsCard'
import Chart from './Chart'
import ShotcutCard from './shotcutCard'
import LightIns from './LightIns'
import LightColor from './LightColor'
const RoomSection = () => {
    return (
        <div className=' '>
            <div className=' grid grid-cols-6 gap-4 w-225 mx-auto mt-10 rounded-lg '>
                <div className=' col-span-4  rounded-lg bg-transparent shadow-lg '>

                    <div>
                        <Left />
                    </div>

                </div>
                <div className='col-span-2 '>
                    <Right />
                </div>
                <div className='col-span-4'>
                    <PopularSection />
                </div>
                <div className='col-span-4'>
                    <AnalyticsCard />
                </div>
            </div>

            <div className='grid grid-cols-12 flex  '>
                <div className='col-span-8 p-5   '>
                    <Chart />

                </div>
                <div className='col-span-4 p-5'>
                    <ShotcutCard />
                </div>

            </div>
            <div className='grid grid-cols-12 flex  '>
                <div className='col-span-6 p-5   '>
                    <LightIns />

                </div>
                <div className='col-span-6 p-5'>
                    <LightColor />
                </div>

            </div>
            <div className=' grid grid-cols-6'>
<div className='col-span-6 p-4 font-bold text-start'>
<h1>© All rights reserved by Codes. Distributed by: HafeezUllah</h1>
</div>
            </div>

        </div>
    )
}

export default RoomSection

