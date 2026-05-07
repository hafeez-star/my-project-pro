



import Left from './Left'
import React from 'react'
import Right from './Right'
import PopularSection from './PopularSection'
const RoomSection = () => {
    return (
        <div className='w-225 mx-auto mt-10 grid grid-cols-6 gap-4 rounded-lg '>
            <div className=' col-span-4  rounded-lg bg-transparent shadow-lg '>
                
                    <div>
                        <Left/>
                    </div>
                
            </div>
            <div className='col-span-2 '>
                <Right/>
            </div>
            <div className='col-span-4 '>
                <PopularSection/>
            </div>
        </div>
    )
}

export default RoomSection

