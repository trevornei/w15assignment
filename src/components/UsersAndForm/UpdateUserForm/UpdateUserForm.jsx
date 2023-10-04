import React from 'react'

export default function ModalForm({ updateUser, setSelectedId, setUpdatedName, setUpdatedCompany, userObject }) {
  return (
    <>
        <form action="" className="w-3/5 h-3/4 bg-cyan-300 shadow-2xl shadow-emerald-300 rounded-r-3xl">
            {/* Select ID */}
            <div className="m-4">
                <label htmlFor="" className="font-bold">Select ID: </label>
                <input type="text" onChange={(e) => setSelectedId(e.target.value)}/>
            </div>
            {/* Name */}
            <div className="m-4">
                <label htmlFor="" className="font-bold">Update Name: </label>
                <input type="text" onChange={(e) => setUpdatedName(e.target.value)} />
            </div>
            {/* Company */}
            <div className="m-4">
                <label htmlFor="" className="font-bold">Update Company: </label>
                <input type="text" onChange={(e) => setUpdatedCompany(e.target.value)}/>
            </div>
            {/*Profile Pic:*/}
            <button className="mx-16 bg-emerald-300 rounded-2xl px-3 py-1" type='submit' onClick={updateUser} >Submit</button>
        </form>
    </>
  )
}
