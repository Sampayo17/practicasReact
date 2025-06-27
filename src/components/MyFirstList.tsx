export default function MyfirsList(props: myFirstListprops) {
  const { listaPersonajes } = props;
  return (
    <>
      <div className="border-collapse border border-gray-400  bg-gradient-to-br from-gray-900 via-blue-900 to-black min-h-9 p-2 font-sans text-gray-200 rounded">
        {listaPersonajes.map((element, i) => (
          <div className="border border-gray-300 rounded " key={i}>{element}</div>
        ))}
      </div>
    </>
  );
}

interface myFirstListprops {
  listaPersonajes: string[];
}
