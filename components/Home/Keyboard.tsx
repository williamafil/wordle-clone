import React from "react";
import { BackspaceIcon } from "../Icons";
import KeyButton from "./KeyButton";

interface KeyboardProps {
  onKeyPress: (key: string) => void;
}

function Keyboard(props: KeyboardProps) {
  return (
    <div className="pb-4 mx-auto max-w-lg flex flex-col justify-end gap-2 h-full font-semibold uppercase text-sm">
      <div className="grid grid-cols-10 gap-2">
        <KeyButton onKeyPress={props.onKeyPress} value="q" />
        <KeyButton onKeyPress={props.onKeyPress} value="w" />
        <KeyButton onKeyPress={props.onKeyPress} value="e" />
        <KeyButton onKeyPress={props.onKeyPress} value="r" />
        <KeyButton onKeyPress={props.onKeyPress} value="t" />
        <KeyButton onKeyPress={props.onKeyPress} value="y" />
        <KeyButton onKeyPress={props.onKeyPress} value="u" />
        <KeyButton onKeyPress={props.onKeyPress} value="i" />
        <KeyButton onKeyPress={props.onKeyPress} value="o" />
        <KeyButton onKeyPress={props.onKeyPress} value="p" />
      </div>
      <div className="px-4 grid grid-cols-9 gap-2">
        <KeyButton onKeyPress={props.onKeyPress} value="a" />
        <KeyButton onKeyPress={props.onKeyPress} value="s" />
        <KeyButton onKeyPress={props.onKeyPress} value="d" />
        <KeyButton onKeyPress={props.onKeyPress} value="f" />
        <KeyButton onKeyPress={props.onKeyPress} value="g" />
        <KeyButton onKeyPress={props.onKeyPress} value="h" />
        <KeyButton onKeyPress={props.onKeyPress} value="j" />
        <KeyButton onKeyPress={props.onKeyPress} value="k" />
        <KeyButton onKeyPress={props.onKeyPress} value="l" />
      </div>
      <div className="grid grid-flow-col  gap-2">
        <KeyButton onKeyPress={props.onKeyPress} value="enter" />
        <KeyButton onKeyPress={props.onKeyPress} value="z" />
        <KeyButton onKeyPress={props.onKeyPress} value="x" />
        <KeyButton onKeyPress={props.onKeyPress} value="c" />
        <KeyButton onKeyPress={props.onKeyPress} value="v" />
        <KeyButton onKeyPress={props.onKeyPress} value="b" />
        <KeyButton onKeyPress={props.onKeyPress} value="n" />
        <KeyButton onKeyPress={props.onKeyPress} value="m" />
        <KeyButton onKeyPress={props.onKeyPress} value="backspace">
          <BackspaceIcon />
        </KeyButton>
      </div>
    </div>
  );
}

export default Keyboard;
