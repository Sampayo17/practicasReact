import { useState } from "react";
import MyfirsList from "./MyFirstList";
import MyInput from "./MyInput";
import MyFirstButton from "./MyFirstButton";
export default function Mybox({ title, body, btnText = "Save" }: myboxprops) {
  const [personaje, setPersonajes] = useState("");
  const [personajesList, setpersonajesList] = useState([
    "Goku",
    "Zell",
    "Meteoro",
  ]);
  //const personajesList =["Goku", "Zell", "Meteoro"];

  const addHandle = () => {
    setpersonajesList([...personajesList, personaje]);
  };

  const deleteHandle = () => {
    setpersonajesList(personajesList.splice(0, personajesList.length - 1));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonajes(event.target.value);
    console.log(personaje);
  };

  return (
    <>
      <div className="container">
        <h1>{title}</h1>
        <div>{body}</div>

        <MyfirsList listaPersonajes={personajesList}></MyfirsList>
        <MyInput personaje={personaje} onChange={handleChange} />

        <div className="center flex justify-center items-center gap-2 ">
          <MyFirstButton
            onClick={addHandle}
            btnClass={
              "bg-green-500 font-bold p-2 py-2  text-gray-100 border-0 rounded hover:scale-110 "
            }
            btnTitle={btnText}
          />
          <MyFirstButton
            onClick={deleteHandle}
            btnClass={
              "bg-red-500 font-bold p-2 py-2  text-gray-100 border-0 rounded hover:scale-110 "
            }
            btnTitle="Delete"
          />
        </div>
      </div>
    </>
  );
}

interface myboxprops {
  title?: string;
  body?: string;
  btnText?: string;
}
