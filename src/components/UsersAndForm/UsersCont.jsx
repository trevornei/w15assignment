import React from 'react'
import User from './User' 

export default function UsersCont({ deleteUser, updateUser, setUsers, users }) {
  return (
    <>
    <div className='flex flex-col flex-wrap items-center justify-start w-full h-full mt-6 bg-emerald-300'>
        {users.map((user, index) => (
          <div key={index} className='mt-4'>
            <User user={user} setUsers={setUsers} deleteUser={deleteUser}  updateUser={updateUser}/>
          </div>
        ))}
    </div>
    </>
  )
}
