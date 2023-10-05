import React from "react";
import UpdateUserFormTitle from './UpdateUserFormTitle'
import UpdateUserForm from './UpdateUserForm'


export default function UpdateUserCont({ updateUser, setSelectedId, setUpdatedName, setUpdatedCompany, userObject }) {
    return( 
        <>
            <div className="w-2/3 h-auto flex flex-col items-center justify-center">
                <UpdateUserFormTitle/>
                <UpdateUserForm updateUser={updateUser} setSelectedId={setSelectedId} setUpdatedName={setUpdatedName} setUpdatedCompany={setUpdatedCompany} userObject />
            </div>
        </>
    )
}