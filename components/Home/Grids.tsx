import clsx from "clsx";
import React from "react";
import { Word } from "types";
interface GridsProps {
  record: Word[];
}

function Grids(props: GridsProps) {
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
  // const bgColor = (check: string | null): string => {
  //   switch (check) {
  //     case "correct-pos":
  //       return "bg-green-600 border-green-600 text-white";
  //     case "wrong-pos":
  //       return "bg-yellow-500 border-yellow-500 text-white";
  //     case "wrong-letter":
  //       return "bg-gray-400 border-gray-400 text-white";
  //     case null:
  //       return "bg-transparent";
  //     default:
  //       return "bg-transparent";
  //   }
  // };

  const borderColor = (val: string | null, checkNum: number): string => {
    if (val && !checkNum) {
      return "border-gray-400";
    }
    return "";
  };
  // const borderColor = (val: string | null, check: string | null): string => {
  //   if (val && !check) {
  //     return "border-gray-400";
  //   }
  //   return "";
  // };

  return (
    <>
      <div className="mx-auto h-full flex justify-center items-center">
        <section className="space-y-2">
          {props.record.map((round, roundIdx) => (
            <div key={roundIdx} className="grid grid-cols-5 gap-2">
              {round.map((item, posIdx) => (
                <div
                  key={posIdx}
                  className={clsx(
                    "p-2 aspect-square w-16 border-2",
                    "flex justify-center items-center",
                    "text-3xl font-extrabold uppercase",
                    // bgColor(item.check),
                    bgColor(item.checkNum),
                    borderColor(item.value, item.checkNum)
                  )}
                >
                  {item.value}
                </div>
              ))}
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default Grids;
