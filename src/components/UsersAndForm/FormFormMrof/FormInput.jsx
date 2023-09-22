import React from 'react'

export default function FormInput({ label, ...rest}) {
  return (
    <div>
        <label htmlFor="rest.id" className=""></label>
        <input type="text" className="" {...rest} />
    </div>
  )
}
