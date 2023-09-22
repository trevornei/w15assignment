import React from 'react'
import FormInput from './FormInput'

export default function Form() {
  return (
    <div className='h-auto absolute'>
        <div className="z-0 w-1/2 h-3/5 bg-violet-400 rounded-s-lg  inset-y-0 right-0 relative"></div>
        <form action="" className="w-3/5 h-3/4 bg-cyan-300 shadow-2xl shadow-emerald-300 rounded-r-3xl z-50 relative">
            {/*Name */}
            <div className="m-4">
                <label htmlFor="" className="">Name: </label>
                <FormInput/>
            </div>
            {/*Profile Pic:*/}
            <button className="mx-16 bg-emerald-300 rounded-2xl px-3 py-1" type='submit'>Submit</button>
        </form>
    </div>
  )
}
