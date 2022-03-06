import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Grids from "../components/Home/Grids";
import Keyboard from "../components/Home/Keyboard";
import Container from "../components/Layout/Container";
import { Word } from "types";

import { extractWord } from "helpers/utils";

// [
//   { check: "wrong-letter", value: "r" },
//   { check: "correct-pos", value: "e" },
//   { check: "wrong-pos", value: "s" },
//   { check: "wrong-letter", value: "i" },
//   { check: "correct-pos", value: "n" },
// ],

const Home: NextPage = () => {
  const [round, setRound] = useState(0);
  const [position, setPosition] = useState(0);

  const [record, setRecord] = useState<Word[]>([
    [
      { check: null, value: null },
      { check: null, value: null },
      { check: null, value: null },
      { check: null, value: null },
      { check: null, value: null },
    ],
    [
      { check: null, value: null },
      { check: null, value: null },
      { check: null, value: null },
      { check: null, value: null },
      { check: null, value: null },
    ],
    [
      { check: null, value: null },
      { check: null, value: null },
      { check: null, value: null },
      { check: null, value: null },
      { check: null, value: null },
    ],
    [
      { check: null, value: null },
      { check: null, value: null },
      { check: null, value: null },
      { check: null, value: null },
      { check: null, value: null },
    ],
    [
      { check: null, value: null },
      { check: null, value: null },
      { check: null, value: null },
      { check: null, value: null },
      { check: null, value: null },
    ],
    [
      { check: null, value: null },
      { check: null, value: null },
      { check: null, value: null },
      { check: null, value: null },
      { check: null, value: null },
    ],
  ]);

  const wordSubmissionHandler = async (word: string) => {
    console.log("SUBMIT WORD: ", word);
    const res = await fetch("/api/spell-check", {
      method: "POST",
      body: word,
    });
    const data = res.json();
    console.log("res data: ", data);
  };

  const keyPressHandler = (key: string) => {
    if (round === 6) return; // game is over
    if (key === "enter") {
      console.log("ENTER");
      if (position < 5) return;

      const wordToSubmit = extractWord(record[round]);
      wordSubmissionHandler(wordToSubmit);
      // setRound((prev) => (prev += 1));
      // setPosition(0);
      return;
    }
    if (key === "backspace") {
      if (position === 0) return; // disable backspace when position is 0
      setRecord((prev) => {
        prev[round][position - 1].value = null;
        return prev;
      });
      setPosition((prev) => (prev -= 1));
      return;
    }

    if (position === 5) return; // escape onKeyPress when position is 5

    setRecord((prev) => {
      prev[round][position].value = key;
      return prev;
    });

    setPosition((prev) => (prev += 1));
  };

  return (
    <div className="h-full">
      <Head>
        <title>Wordle Clone</title>
        <meta
          name="description"
          content="Just another wordle clone, nothing fancy!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="h-full flex flex-col">
        <Grids record={record} />
        <footer className="flex-shrink-0 h-56">
          <Keyboard onKeyPress={keyPressHandler} />
        </footer>
      </Container>
    </div>
  );
};

export default Home;
