import React from "react";
import clsx from "clsx";

interface KeyButtonProps {
  children?: React.ReactNode;
  value: string;
}

function KeyButton(props: KeyButtonProps) {
  return (
    <button
      className={clsx(
        "h-14 rounded-md bg-gray-300",
        "flex items-center justify-center",
        "active:bg-gray-400",
        "text-sm uppercase",
        props.value === "enter" ? "font-bold " : "font-semibold "
      )}
    >
      {props.value === "backspace" && props.children}
      {props.value !== "backspace" && props.value}
    </button>
  );
}

export default KeyButton;
