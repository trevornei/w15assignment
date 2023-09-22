import React from 'react'

export default function User({ getUsers }) {
  return (
    <div className='flex flex-col w-1/4 h-auto bg-slate-100 rounded-xl p-6'>
        <div className="p-3">
            Name: {getUsers.name}
        </div>
    </div>
  )
}
