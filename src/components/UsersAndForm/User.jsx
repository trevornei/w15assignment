import React from 'react'


export default function User({ user, deleteUser }) {
  // console.log(`${users} from User.jsx`)
  // console.log(user)

  /*
    Solving For: id evaluating as unidentified.
    -> I can select by the id || the element's index.
    --> The element's index is id - 1;

    Create a variable idVal;
    assign it a value of users.id;
    let lmnt = idVal -1;
  */

  return (
    <>
      <div className='flex flex-col w-56 h-auto bg-cyan-500 shadow-lg shadow-black rounded-xl p-2 m-6'>
          <div className="flex flex-col items-center justify-center p-2 bg-slate-200 rounded-xl">
                <div className="p-2 flex items-center justify-center">
                  <h3 className="text-md font-extrabold">ID: {user.id}</h3>
                </div>
                <div className="p-2 items-center justify-center">
                  <h3 className="text-sm font-bold">Name: {user.name}</h3>
                </div>
                <div className="p-2 items-center justify-center">
                  <h3 className="text-sm font-bold">Company: {user.company}</h3>
                </div>
                <div className="p-2 items-center justify-center">
                  <img src={user.avatar} alt="Users Avatar" className='rounded-xl shadow-lg shadow-blue-200 mx-auto' />
                </div>
          </div>
          <button className='bg-cyan-800 text-white rounded-lg mt-4' onClick={() => deleteUser(user.id)}>Delete</button>
      </div>
    </>
  )
}
