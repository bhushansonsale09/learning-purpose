import React from 'react'
import {Link} from 'next/link'

const Navbar = () => {
    const navArr = ['Home', 'About', 'Career', 'Eduction', 'Projects'];
  return (
    <main className='w-full flex justify-between items-center'>

        <div className='h-fit w-fit pl-10 flex justify-center items-center'><button className='h-5 w-5 rounded-full bg-white'></button></div>

        <ul className='w-1/3 h-20 flex justify-evenly items-center'>
            {
                navArr.map((item, index) => {
                    return <li key={index} href={"/"}>{item}</li>
                })
            }
        </ul>

        
    </main>
  )
}

export default Navbar