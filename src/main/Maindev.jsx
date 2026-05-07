


import React from 'react'
import SideBar from '../component/SideBar'
import TopBar from '../component/TopBar'
import WelcomSection from '../component/WelcomSection'
import RoomSection from '../component/RoomSection'

const Maindev = () => {
  return (
    <div className=' w-100% mx-5 h-dvh my-5 shadow-2xl rounded-lg flex  '>
      <SideBar/>
      <div className='flex flex-col overflow-y-auto  w-250'>
        <TopBar/>
        <WelcomSection/>
        <RoomSection/>
      </div>
    </div>
  )
}

export default Maindev
