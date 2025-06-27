export default function MyFirstButton({
  btnTitle,
  onClick,
  btnClass,
}: myfirstbuttonprops) {
  return (
    <>
      <button onClick={onClick} className={btnClass}>
        {btnTitle}
      </button>
    </>
  );
}

interface myfirstbuttonprops {
  btnTitle: string;
  btnClass: string;
  onClick: () => void;
  change?: number;
}
