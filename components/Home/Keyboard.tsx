import { useEffect, useState } from "react";
import { BackspaceIcon } from "../Icons";
import KeyButton from "./KeyButton";
import { Word } from "types";

interface KeyboardProps {
  onKeyPress: (key: string) => void;
  record: Word[];
  currentRound: number;
}

interface IKeyValue {
  [key: string]: number;
}

function Keyboard(props: KeyboardProps) {
  const [keyRecord, setKeyRecord] = useState<IKeyValue>({
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  });
  useEffect(() => {
    if (props.currentRound === 0) return;
    props.record[props.currentRound - 1].map((item) => {
      if (item.value !== null && keyRecord[item.value] !== item.checkNum) {
        if (item.checkNum > keyRecord[item.value]) {
          setKeyRecord((prev) => {
            if (item.value !== null) {
              prev[item.value] = item.checkNum;
            }
            return prev;
          });
        }
      }
    });
  }, [props.record, props.currentRound]);

  const checkKeyColor = (letter: string) => {
    switch (keyRecord[letter]) {
      case 3:
        return "bg-green-500";
      case 2:
        return "bg-amber-400 ";
      case 1:
        return "bg-zinc-400";
      case 0: {
        return "bg-transparent";
      }
      default:
        return "bg-transparent";
    }
  };

  return (
    <div className="pb-4 mx-auto max-w-lg flex flex-col justify-end gap-2 h-full font-semibold uppercase text-sm">
      <div className="grid grid-cols-10 gap-2">
        <KeyButton
          className={checkKeyColor("q")}
          onKeyPress={props.onKeyPress}
          value="q"
        />
        <KeyButton
          className={checkKeyColor("w")}
          onKeyPress={props.onKeyPress}
          value="w"
        />
        <KeyButton
          className={checkKeyColor("e")}
          onKeyPress={props.onKeyPress}
          value="e"
        />
        <KeyButton
          className={checkKeyColor("r")}
          onKeyPress={props.onKeyPress}
          value="r"
        />
        <KeyButton
          className={checkKeyColor("t")}
          onKeyPress={props.onKeyPress}
          value="t"
        />
        <KeyButton
          className={checkKeyColor("y")}
          onKeyPress={props.onKeyPress}
          value="y"
        />
        <KeyButton
          className={checkKeyColor("u")}
          onKeyPress={props.onKeyPress}
          value="u"
        />
        <KeyButton
          className={checkKeyColor("i")}
          onKeyPress={props.onKeyPress}
          value="i"
        />
        <KeyButton
          className={checkKeyColor("o")}
          onKeyPress={props.onKeyPress}
          value="o"
        />
        <KeyButton
          className={checkKeyColor("p")}
          onKeyPress={props.onKeyPress}
          value="p"
        />
      </div>
      <div className="px-4 grid grid-cols-9 gap-2">
        <KeyButton
          className={checkKeyColor("a")}
          onKeyPress={props.onKeyPress}
          value="a"
        />
        <KeyButton
          className={checkKeyColor("s")}
          onKeyPress={props.onKeyPress}
          value="s"
        />
        <KeyButton
          className={checkKeyColor("d")}
          onKeyPress={props.onKeyPress}
          value="d"
        />
        <KeyButton
          className={checkKeyColor("f")}
          onKeyPress={props.onKeyPress}
          value="f"
        />
        <KeyButton
          className={checkKeyColor("g")}
          onKeyPress={props.onKeyPress}
          value="g"
        />
        <KeyButton
          className={checkKeyColor("h")}
          onKeyPress={props.onKeyPress}
          value="h"
        />
        <KeyButton
          className={checkKeyColor("j")}
          onKeyPress={props.onKeyPress}
          value="j"
        />
        <KeyButton
          className={checkKeyColor("k")}
          onKeyPress={props.onKeyPress}
          value="k"
        />
        <KeyButton
          className={checkKeyColor("l")}
          onKeyPress={props.onKeyPress}
          value="l"
        />
      </div>
      <div className="grid grid-flow-col  gap-2">
        <KeyButton onKeyPress={props.onKeyPress} value="enter" />
        <KeyButton
          className={checkKeyColor("z")}
          onKeyPress={props.onKeyPress}
          value="z"
        />
        <KeyButton
          className={checkKeyColor("x")}
          onKeyPress={props.onKeyPress}
          value="x"
        />
        <KeyButton
          className={checkKeyColor("c")}
          onKeyPress={props.onKeyPress}
          value="c"
        />
        <KeyButton
          className={checkKeyColor("v")}
          onKeyPress={props.onKeyPress}
          value="v"
        />
        <KeyButton
          className={checkKeyColor("b")}
          onKeyPress={props.onKeyPress}
          value="b"
        />
        <KeyButton
          className={checkKeyColor("n")}
          onKeyPress={props.onKeyPress}
          value="n"
        />
        <KeyButton
          className={checkKeyColor("m")}
          onKeyPress={props.onKeyPress}
          value="m"
        />
        <KeyButton onKeyPress={props.onKeyPress} value="backspace">
          <BackspaceIcon />
        </KeyButton>
      </div>
    </div>
  );
}

export default Keyboard;
