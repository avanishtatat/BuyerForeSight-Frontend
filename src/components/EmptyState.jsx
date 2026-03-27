import React from 'react';
import { LuSearchX } from 'react-icons/lu';

const EmptyState = ({
  title = 'No users found',
  message = 'There are no users to display right now.',
}) => {
  return (
    <div className='w-11/12 mx-auto mt-6 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center shadow-sm'>
      <div className='mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-500'>
        <LuSearchX className='text-2xl' />
      </div>
      <h2 className='mt-4 text-xl font-semibold text-slate-800'>{title}</h2>
      <p className='mt-2 text-sm text-slate-500'>{message}</p>
    </div>
  );
};

export default EmptyState;