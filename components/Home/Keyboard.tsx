import React from "react";
import { BackspaceIcon } from "../Icons";
import KeyButton from "./KeyButton";

function Keyboard() {
  return (
    <div className="pb-4 mx-auto max-w-lg flex flex-col justify-end gap-2 h-full font-semibold uppercase text-sm">
      <div className="grid grid-cols-10 gap-2">
        <KeyButton value="q" />
        <KeyButton value="w" />
        <KeyButton value="e" />
        <KeyButton value="r" />
        <KeyButton value="t" />
        <KeyButton value="y" />
        <KeyButton value="u" />
        <KeyButton value="i" />
        <KeyButton value="o" />
        <KeyButton value="p" />
      </div>
      <div className="px-4 grid grid-cols-9 gap-2">
        <KeyButton value="a" />
        <KeyButton value="s" />
        <KeyButton value="d" />
        <KeyButton value="f" />
        <KeyButton value="g" />
        <KeyButton value="h" />
        <KeyButton value="j" />
        <KeyButton value="k" />
        <KeyButton value="l" />
      </div>
      <div className="grid grid-flow-col  gap-2">
        <KeyButton value="enter" />
        <KeyButton value="z" />
        <KeyButton value="x" />
        <KeyButton value="c" />
        <KeyButton value="v" />
        <KeyButton value="b" />
        <KeyButton value="n" />
        <KeyButton value="m" />
        <KeyButton value="backspace">
          <BackspaceIcon />
        </KeyButton>
      </div>
    </div>
  );
}

export default Keyboard;
