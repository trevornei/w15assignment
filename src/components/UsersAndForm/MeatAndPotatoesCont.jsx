import React from 'react'
import { useState, useEffect } from 'react'
import UsersCont from './UsersCont'
import FormCont from './FormCont'

export default function MeatAndPotatoesCont() {

  /*
    Here is the array of objects that is being fetched from the API:
    [
 {
  "name": "Leon Hagenes",
  "id": "1"
 },
 {
  "name": "Tyler Quigley",
  "id": "2"
 },
 {
  "name": "Dr. Joanne Grimes",
  "id": "3"
 },
 {
  "name": "Dr. Julia Schuppe PhD",
  "id": "4"
 },
 {
  "name": "Lyle Gorczany",
  "id": "5"
 },
 {
  "name": "Taylor Hirthe",
  "id": "6"
 },
 {
  "name": "Kelli Morissette",
  "id": "7"
 },
 {
  "name": "Douglas Harris",
  "id": "8"
 },
 {
  "name": "Lisa Kozey",
  "id": "9"
 },
 {
  "name": "Josephine Kunde",
  "id": "10"
 }
]
  */

  const [users, setUsers] = useState([{}])
  const [newName, setNewName] = useState('')
  const URL = 'https://650c446e47af3fd22f676202.mockapi.io/users'
  
  const getUsers = () => {
    
    fetch(URL)
      .then(data => data.json())
      .then(data => {
        // console.log("API Data:", data);

        setUsers(data)
      })
  }

  useEffect(() => {
    getUsers()
  }, [])  
  
  // How do I create a make users function that will update the state of users?
  //  const makeUsers = () => {
  //    fetch(URL, {
  //      method: "POST",
  //      headers: {
  //        'content-type': 'application/json',
  //      }, 
  //      body: JSON.stringify({
  //        name: newName,
  //      })
  //    })
  //      .then((response) => response.json())
  //      .then((data) => {
  //        console.log("API Data:", data);
  //        setUsers(data)
  //      })
  //  }

  const deleteUser = (e, userId) => {
    e.preventDefault()
    fetch(`${URL}/${userId}`, {
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

  const updateUser = () => {

    fetch(`${URL}/${userId}`, {
      method: "PUT",
      body: JSON.stringify({
        name: newName,
      }),
      headers: {
        'content-type': 'application/json',
      },
    }) .then((response) => {
      if (response.status === 200) {
        setUsers(users.map((person) => person.id === users.id ? users : person))
      }
    })
  }

  const postNewUser = () => {

    let data = {
      name: newName,
    }

    fetch(URL, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data)
    }) .then((response) => {
      if (response.status === 200) {
        setUsers([...users, data])
      }
    })
  }

  return (
    <div className='flex flex-col items-center justify-center w-full h-full bg-cyan-600 mx-auto rounfded-xl'>
      <div className="">
        <h1 className="text-3xl font-bold text-center text-white">Users and Form</h1>
      </div>
        <UsersCont users={users} setUsers={setUsers} deleteUser={deleteUser}  updateUser={updateUser}/>
        <FormCont postNewUser={postNewUser}/>    
    </div>
  )
}
