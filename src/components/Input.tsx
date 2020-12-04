import React, { useRef, useEffect, useState } from 'react'

interface InputProps {
  placeholder?: string;
  onChange: Function;
  label?: string;
  value: string;
  type?: string;
}

const Input: React.FC<InputProps> = (props) => {
  const { onChange, label, value, type = 'text', placeholder } = props
  const inputRef = useRef(null)
  const [cls, setCls] = useState('')
  const [focus, setFocus] = useState(false)
  useEffect(() => {
    const onFocus = (e) => {
      setCls('focus')
      setFocus(true)
    }
    const onBlur = (e) => {
      setCls('blur')
      setFocus(false)
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
      <input value={value} type={type} ref={inputRef} placeholder={!value && focus ? placeholder : ''} onChange={(e) => onChange(e.target.value)} autoComplete={type === 'password' ? 'new-password' : 'off'} />
      <label>{label}</label>
    </div>
  )
}

export default Input