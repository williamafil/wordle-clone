import React from "react";
import clsx from "clsx";

interface KeyButtonProps {
  children: React.ReactNode;
}

function KeyButton(props: KeyButtonProps) {
  return (
    <button
      className={clsx(
        "h-14 rounded-md bg-gray-300",
        "flex items-center justify-center",
        "active:bg-gray-400"
      )}
    >
      {props.children}
    </button>
  );
}

export default KeyButton;
