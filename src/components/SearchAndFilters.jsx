import React from 'react'
import { LuSearch } from 'react-icons/lu'
import { FaSortAlphaDown, FaSortAlphaUpAlt } from "react-icons/fa"

const SearchAndFilters = ({ search, setSearch, toggleSortOrder, sortOrder}) => {
  return (
    <div className='mt-6'>
      <div className='w-11/12 mx-auto bg-[#F0F4F7]  flex items-center gap-3 p-3 md:p-5'>
        <div className='w-5/6 h-12 flex items-center bg-white px-4 py-2 flex-1 gap-3 rounded-md hover:outline-blue-100'>
          <LuSearch className=''/>
          <input value={search} onChange={(e) => setSearch(e.target.value)} type='search' className='w-full h-full bg-transparent outline-none' placeholder='Search users by name or email...'/>
        </div>
        
        <button type='button' className='w-1/6 h-12 flex items-center justify-center gap-3 px-4 py-2 bg-white rounded-md' onClick={toggleSortOrder}>
          {sortOrder === 'asc' ? <FaSortAlphaDown className='text-xl text-[#566166]' /> : <FaSortAlphaUpAlt className='text-xl text-[#566166]' /> }
          <h5 className='max-md:hidden text-[#566166] text-xl'>Sort</h5>
        </button>
      </div>
    </div>
  )
}

export default SearchAndFilters