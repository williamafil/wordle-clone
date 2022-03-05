import React from "react";
import clsx from "clsx";
import { bgColor, borderColor } from "../../helpers/utils";

interface GridsProps {
  record: { check: null | string; value: null | string }[][];
}

function Grids(props: GridsProps) {
  return (
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
                  borderColor(item.value, item.check),
                  bgColor(item.check)
                )}
              >
                {item.value}
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Grids;
