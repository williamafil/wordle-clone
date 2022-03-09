import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import type { NextPage } from "next";

import { Word, Letter } from "types";
import { extractWord } from "helpers/utils";
import Grids from "../components/Home/Grids";
import Keyboard from "../components/Home/Keyboard";
import Container from "../components/Layout/Container";

// checkNum: 3, check: 'correct-pos'
// checkNum: 2, check: 'wrong-pos'
// checkNum: 1, check: 'wrong-letter'
// checkNum: 0 default value

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [round, setRound] = useState(0);
  const [position, setPosition] = useState(0);
  const [record, setRecord] = useState<Word[]>([
    [
      { checkNum: 0, value: null },
      { checkNum: 0, value: null },
      { checkNum: 0, value: null },
      { checkNum: 0, value: null },
      { checkNum: 0, value: null },
    ],
    [
      { checkNum: 0, value: null },
      { checkNum: 0, value: null },
      { checkNum: 0, value: null },
      { checkNum: 0, value: null },
      { checkNum: 0, value: null },
    ],
    [
      { checkNum: 0, value: null },
      { checkNum: 0, value: null },
      { checkNum: 0, value: null },
      { checkNum: 0, value: null },
      { checkNum: 0, value: null },
    ],
    [
      { checkNum: 0, value: null },
      { checkNum: 0, value: null },
      { checkNum: 0, value: null },
      { checkNum: 0, value: null },
      { checkNum: 0, value: null },
    ],
    [
      { checkNum: 0, value: null },
      { checkNum: 0, value: null },
      { checkNum: 0, value: null },
      { checkNum: 0, value: null },
      { checkNum: 0, value: null },
    ],
    [
      { checkNum: 0, value: null },
      { checkNum: 0, value: null },
      { checkNum: 0, value: null },
      { checkNum: 0, value: null },
      { checkNum: 0, value: null },
    ],
  ]);

  const wordSubmissionHandler = async (word: string) => {
    if (isGameOver) return;
    setIsLoading(true);
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

      if (res.data.isCorrect) {
        setIsGameOver(true);
        setIsLoading(false);
        setRound((prev) => (prev += 1));
        setPosition(0);
        return;
      }

      setRound((prev) => (prev += 1));
      setPosition(0);
    } else {
      // false -> animation
    }
    setIsLoading(false);
  };

  const keyPressHandler = (key: string) => {
    if (isLoading || isGameOver) return;
    if (round === 6) return; // game over
    if (key === "enter") {
      if (position < 5) return;

      const wordToSubmit = extractWord(record[round]);
      wordSubmissionHandler(wordToSubmit);
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
      <Container className="relative h-full flex flex-col">
        {isLoading && (
          <div className="absolute left-0 top-0 mt-2 text-center w-[100%]">
            <p className="inline w-20 px-3 py-1 rounded-md bg-gray-50 text-center text-xs uppercase text-gray-500 font-semibold tracking-wide">
              Loading
            </p>
          </div>
        )}
        <Grids record={record} />
        <footer className="flex-shrink-0 h-56">
          <Keyboard
            currentRound={round}
            record={record}
            onKeyPress={keyPressHandler}
          />
        </footer>
      </Container>
    </div>
  );
};

export default Home;
