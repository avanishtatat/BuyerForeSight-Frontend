import React from 'react';
import { LuRefreshCcw, LuTriangleAlert } from 'react-icons/lu';

const ErrorState = ({
  title = 'Something went wrong',
  message = 'We were unable to load the requested data. Please try again.',
  actionLabel = 'Try again',
  onRetry,
}) => {
  return (
    <div className='w-11/12 mx-auto mt-6 rounded-2xl border border-red-100 bg-red-50 px-6 py-12 text-center shadow-sm'>
      <div className='mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-500'>
        <LuTriangleAlert className='text-2xl' />
      </div>
      <h2 className='mt-4 text-xl font-semibold text-slate-900'>{title}</h2>
      <p className='mt-2 text-sm text-slate-600'>{message}</p>
      {onRetry && (
        <button
          type='button'
          onClick={onRetry}
          className='mx-auto mt-5 inline-flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600'
        >
          <LuRefreshCcw className='text-base' />
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default ErrorState;