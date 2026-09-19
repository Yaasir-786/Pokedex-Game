import React, { useContext, useEffect } from "react";
import PokeContext from "../context/PokeContext";
import { fetchPokemon } from "../context/PokeService";

const GameScreen = () => {
  const { pokemon, dispatch, score, life, visibility } =
    useContext(PokeContext);

  const skipPokemon = async () => {
    const data = await fetchPokemon();
    dispatch({
      type: "SKIP_POKEMON",
      payload: data,
    });
  };

  const getPokemon = async () => {
    let data = await fetchPokemon();
    dispatch({
      type: "FETCH_POKEMON",
      payload: data,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      getPokemon();
    }, 1000);
  }, [score, life]);

  if (!pokemon.name) {
    return (
      <div className="p-2">
        <div className="p-2 mx-10 bg-white rounded-lg flex items-center justify-center">
          <img
            className="h-70 rounded-md"
            src="https://cdn.dribbble.com/userupload/42095390/file/original-eb0650febbf162e56e7eacfb6efe259b.gif"
            alt=""
          />
        </div>
      </div>
    );
  }

  if (score >= 1000) {
    return (
      <div className="relative py-3 px-10">
        <div className="p-2 bg-[#e5e2e1] rounded-lg flex items-center justify-center">
          <div className="border bg-[#51ADCC] p-4 h-76 w-76 rounded-full flex items-center justify-center">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07ba2f00-7724-405c-b082-d795efc00d81/d5ubqtp-17d0e378-e664-4113-866f-c843aa170995.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi8wN2JhMmYwMC03NzI0LTQwNWMtYjA4Mi1kNzk1ZWZjMDBkODEvZDV1YnF0cC0xN2QwZTM3OC1lNjY0LTQxMTMtODY2Zi1jODQzYWExNzA5OTUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tfC1ZlWrbq8pgJ11-3ntQAc3o6-l8rAqGcw3eTraRmE"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }

  if (life === 0) {
    return (
      <div className="relative py-3 px-10">
        <div className="p-2 bg-[#e5e2e1] rounded-lg flex items-center justify-center">
          <div className="border bg-black p-4 h-76 w-76 rounded-full flex items-center justify-center">
            <img
              className="h-50 rounded-full"
              src="https://media.tenor.com/lmA7VALYIAsAAAAM/sad-pikachu.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative py-3 px-10">
      <div className="absolute bottom-3 right-12 flex flex-col items-center justify-center">
        <button
          onClick={skipPokemon}
          className="bg-[#ba1a1a] border-2 border-red-800 p-2 h-18 w-18 rounded-full shadow-lg text-white font-bold active:translate-y-2 hover:cursor-pointer duration-500 ">
          Skip
        </button>
        <h1 className="text-sm font-bold">[-50 Score For Each Skip...]</h1>
      </div>

      <div className="p-2 bg-[#e5e2e1] rounded-lg flex items-center justify-center">
        <div className="border bg-[#51ADCC] p-4 h-76 w-76 rounded-full flex items-center justify-center">
          <img
            className={visibility ? "h-50 brightness-100" : "h-50 brightness-0"}
            src={pokemon.image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
