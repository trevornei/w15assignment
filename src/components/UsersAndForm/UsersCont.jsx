import React from 'react'
import User from './User'

export default function UsersCont({ deleteUser, updateUser, setUsers, users }) {
  return (
    <div className='flex flex-cols items-center justify-center w-full h-full bg-emerald-300'>
        {users.map((user) => (
            <User key={user.id} user={user} setUsers={setUsers} deleteUser={deleteUser}  updateUser={updateUser}/>
        ))}
    </div>
  )
}
