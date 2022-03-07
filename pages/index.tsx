import axios from "axios";
import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Grids from "../components/Home/Grids";
import Keyboard from "../components/Home/Keyboard";
import Container from "../components/Layout/Container";
import { Word, Letter } from "types";

import { extractWord } from "helpers/utils";

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
    const res = await axios.post("/api/spell-check", {
      data: word,
    });

    if (res.data.correction) {
      // true
      res.data.result.map((letter: Letter, i: number) => {
        setRecord((prev) => {
          prev[round][i] = letter;
          return prev;
        });
      });

      setRound((prev) => (prev += 1));
      setPosition(0);
    } else {
      // false -> animation
    }
  };

  const keyPressHandler = (key: string) => {
    if (round === 6) return; // game over
    if (key === "enter") {
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
        const newRecord = [...prev];
        newRecord[round][position - 1].value = null;
        return newRecord;
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
