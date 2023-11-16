import React from 'react'
import UpdateUserCont from '../UsersAndForm/UpdateUserForm/UpdateUserCont'
import FormCont from '../UsersAndForm/FormFormMrof/FormCont'

export default function UpdateAndCreateContainer({ updateUser, setSelectedId, setUpdatedName, setUpdatedCompany, postNewUser,setNewName, setNewCompany }) {
  return (
    <>
        <div className="flex flex-row my-16">
            <UpdateUserCont updateUser={updateUser} setSelectedId={setSelectedId} setUpdatedName={setUpdatedName} setUpdatedCompany={setUpdatedCompany}/>
            <FormCont postNewUser={postNewUser} setNewName={setNewName} setNewCompany={setNewCompany}/>
        </div>
    </>
  )
}
