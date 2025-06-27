export default function MyfirsList(props: myFirstListprops) {
  const { listaPersonajes } = props;
  return (
    <>
      {/*</><div  className="border-collapse border border-gray-400  bg-gradient-to-br from-gray-900 via-blue-900 to-black min-h-9 p-2 font-sans text-gray-200 rounded">*/}
      <div  className="flex flex-col  py-4 first:pt-0 last:pb-0">
        {listaPersonajes.map((element, i) => (
          <div className="ml-3 overflow-hidden" key={i}>
            <div className="ml-3 overflow-hidden">
                
            <p className="text-sm font-medium text-gray-900 dark:text-white"> {element}</p>
            </div>
               <br/>
            </div>
         
        ))}
      </div>


    </>
  );
}

interface myFirstListprops {
  listaPersonajes: string[];
}
