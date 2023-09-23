import React from 'react'
import { useState, useEffect } from 'react'
import UsersCont from './UsersCont'
import FormCont from './FormCont'

export default function MeatAndPotatoesCont() {

  const [users, setUsers] = useState([{}])
  const URL = 'https://650c446e47af3fd22f676202.mockapi.io/users'
  
  const getUsers = () => {
    
    fetch(URL)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        console.log("API Data:", data);

        setUsers(data)
      })
  }

  
  useEffect(() => {
    getUsers()
  }, [])  

  const deleteUser = (users) => {
    fetch(URL, {
      method: "DELETE", 
      headers: {
        'content-type': 'application/json',
      },
    }) .then((response) => {
      if (response.status === 200) {
        setUsers(users.filter((person) => person.id !== users.id))
      }
    })
  }

  const updateUser = (users) => {
  }

  const postNewUser = (users) => {

    const handleSubmit = (e) => {
      e.preventDefault()
    }
  }

  return (
    <div className='flex flex-row items-center justify-center w-full h-3/4 bg-cyan-600 mx-auto rounfded-xl'>
        <UsersCont deleteUser={deleteUser}  updateUser={updateUser}/>
        <FormCont postNewUser={postNewUser}/>    
    </div>
  )
}
