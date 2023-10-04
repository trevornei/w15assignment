import React from 'react'
import PostNewUserTitle from './PostNewUserTitle'

export default function Form({ postNewUser, setNewName, setNewCompany}) {

  function handleUpdateSubmit(e) {
    e.preventDefault()
    postNewUser()
  }

  return (
    <>
      <PostNewUserTitle/>
      <div className='flex m-20'>
        <form action="" className="w-3/5 h-3/4 bg-cyan-300 shadow-2xl shadow-emerald-300 rounded-r-3xl" onSubmit={() => handleUpdateSubmit(e)}>
            {/* Name */}
            <div className="m-4">
                <label htmlFor="" className="font-bold">Name: </label>
                <input type="text" className="" onChange={(e) => setNewName(e.target.value)}/>
            </div>
            {/* Company */}
            <div className="m-4">
                <label htmlFor="" className="font-bold">Company: </label>
                <input type="text" className="" onChange={(e) => setNewCompany(e.target.value)}/>
            </div>
            <button className="mx-16 bg-emerald-300 rounded-2xl px-3 py-1" type='submit' onClick={postNewUser}>Submit</button>
        </form>
      </div>
    </>
  )
}
