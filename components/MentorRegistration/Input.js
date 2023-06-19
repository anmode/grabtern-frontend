import React from 'react'

function Input({type, name, className, onChange, placeholder, value}) {
  return (
    <input
        type={type}
        name={name}
        className = {className}
        onChange = {onChange}
        placeholder = {placeholder}
        value = {value}
    />
  )
}

export default Input
{}