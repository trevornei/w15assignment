import React from 'react'

export default function Nav() {
  return (
    <>
        <div className="fixed bg-emerald-400 w-full mix-blend-multiply h-auto">            <ul className='flex flex-row float-right p-6 z-10'>
                <li className='m-6 font-extrabold text-2xl'>
                    <h3 className="tracking-widest">Home</h3>
                </li>
                <li className='m-6 font-extrabold text-2xl'>
                    <h3 className="tracking-widest">About</h3>
                </li>
                <li className='m-6 font-extrabold text-2xl'>
                    <h3 className="tracking-widest">Contact</h3>
                </li>
            </ul>
        </div>
    </>
  )
}
