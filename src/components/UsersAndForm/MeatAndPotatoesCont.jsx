import React from 'react'
import UsersCont from './UsersCont'
import FormCont from './FormCont'

export default function MeatAndPotatoesCont({ getUsers }) {
  return (
    <div className='flex flex-row items-center justify-center w-full h-3/4 bg-cyan-600 mx-auto rounfded-xl'>
        <UsersCont getUsers={getUsers}/>
        <FormCont/>    
    </div>
  )
}
