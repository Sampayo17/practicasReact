import React from 'react'

export default function MyInput(prosp: myInputProps) {
    const {personaje, onChange} = prosp;
  return (
    <div>
           <input type="text" value={personaje} onChange={onChange} />   
    </div>
  )
}

interface myInputProps {
    personaje:string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
