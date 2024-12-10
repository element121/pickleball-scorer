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
    className,
  }: {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
  }) => (
    <button
      onClick={onClick}
      className={`rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center text-white text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 ${className}`}
    >
      {children}
    </button>
  );

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-8 items-center sm:items-start">
        <div className="flex space-x-2">
          <Button
            onClick={handleScorePoint}
            className="bg-green-500 hover:bg-green-600"
          >
            Point +
          </Button>
          <Button
            onClick={handleResetPoint}
            className="bg-red-500 hover:bg-red-600"
          >
            Point -
          </Button>
          <Button
            onClick={handleSwitchServer}
            className="bg-gray-500 hover:bg-gray-600"
          >
            Switch Server
          </Button>
          <Button
            onClick={handleResetGame}
            className="bg-orange-500 hover:bg-orange-600"
          >
            Reset Game
          </Button>
        </div>
        <div className="text-center sm:text-left">
          <div className="mb-2">
            <span className="font-bold">Player 1{player1Server}:</span>{" "}
            {score[0].player1Score}
          </div>
          <div className="mb-2">
            <span className="font-bold">Player 2{player2Server}:</span>{" "}
            {score[0].player2Score}
          </div>
          <div className="mt-4 text-lg font-semibold">{result}</div>
        </div>
      </div>
    </div>
  );
};

export default PickleballScorer;
