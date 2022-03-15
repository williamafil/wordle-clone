import clsx from "clsx";
import { useEffect, useState } from "react";
import { Letter } from "../../types";

interface PlaceholderProps {
  item: Letter;
}

function Placeholder(props: PlaceholderProps) {
  const { item } = props;

  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      if (item.value !== null) {
        console.log("animation");

        setPlayAnimation(true);
      } else {
        setPlayAnimation(false);
      }
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  });

  const bgColor = (checkNum: number): string => {
    switch (checkNum) {
      case 3:
        return "bg-green-600 border-green-600 text-white";
      case 2:
        return "bg-yellow-500 border-yellow-500 text-white";
      case 1:
        return "bg-gray-400 border-gray-400 text-white";
      case 0:
        return "bg-transparent";
      default:
        return "bg-transparent";
    }
  };

  const borderColor = (val: string | null, checkNum: number): string => {
    if (val && !checkNum) {
      return "border-gray-400";
    }
    return "";
  };

  return (
    <div
      className={clsx(
        "p-2 aspect-square w-16 border-2",
        "flex justify-center items-center",
        "text-3xl font-extrabold uppercase",
        playAnimation ? " animate-scaleDown" : "",
        bgColor(item.checkNum),
        borderColor(item.value, item.checkNum)
      )}
    >
      {item.value}
    </div>
  );
}

export default Placeholder;
