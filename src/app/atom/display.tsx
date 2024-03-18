"use client";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const displayAtom = atom({
  key: "displayAtom",
  default: "",
  effects: [persistAtom],
});

export const useDisplay = () => {
  const [diplayState, setDisplayState] = useRecoilState(displayAtom);

  const handleVisor = (value) => {
    setDisplayState((prevState) => prevState + value);
  };

  return { diplayState, setDisplayState, handleVisor };
};
