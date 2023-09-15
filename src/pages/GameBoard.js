import { powergrid } from "../data/powergrid";

const GameBoard = () => {
  return (
    <div className="m-5 bg-gradient-to-b from-Secondary to-white rounded-lg p-5">
      <h2 className="text-5xl font-bold">Game Board</h2>
      <div className="bg-white rounded-lg w-1/2 ">
        <form className="mt-5 flex flex-col py-5 border-solid border border-purple-300 rounded-lg">
          <label htmlFor="character">
            <h4 className="text-2xl text-center text-Secondary">Choose Character</h4>
          </label>
          <input
            type="text"
            id="character"
            placeholder="Name"
            className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    invalid:border-pink-500 invalid:text-pink-600
    focus:invalid:border-pink-500 focus:invalid:ring-pink-500 w-11/12 place-self-center"
          />
          <button className="bg-Secondary text-MarvelRed rounded-md mt-2 py-1 px-2 w-11/12 place-self-center">
            Add Character
          </button>
        </form>
      </div>
    </div>
  );
};

export default GameBoard;
