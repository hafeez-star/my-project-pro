


import React from 'react'

const Right = () => {
    return (
        <div className='gird grid-cols-2  '>
            <div className=' bg-white rounded-2xl shadow-2xl p-4  relative'>
                <h1 className='text-1xl font-bold'>Air conditioning</h1>
                <h1 className='text-violet-500 font-bold text-3xl'>17°C</h1>
                <p className='text-gray-400'>Celsius</p>


                <div className='bg-gray-300 w-2 h-15 rounded-3xl  mt-5'>

                </div>
                <div className='bg-violet-500 w-2 h-10 rounded-3xl absolute bottom-0.5  '>

                </div>

                <div className="w-15 h-10 bg-violet-500 rounded-full p-1 flex items-center mb-6 absolute top-3 right-3">
                    <div className="w-5 h-5 bg-white rounded-full ml-auto"></div>
                </div>
            </div>
        </div>
    )
}

export default Right
