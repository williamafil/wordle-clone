import React from "react";
import { BackspaceIcon } from "../Icons";
import KeyButton from "./KeyButton";

function Keyboard() {
  return (
    <div className="pb-4 mx-auto max-w-lg flex flex-col justify-end gap-2 h-full font-semibold uppercase text-sm">
      <div className="grid grid-cols-10 gap-2">
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          Q
        </div>
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          W
        </div>
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          E
        </div>
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          R
        </div>
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          T
        </div>
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          Y
        </div>
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          U
        </div>
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          I
        </div>
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          O
        </div>
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          P
        </div>
      </div>
      <div className="px-4 grid grid-cols-9 gap-2">
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          A
        </div>
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          S
        </div>
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          D
        </div>
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          F
        </div>
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          G
        </div>
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          H
        </div>
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          J
        </div>
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          K
        </div>
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          L
        </div>
      </div>
      <div className="grid grid-flow-col  gap-2">
        <div className=" text-xs font-bold h-14 rounded-md bg-gray-300 flex items-center justify-center">
          enter
        </div>
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          Z
        </div>
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          X
        </div>
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          C
        </div>
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          V
        </div>
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          B
        </div>
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          N
        </div>
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center">
          M
        </div>
        <div className="h-14 rounded-md bg-gray-300 flex items-center justify-center flex items-center justify-center">
          <BackspaceIcon />
        </div>
      </div>
    </div>
  );
}

export default Keyboard;
