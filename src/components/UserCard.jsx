import React from 'react'
import { Link } from 'react-router-dom'
import { getInitials } from '../utils/helper'
import { MdEmail, MdPhone } from 'react-icons/md'

const UserCard = ({ user }) => {
  return (
    <Link to={`/users/${user.id}`}>
      <li className='bg-white rounded-md p-3 drop-shadow-2xl'>
        <div className='flex gap-4 items-center'>
          <div className={`${user.id % 2 === 0 ? 'bg-[#E2DFFF] text-[#3F33D6]' : 'bg-[#D1DDFA] text-[#434E66]'} w-12 h-12 text-xl flex items-center justify-center rounded-xl font-medium text-[18px]`}>
            {getInitials(user.name)}
          </div>
          <div>
            <h3 className='text-[#2A3439]'>{user.name}</h3>
            <p className='text-[13px] bg-[#E1E9EE] text-[#2A3439] px-2 rounded-xs w-fit'>{user.company.name}</p>
          </div>
        </div>
        <div className='mt-3 p-1'>
          <div className='flex items-center gap-2 text-[#566166]'>
            <MdEmail />
            <p>{user.email}</p>
          </div>
          <div className='flex items-center gap-2 text-[#566166]'>
            <MdPhone />
            <p>{user.phone}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default UserCard