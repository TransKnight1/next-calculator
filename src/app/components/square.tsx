"use client";
import { useDisplay } from "../atom/display";

interface SquareProps {
  textProp: string | number;
  doubleWidth?: boolean;
  onClick?: boolean;
}

export const Square = ({ textProp, doubleWidth, onClick }: SquareProps) => {
  const { diplayState, setDisplayState, handleVisor } = useDisplay();
  return (
    <button
      onClick={() => handleVisor(textProp)}
      className={
        `bg-gray-500 h-14 border-[1px] border-teal-950 ` +
        (doubleWidth ? "w-28" : "w-14")
      }
    >
      <h1>{textProp}</h1>
    </button>
  );
};
