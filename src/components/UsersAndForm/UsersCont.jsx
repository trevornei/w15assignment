import React from 'react'
import User from './User'

export default function UsersCont({ getUsers }) {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full bg-emerald-300'>
        <User getUsers={getUsers}/>
    </div>
  )
}
