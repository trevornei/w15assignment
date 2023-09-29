import React from 'react'
import ModalFormInput from './ModalFormInput'

export default function ModalForm() {
  return (
    <>
        <form action="" className="w-3/5 h-3/4 bg-cyan-300 shadow-2xl shadow-emerald-300 rounded-r-3xl" onSubmit={() => handleUpdateSubmit(e)}>
            {/* Select ID */}
            <div className="m-4">
                <label htmlFor="" className="font-bold">Select ID: </label>
                <ModalFormInput/>
            </div>
            {/* Name */}
            <div className="m-4">
                <label htmlFor="" className="font-bold">Name: </label>
                <ModalFormInput/>
            </div>
            {/* Company */}
            <div className="m-4">
                <label htmlFor="" className="font-bold">Company: </label>
                <ModalFormInput/>
            </div>
            {/*Profile Pic:*/}
            <button className="mx-16 bg-emerald-300 rounded-2xl px-3 py-1" type='submit'>Submit</button>
        </form>
    </>
  )
}
