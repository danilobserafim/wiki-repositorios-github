import React from 'react'
import { InputContainer } from "./style";

function Input({onchange, value}) {
  return (
    <InputContainer onChange={onchange} value={value}/>
  )
}

export default Input