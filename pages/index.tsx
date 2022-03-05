import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Grids from "../components/Home/Grids";
import Keyboard from "../components/Home/Keyboard";
import Container from "../components/Layout/Container";

const Home: NextPage = () => {
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
        <Grids />
        <footer className="flex-shrink-0 h-56">
          <Keyboard />
        </footer>
      </Container>
    </div>
  );
};

export default Home;
