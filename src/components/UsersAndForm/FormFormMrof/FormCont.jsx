import React from 'react'
import Form from './ModalForm'

export default function FormCont({ postNewUser, setNewName, setNewCompany }) {
  return (
    <div className='flex flex-col flex-wrap items-center justify-center w-full h-full bg-cyan-100'>
        <Form postNewUser={postNewUser} setNewName={setNewName} setNewCompany={setNewCompany} />
    </div>
  )
}
