import React from 'react'


export default function User({ user, deleteUser }) {
  // console.log(`${users} from User.jsx`)
  // console.log(user)
  return (
    <>
      <div className='flex flex-col w-56 h-auto bg-slate-100 shadow-lg shadow-black rounded-xl p-2'>
          <div className="p-2 bg-slate-200 rounded-xl">
                <div className="p-2">
                  <h3 className="text-md font-extrabold">ID: {user.id}</h3>
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-bold">Name: {user.name}</h3>
                </div>
                <div className="p-2">
                  <h3 className="text-sm font-bold">Company: {user.company}</h3>
                </div>
                <div className="p-2">
                  <img src={user.avatar} alt="Users Avatar" />
                </div>
          </div>
          <button className='bg-cyan-800 shadow-md shadow-white text-white rounded-lg' onClick={() => deleteUser(user.id)}>Delete</button>
      </div>
    </>
    
  )
}
