import React from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

export default function Footer() {
  return (
    <div className='absolute inset-x-0 bottom-4'>
        <div className='mx-auto h-auto flex flex-row items-center justify-center'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="px-8 " alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="px-8" alt="React logo" />
        </a>
      </div>
    </div>
  )
}
