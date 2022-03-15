import { useEffect, useState, useRef, useCallback } from "react";
import clsx from "clsx";
import { Word, SpellCheckProps } from "types";
import Placeholder from "./Placeholder";
interface GridsProps {
  record: Word[];
  spellCheck: SpellCheckProps;
}

function Grids(props: GridsProps) {
  const rowRef = useRef<any>([]);

  useEffect(() => {
    const onPageLoad = () => {
      if (props.spellCheck.spelling === "incorrect") {
        rowRef.current[props.spellCheck.round].classList.add("animate-shake");

        setTimeout(() => {
          rowRef.current[props.spellCheck.round].classList.remove(
            "animate-shake"
          );
        }, 1300);
      }
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, [props.spellCheck]);

  return (
    <>
      <div className="mx-auto h-full flex justify-center items-center">
        <section className="space-y-2">
          {props.record.map((round, roundIdx) => (
            <div
              ref={(el) => (rowRef.current[roundIdx] = el)}
              key={roundIdx}
              className={clsx(
                "grid grid-cols-5 gap-2"
                // spellCheck && roundIdx === props.spellCheck.round
                //   ? " animate-shake"
                //   : ""
              )}
            >
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
