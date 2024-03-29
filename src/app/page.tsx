"use client";
import { useEffect, useState } from "react";
import { Square } from "./components/square";
import { RecoilRoot } from "recoil";
import { useDisplay } from "./atom/display";

export default function Home() {
  const { diplayState } = useDisplay();

  useEffect(() => {}, [diplayState]);

  const renderVisor = () => {
    return (
      <div className="flex w-56 h-14 place-items-center border-[1px] border-white p-2">
        <h1>{diplayState}</h1>
      </div>
    );
  };

  return (
    <RecoilRoot>
      <div className="flex flex-col place-items-center mt-40">
        {renderVisor()}
        <div className="grid grid-cols-4 w-56">
          <Square textProp="%" />
          <Square textProp="+/-" />
          <Square textProp="-" />
          <Square textProp="DEL" />
          <Square textProp={7} />
          <Square textProp={8} />
          <Square textProp={9} />
          <Square textProp="/" />
          <Square textProp={4} />
          <Square textProp={5} />
          <Square textProp={6} />
          <Square textProp="X" />
          <Square textProp={1} />
          <Square textProp={2} />
          <Square textProp={3} />
          <Square textProp="+" />
          <Square textProp={0} />
          <Square textProp="," />
          <Square textProp="=" doubleWidth />
        </div>
      </div>
    </RecoilRoot>
  );
}
