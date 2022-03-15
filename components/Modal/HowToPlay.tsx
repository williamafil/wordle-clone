function HowToPlay() {
  return (
    <div className="w-full p-4">
      <h2 className="pt-4 uppercase text-center font-bold">How To Play</h2>
      <div className="mt-6 text-sm space-y-2">
        <p>
          Guess the <span className="font-bold">WORDLE</span> in six tries.
        </p>
        <p>
          Each guess must be a valid five-letter word. Hit the enter button to
          submit.
        </p>
        <p>
          After each guess, the color of the tiles will change to show how close
          your guess was to the word.
        </p>
      </div>
    </div>
  );
}

export default HowToPlay;
