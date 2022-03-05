import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container(props: ContainerProps) {
  return <div className={`px-4 ${props.className}`}>{props.children}</div>;
}

export default Container;
