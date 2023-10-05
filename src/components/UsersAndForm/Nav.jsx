import React from 'react'

export default function Nav() {
  return (
    <>
        <div className="fixed end-0">
            <ul className='flex flex-row p-6'>
                <li className='m-6 font-extrabold text-2xl'>
                    <h3 className="">Home</h3>
                </li>
                <li className='m-6 font-extrabold text-2xl'>
                    <h3 className="">About</h3>
                </li>
                <li className='m-6 font-extrabold text-2xl'>
                    <h3 className="">Contact</h3>
                </li>
            </ul>
        </div>
    </>
  )
}
