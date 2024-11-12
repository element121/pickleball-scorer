"use client";
import React, { useState } from "react";
import { PickleballGame } from "./PickleballGame";

export default function Home() {
  const [game] = useState(new PickleballGame());
  const [score, setScore] = useState(game.getScore());
  const [result, setResult] = useState(game.getResults());

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
    game.resetGame();
    setScore(game.getScore());
    setResult(game.getResults());
  };

  const handleSwitchServer = () => {
    game.switchServer();
    setScore(game.getScore());
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Play Pickleball</h1>
        <p>Current Server: {game.currentServer}</p>
        <p>Player 1: {score[0].player1Score}</p>
        <p>Player 2: {score[0].player2Score}</p>
        <p>{result}</p>
        <button
          onClick={handleScorePoint}
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        >
          Score point +
        </button>
        <button
          onClick={handleResetPoint}
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        >
          Undo point -
        </button>
        <button
          onClick={handleSwitchServer}
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        >
          Switch Server
        </button>
        <button
          onClick={handleResetGame}
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
        >
          Reset Game - are you sure?
        </button>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>version v0.0.1</p>
      </footer>
    </div>
  );
}
