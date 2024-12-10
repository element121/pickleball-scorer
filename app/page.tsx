"use client";

import React, { useState } from "react";
import { PickleballGame } from "./PickleballGame";

const PickleballScorer = () => {
  const game = React.useMemo(() => new PickleballGame(), []);

  const [score, setScore] = useState(() => game.getScore());
  const [result, setResult] = useState(() => game.getResults());

  const handleScorePoint = () => {
    game.scorePoint();
    setScore(game.getScore());
    setResult(game.getResults());
  };

  const handleResetPoint = () => {
    game.resetPoint();
    setScore(game.getScore());
  };

  const handleResetGame = () => {
    if (window.confirm("Are you sure you want to reset the game?")) {
      game.resetGame();
      setScore(game.getScore());
      setResult(game.getResults());
    }
  };

  const handleSwitchServer = () => {
    game.switchServer();
    setScore(game.getScore());
  };

  const player1Server = game.currentServer === "Player 1" ? "*" : "";
  const player2Server = game.currentServer === "Player 2" ? "*" : "";

  const Button = ({
    onClick,
    children,
  }: {
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <button
      onClick={onClick}
      className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    >
      {children}
    </button>
  );

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p>
          Player 1{player1Server}: {score[0].player1Score}
        </p>
        <p>
          Player 2{player2Server}: {score[0].player2Score}
        </p>
        <p>{result}</p>
        <Button onClick={handleScorePoint}>Score point +</Button>
        <Button onClick={handleResetPoint}>Undo point -</Button>
        <Button onClick={handleSwitchServer}>Switch Server</Button>
        <Button onClick={handleResetGame}>Reset Game</Button>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>version v0.0.1</p>
      </footer>
    </div>
  );
};

export default PickleballScorer;
