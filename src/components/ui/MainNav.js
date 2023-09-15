import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <div className=" flex flex-wrap border-MarvelBlack border-solid border-b">
      <div className="w-screen my-5">
        <div className="flex justify-center ">
          <Link to="/">
            <h1 className="bg-MarvelRed text-white text-6xl text-center max-w-fit">
              MARVEL
            </h1>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link to="/">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-Secondary to-MarvelRed text-4xl text-center">
              Fantasy Battle
            </h2>
          </Link>
        </div>
      </div>

      <ul className="text-Secondary w-screen flex flex-wrap justify-between">
        <li className="ml-5 mr-10 hover:text-MarvelRed">
          <Link to="/instructions">Game Instructions</Link>
        </li>
        <li className="ml-10 mr-5 hover:text-MarvelRed">
          <Link to="/gameboard">Game Board</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainNav;
