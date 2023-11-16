import React from 'react'
import { useState, useEffect } from 'react'
import UsersCont from './UsersCont'
import FormCont from './FormFormMrof/FormCont'
import UpdateUserCont from './UpdateUserForm/UpdateUserCont'
import UsersTitle from './UserComp/UsersTitle'

export default function MeatAndPotatoesCont() {

  const [users, setUsers] = useState([{}])
  
  // Create new users information.
  const [newName, setNewName] = useState('')
  const [newCompany, setNewCompany] = useState('')

  // Updated User Information
  const [selectedId, setSelectedId] = useState('')
  const [updatedName, setUpdatedName] = useState('')
  const [updatedCompany, setUpdatedCompany] = useState('')

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

  const updateUser = (e, userObject) => {
    e.preventDefault()

    console.log(`The user ID that you selected: ${selectedId}`)
    console.log(`Your updated name: ${updatedName}`)
    console.log(`Your updated company: ${updatedName}`)
    
    
    let updatedUserObject = {
      // spreads out key value pairs from an existing object.
      ...userObject,
      id: selectedId,
      name: updatedName,
      company: updatedCompany,
    }
    
    console.log(updatedUserObject)

    fetch(`${URL}/${selectedId}`, {
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
      name: newName,
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
    <div className='flex flex-col items-center justify-center w-3/4 h-full mx-auto rounded-2xl mt-40'>
        <UsersTitle/>
        <UsersCont users={users} setUsers={setUsers} deleteUser={deleteUser}  updateUser={updateUser}/>
        <UpdateUserCont updateUser={updateUser} setSelectedId={setSelectedId} setUpdatedName={setUpdatedName} setUpdatedCompany={setUpdatedCompany} />
        <FormCont postNewUser={postNewUser} setNewName={setNewName} setNewCompany={setNewCompany}/>    
    </div>
  </>
  )
}
