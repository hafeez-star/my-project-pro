



import React from 'react'

const WelcomSection = () => {
    return (
        <div className=' w-225 mx-auto mt-20 flex rounded-lg px-5 py-6 text-white bg-gradient-to-b from-purple-600 to-violet-500'>

            <div className=' line-clamp-3 p-5'>
                <h1 className='font-bold text-2xl mb-4'>Welcome Back Hafeez Mangla</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonummy nibh euismod tincidunt.</p>
                <div className='flex bg-gradient-to-b from-purple-400 to-violet-400 rounded-2xl  mt-3 p-2'>

                    <span  className='text-2xl font-bold mt-2 me-4 ms-2'>28°</span>
                    <div> <h6>Outdoor temperature</h6>
                        <p>Thermal sensation 28°</p></div>
                </div>
            </div>
            <div className=''>
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={520} className='rounded-2xl' />
            </div>

        </div>
    )
}

export default WelcomSection
