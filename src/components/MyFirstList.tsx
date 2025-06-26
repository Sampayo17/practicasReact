export default function MyfirsList(props: myFirstListprops){
    
    const {listaPersonajes} = props;
    return(
        <>
            {listaPersonajes.map((element, i) =>
            (
               <div key={i}>{element}</div>
            ))}
                
        </>
        )
}

interface myFirstListprops{
    listaPersonajes : string[];
}