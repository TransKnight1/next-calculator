interface SquareProps {
  textProp: string | number;
  doubleWidth?: boolean;
  onClick?: (cur: string) => void;
}

export const Square = ({ textProp, doubleWidth, onClick }: SquareProps) => {
  return (
    <button
      onClick={() => onClick?.(textProp.toString())}
      className={
        `bg-gray-500 h-14 border-[1px] border-teal-950 ` +
        (doubleWidth ? "w-28" : "w-14")
      }
    >
      <h1>{textProp}</h1>
    </button>
  );
};
