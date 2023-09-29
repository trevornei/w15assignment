import React from 'react'
import Form from './Form'

export default function FormCont({ updateUser }) {
  return (
    <div className='flex flex-col flex-wrap items-center justify-center w-full h-full bg-cyan-100'>
        <Form updateUser={updateUser} />
    </div>
  )
}
