import { useState } from "react";
import MyfirsList from "./MyFirstList";
import MyInput from "./MyInput";
import MyFirstButton from "./MyFirstButton";
export default function Mybox({title, body, btnText="Save"}: myboxprops){
    const [personaje, setPersonajes] = useState("");
    const [personajesList, setpersonajesList] = useState(["Goku", "Zell", "Meteoro"]);
    //const personajesList =["Goku", "Zell", "Meteoro"]; 

   const addHandle = ()=>{
        setpersonajesList([...personajesList, personaje]);
    }

    const deleteHandle = ()=>{ setpersonajesList(personajesList.splice(0,personajesList.length -1))}

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{ 
        setPersonajes(event.target.value);
        console.log(personaje);
     }
    return(
        <>
        <div className="box1">
                <h1>{title}</h1>
                <div>{body}</div>

            <MyfirsList listaPersonajes={personajesList}></MyfirsList> 
            <MyInput personaje={personaje} onChange={handleChange}/>
          
        
            <div>
                <MyFirstButton  onClick={addHandle}     btnClass="btn-success" btnTitle={btnText}/>
                <MyFirstButton  onClick={deleteHandle} btnClass="btn-danger" btnTitle="delete"/>
            </div>
        </div>
        </>
    )

}

interface myboxprops{
    title?: string;
    body?: string;
    btnText?:string;
}