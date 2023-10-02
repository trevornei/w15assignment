import React from 'react'
import { useState, useEffect } from 'react'
import UsersCont from './UsersCont'
import FormCont from './FormFormMrof/FormCont'
import UpdateUserCont from '../../components/UpdateUserForm/UpdateUserCont'

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
  
  // Create new users information.
  const [newName, setNewName] = useState('')
  const [newCompany, setNewCompany] = useState('')

  // Update Users data
  // const [updateNewName, setUpdateNewName] = useState('')
  // const [updateNewCompany, setUpdateNewCompany] = useState('')
  /*
    Delete user is not working because users.id is coming up as undefined.
    --> This was suprising to me at first because I did not take into account that users (state) method is pulling data from the API as an array of objects.
  */

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

  const updateUser = (userObject, e) => {
    e.preventDefault()


    let updatedUserObject = {
      // spreads out key value pairs from an existing object.
      ...userObject,
      id: null,
      name: null,
      company: null,
    }

    fetch(`${URL}/${userObject.id}`, {
      method: "PUT",
      body: JSON.stringify(
        updatedUserObject
      ),
      headers: {
        'content-type': 'application/json',
      },
    }) .then(() => getUsers())
  }

  const postNewUser = (e) => {
    e.preventDefault()

    console.log(`Your Name is: ${newName}`)
    console.log(`Your Company is: ${newCompany}`)

    let data = {
      name: setNew,
      company: newCompany,
    }

    fetch(URL, {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data)
    }) .then(() => getUsers())
  }

  const deleteUser = (userId) => {
    fetch(`${URL}/${userId}`, {
      method: "DELETE", 
      headers: {
        'content-type': 'application/json',
      },
    }) .then(() => getUsers())
    console.log(`Deleting the userId with the id: ${userId}`)
  }

  return (
    <>
    <div className='flex flex-col items-center justify-center w-full h-full rounded-xl my-24'>
        <UsersCont users={users} setUsers={setUsers} deleteUser={deleteUser}  updateUser={updateUser}/>
        <UpdateUserCont/>
        <FormCont postNewUser={postNewUser} setNewName={setNewName} setNewCompany={setNewCompany}/>    
    </div>
  </>
  )
}
