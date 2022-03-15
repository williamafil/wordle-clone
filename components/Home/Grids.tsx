import React from "react";
import { Word } from "types";
import Placeholder from "./Placeholder";
interface GridsProps {
  record: Word[];
}

function Grids(props: GridsProps) {
  return (
    <>
      <div className="mx-auto h-full flex justify-center items-center">
        <section className="space-y-2">
          {props.record.map((round, roundIdx) => (
            <div key={roundIdx} className="grid grid-cols-5 gap-2">
              {round.map((item, posIdx) => (
                <Placeholder key={posIdx} item={item} />
              ))}
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default Grids;
