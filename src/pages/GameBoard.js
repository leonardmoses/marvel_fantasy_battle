import { powergrid } from "../data/powergrid";

const GameBoard = () => {
  return (
    <div className="m-5">
      <h2 className="text-5xl font-bold">Game Board</h2>
      <form className="mt-5">
        <label><h4 className="text-2xl">Choose Character</h4></label>
        <input
          type="text"
          placeholder="Name"
          className="mt-1 block w-1/3 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
      </form>
    </div>
  );
};

export default GameBoard;
