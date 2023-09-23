import React from 'react'

export default function User() {
  return (
    <div className='flex flex-row w-auto h-auto bg-slate-100 rounded-xl p-6'>
        <div className="p-3">
            Name: 
        </div>
        <button className='p-2 m-2 rounded-2xl bg-cyan-200'>
          <h3 className="">
            Update
          </h3>
        </button>
        <button className='p-2 m-2 rounded-2xl bg-cyan-200'>
          <h3 className=''>
            Delete
          </h3>
        </button>
    </div>
  )
}
