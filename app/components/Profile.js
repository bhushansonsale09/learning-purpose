import React from 'react'
import avatar from "../media/user.png"
import Image from "next/image"

const Profile = () => {
  return (
    <main className='bg-black h-4/6 flex'>
        <div className='avatar w-full flex justify-center items-center'>
            <div className='circle h-1/2 w-1/3 bg-[#d6d1d1] rounded-full mt-14'>
            <Image className="w-full" src={avatar} alt="avatar"/>
            </div>
        </div>

        <div className='info w-full flex items-center justify-center'>
          <div className="bg-gray-600 h-3/5 w-3/6">

          </div>
        </div>
    </main>
  )
}

export default Profile