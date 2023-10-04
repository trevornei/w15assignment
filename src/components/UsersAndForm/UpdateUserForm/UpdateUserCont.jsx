import React from "react";
import UpdateUserFormTitle from './UpdateUserFormTitle'
import UpdateUserForm from './UpdateUserForm'


export default function UpdateUserCont({ updateUser, setSelectedId, setUpdatedName, setUpdatedCompany, userObject }) {
    return( 
        <>
            <UpdateUserFormTitle/>
            <UpdateUserForm updateUser={updateUser} setSelectedId={setSelectedId} setUpdatedName={setUpdatedName} setUpdatedCompany={setUpdatedCompany} userObject />
        </>
    )
}