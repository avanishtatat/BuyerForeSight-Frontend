import React, { useEffect, useState } from 'react'
import ErrorState from '../components/ErrorState';
import { LuSquareArrowOutUpRight, LuUser } from 'react-icons/lu';
import { MdOutlineLocationOn } from 'react-icons/md';
import { PiBuildingOffice } from 'react-icons/pi';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);
  const { userId } = useParams();

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

        if (!response.ok) {
          throw new Error('Failed to fetch user details.');
        }

        const data = await response.json();

        if (!data?.id) {
          throw new Error('User details are unavailable.');
        }

        setUser(data);
        setError(null);
      } catch (error) {
        console.error('Error:', error)
        setError(error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    getUser();

    return () => { };
  }, [userId, reloadKey]);

  const handleRetry = () => {
    setReloadKey((currentKey) => currentKey + 1);
  };

  if (error) {
    return (
      <div className='h-[calc(100vh-64px)] overflow-y-auto py-6'>
        <ErrorState
          title='Unable to load user details'
          message={error.message || 'An unexpected error occurred while fetching the user details.'}
          onRetry={handleRetry}
        />
      </div>
    );
  }

  return (
    <div className='h-[calc(100vh-64px)] overflow-y-auto'>
      <div className='w-11/12 mx-auto mt-6 flex items-center justify-between'>
        <h1 className='text-[#2A3439] text-3xl font-semibold'>{loading ? 'Loading...' : user?.name}</h1>
        <button className='bg-[#4D44E3] text-white border-none outline-none text-[13px] p-2 rounded-sm font-semibold' disabled>Edit User Info</button>
      </div>
      <div className='w-11/12 mx-auto mt-6 grid gird-cols-1 md:grid-cols-2 gap-3'>
        <div className='bg-white rounded-md p-4 '>
          <div className='flex items-center gap-4 px-2'>
            <div className='h-12 w-12 rounded-lg flex items-center justify-center bg-[#edecfc]'>
              <LuUser className='text-[#4D44E3] text-xl' />
            </div>
            <div className=''>
              <p className='text-[13px] text-[#566166] font-semibold'>PROFILE IDENTITY</p>
              <h3 className='text-[#2A3439] font-semibold'>General Information</h3>
            </div>
          </div>
          <div className='px-2 mt-3 p-3'>
            <p className='uppercase text-[10px] text-[#566166] font-semibold'>Full Name</p>
            <h3 className='text-[#2A3439] font-semibold mb-4'>{user?.name ? user.name : "Loading..."}</h3>
            <p className='uppercase text-[10px] text-[#566166] font-semibold'>EMAIL ADDRESS</p>
            <h3 className='text-[#4D44E3] font-semibold mb-4'>{user?.email ? user.email : "Loading..."}</h3>
            <p className='uppercase text-[10px] text-[#566166] font-semibold'>CONTACT NUMBER</p>
            <h3 className='text-[#2A3439] font-semibold mb-4'>{user?.phone ? user.phone : "Loading..."}</h3>
            <p className='uppercase text-[10px] text-[#566166] font-semibold'>DIGITAL DOMAIN</p>
            <h3 className='text-[#4D44E3] font-semibold flex items-start gap-2'>{user?.website ? user.website : "Loading..."}<span><LuSquareArrowOutUpRight /></span></h3>
          </div>
        </div>
        <div className='bg-white rounded-md p-4'>
          <div className='flex items-center gap-4 px-2'>
            <div className='h-12 w-12 rounded-lg flex items-center justify-center bg-[#edecfc]'>
              <MdOutlineLocationOn className='text-[#4D44E3] text-xl' />
            </div>
            <div className=''>
              <p className='text-[13px] text-[#566166] font-semibold'>RESIDENCY</p>
              <h3 className='text-[#2A3439] font-semibold'>Address Details</h3>
            </div>
          </div>
          <div className='mt-6 px-4'>
            <div className=''>
              <p className='uppercase text-[10px] text-[#566166] font-semibold'>STREET ADDRESS</p>
              <h3 className='text-[#2A3439] font-semibold mb-4'>{user?.address?.street ? user.address.street : "Loading..."}</h3>
            </div>
            <div className='flex gap-6 items-center'>
              <div className=''>
                <p className='uppercase text-[10px] text-[#566166] font-semibold'>CITY</p>
                <h3 className='text-[#2A3439] font-semibold mb-4'>{user?.address?.city ? user.address.city : "Loading..."}</h3>
              </div>
              <div className=''>
                <p className='uppercase text-[10px] text-[#566166] font-semibold'>ZIP CODE</p>
                <h3 className='text-[#2A3439] font-semibold mb-4'>{user?.address?.zipcode ? user.address.zipcode : "Loading..."}</h3>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='w-11/12 mx-auto mt-4 mb-4 bg-[#f0f4f7] p-4 rounded-md'>
        <div className='flex gap-2'>
          <PiBuildingOffice color='#4d44e3' size={20} />
          <p className='font-bold text-[#2a3439] text-[18px]'>Organization & Strategy </p>
        </div>
        <div className='mt-4 flex gap-4 flex-wrap'>
          <div className='flex flex-col gap-1 font-bold bg-white rounded-md flex-1 p-4'>
            <p className='uppercase text-[10px] text-[#566166]'>Comapany Name</p>
            <p className='font-medium text-[#283439]'>{user?.company?.name ? user.company.name : "Loading..."}</p>
          </div>
          <div className='flex flex-col justify-center border-l-4 border-[#4d44e3] gap-1 font-bold bg-[#f7f9fb] rounded-r-md flex-1 p-4'>
            <p className='font-medium text-[#566166]'>"{user?.company?.catchPhrase ? user.company.catchPhrase : "Loading..."}"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetails