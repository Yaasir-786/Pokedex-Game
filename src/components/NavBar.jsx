import { useContext } from "react";
import pokeball from "../assets/pokeball.png";
import PokeContext from "../context/PokeContext";

const NavBar = () => {
  const { score, life } = useContext(PokeContext);

  return (
    <nav className="bg-[#DC0A2D] py-2 px-8 flex items-center justify-between">
      <ul className="flex space-x-4">
        {life === 3 ? (
          <>
            <li>
              <img className="h-10" src={pokeball} alt="" />
            </li>
            <li>
              <img className="h-10" src={pokeball} alt="" />
            </li>
            <li>
              <img className="h-10" src={pokeball} alt="" />
            </li>
          </>
        ) : life === 2 ? (
          <>
            <li>
              <img className="h-10" src={pokeball} alt="" />
            </li>
            <li>
              <img className="h-10" src={pokeball} alt="" />
            </li>
          </>
        ) : life === 1 ? (
          <>
            <li>
              <img className="h-10" src={pokeball} alt="" />
            </li>
          </>
        ) : (
          <li className="flex space-x-4">
            <img className="h-10 brightness-0" src={pokeball} alt="" />
            <img className="h-10 brightness-0" src={pokeball} alt="" />
            <img className="h-10 brightness-0" src={pokeball} alt="" />
          </li>
        )}
      </ul>

      <h1 className="text-[#51ADCC] text-lg font-bold">Score:{score} </h1>
    </nav>
  );
};

export default NavBar;
