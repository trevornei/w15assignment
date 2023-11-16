import React from 'react'
import User from './User' 

export default function UsersCont({ deleteUser, updateUser, setUsers, users }) {
  return (
    <>
    <div className='flex flex-row flex-wrap items-center justify-start w-full h-full mt-6 bg-emerald-300 rounded-xl shadow-2xl shadow-green-900'>
        {users.map((user, index) => (
          <div key={index} className='flex flex-row items-center justify-center m-24 mx-auto max-h-56'>
            <User user={user} setUsers={setUsers} deleteUser={deleteUser}  updateUser={updateUser}/>
          </div>
        ))}
    </div>
    </>
  )
}
