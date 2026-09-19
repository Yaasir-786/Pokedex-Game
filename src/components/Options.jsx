import React, { useContext, useEffect, useState } from "react";
import PokeContext from "../context/PokeContext";
import { fetchPokemon } from "../context/PokeService";

const Options = () => {
  const { pokemon, dispatch, life, score } = useContext(PokeContext);

  const checkAnswer = (answer) => {
    if (answer === pokemon.name) {
      dispatch({
        type: "INCREASE_SCORE",
      });
    } else {
      dispatch({
        type: "DECREASE_SCORE",
      });
    }
  };

  const reloadGame = () => {
    window.location.href = "/";
  };

  if (life === 0) {
    return (
      <div className="p-4 mx-10 space-y-6">
        <h1 className="font-bold text-2xl text-center text-red-500">
          You Loose The Game!
        </h1>
        <button
          onClick={reloadGame}
          className="bg-[#DC0A2D] p-4 w-full text-xl font-bold rounded-lg hover:bg-[#006780] cursor-pointer duration-500 hover:text-white">
          Play Again
        </button>
      </div>
    );
  }

  if (score >= 1000) {
    return (
      <div className="p-4 mx-10 space-y-6">
        <h1 className="font-bold text-2xl text-center text-green-500">
          You Won The Game!
        </h1>
        <button
          onClick={reloadGame}
          className="bg-emerald-400 p-4 w-full text-xl font-bold rounded-lg hover:bg-emerald-600 cursor-pointer duration-500 hover:text-white">
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="px-10 py-4 grid grid-cols-2 gap-4">
      {pokemon.options?.map((option) => {
        return (
          <button
            onClick={() => checkAnswer(option)}
            key={option}
            className="bg-[#e5e2e1] p-4 text-xl font-bold rounded-lg hover:bg-[#006780] cursor-pointer duration-500 hover:text-white hover:scale-105 active:translate-y-1">
            {option.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default Options;
