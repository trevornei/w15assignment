import React from 'react'
import { Link } from 'react-router-dom'
import About from '../../Pages/About/About'
import Contact from '../../Pages/Contact/Contact'

export default function Nav() {
  return (
    <>
        <div className="fixed bg-emerald-400 w-full mix-blend-multiply h-auto">            <ul className='flex flex-row float-right p-6 z-10'>
                <li className='m-6 font-extrabold text-2xl'>
                    <Link to="/" >Home</Link>
                </li>
                <li className='m-6 font-extrabold text-2xl'>
                    <Link to="/about" element={<About />}>About</Link>
                </li>
                <li className='m-6 font-extrabold text-2xl'>
                    <Link to="/contact" element={<Contact />}>Contact</Link>
                </li>
            </ul>
        </div>
    </>
  )
}
