import React from 'react'
import { LuUser } from 'react-icons/lu'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='shadow-sm bg-[#E8EFF3] w-full sticky top-0 z-50'>
      <div className="w-full lg:max-w-7xl mx-auto flex justify-between items-center h-16 px-4">
        <Link to={"/"} className='text-sm md:text-xl font-semibold text-[#4338ca]'>User Management App</Link>
        <div className=' rounded-full bg-white flex justify-center items-center w-8 h-8'>
          <LuUser />
        </div>
      </div>
    </nav>
  )
}

export default Navbar