import React from 'react'

export default function MyInput(prosp: myInputProps) {
    const {personaje, onChange} = prosp;
  return (
    <div>
           <input type="text" className="bg-amber-50 rounded p-2 m-2" value={personaje} onChange={onChange} />   
    </div>
  )
}

interface myInputProps {
    personaje:string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
