import React, { useRef, useEffect, useState } from 'react'

interface InputProps {
  onChange: Function;
  label?: string;
  value: string;
  type?: string;
}

const Input: React.FC<InputProps> = (props) => {
  const { onChange, label, value, type = 'text' } = props
  const inputRef = useRef(null)
  const [cls, setCls] = useState('')
  useEffect(() => {
    const onFocus = (e) => {
      setCls('focus')
    }
    const onBlur = (e) => {
      setCls('blur')
    }
    const inputEl = inputRef.current
    inputEl.addEventListener('focus', onFocus)
    inputEl.addEventListener('blur', onBlur)
    return () => {
      inputEl.removeEventListener('focus', onFocus)
      inputEl.removeEventListener('blur', onBlur)
    }
  }, [])
  return (
    <div className={`uw-input ${cls} ${value ? 'has-val' : ''}`}>
      <input style={{display: 'none'}} autoComplete="off"></input>
      <input value={value} type={type} ref={inputRef} onChange={(e) => onChange(e.target.value)} autoComplete={type === 'password' ? 'new-password' : 'off'} />
      <label>{label}</label>
    </div>
  )
}

export default Input