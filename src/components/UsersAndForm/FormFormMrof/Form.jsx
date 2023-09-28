import React from 'react'
import FormInput from './FormInput'

export default function Form() {

  function stopRefresh(event) {
    event.preventDefault()
  }

  return (
    <div className='h-auto absolute'>
        <div className="z-0 w-1/2 h-3/5 bg-violet-400 rounded-s-lg  inset-y-0 right-0 relative"></div>
        <form action="" className="w-3/5 h-3/4 bg-cyan-300 shadow-2xl shadow-emerald-300 rounded-r-3xl z-50 relative">
            {/* Select ID */}
            <div className="m-4">
                <label htmlFor="" className="font-bold">Select ID: </label>
                <FormInput/>
            </div>
            {/* Name */}
            <div className="m-4">
                <label htmlFor="" className="font-bold">Name: </label>
                <FormInput/>
            </div>
            {/* Company */}
            <div className="m-4">
                <label htmlFor="" className="font-bold">Company: </label>
                <FormInput/>
            </div>
            {/*Profile Pic:*/}
            <button className="mx-16 bg-emerald-300 rounded-2xl px-3 py-1" type='submit' onSubmit={stopRefresh}>Submit</button>
        </form>
    </div>
  )
}
