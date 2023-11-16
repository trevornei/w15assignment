import React from 'react'
import PostUserForm from './PostUserForm'

export default function FormCont({ postNewUser, setNewName, setNewCompany }) {
  return (
    <div className='flex flex-col flex-wrap items-center justify-center w-full h-full bg-cyan-100'>
        <PostUserForm postNewUser={postNewUser} setNewName={setNewName} setNewCompany={setNewCompany} />
    </div>
  )
}
