import { useState } from "react";
import { powergrid } from "../data/powergrid";

const GameBoard = () => {
  const [newName, setNewName] = useState("");
  const [team1, setTeam1] = useState([]);

  function addNameToTeamA(e) {
    e.preventDefault();
    setTeam1((currentName) => {
      return [...currentName, { name: newName }];
    });
  }

  function deleteName(name) {
    setTeam1((currentTeam) => {
      return currentTeam.filter((x) => x.name !== name);
    });
  }

  function checkCurrentTeam1() {
    console.log(team1)
  }

  console.log(newName);

  return (
    <div className="m-5 bg-ThemeWhite border-solid border-2 border-white rounded-lg p-5">
      <h2 className="text-5xl font-bold text-white">Game Board</h2>
      <div className="rounded-lg w-1/2">
        <form
          onSubmit={addNameToTeamA}
          className="mt-5 flex flex-col py-5 border-solid border border-purple-300 rounded-lg bg-white"
        >
          <label htmlFor="character">
            <h4 className="text-2xl text-center text-Secondary">Team A</h4>
          </label>
          <div className="flex flex-col">
            <select
              id="character"
              value={newName}
              placeholder={"Default"}
              onChange={(e) => setNewName(e.target.value)}
              className="w-11/12 place-self-center text-center my-3 rounded-md bg-ThemeWhite"
            >
              {powergrid.map((character) => {
                return (
                  <option key={character.id} value={character.name}>
                    {character.name}
                  </option>
                );
              })}
            </select>
          </div>
          <button className="bg-Secondary text-ThemeWhite2 rounded-md mt-2 py-1 px-2 w-11/12 place-self-center hover:bg-MarvelRed">
            Add Character
          </button>
        </form>

        <div className="text-ThemeWhite bg-Secondary p-5 mt-2 rounded-lg">
          <h3 className="mb-3 text-xl text-center border-b border-solid border-white pb-2">
            Active Roster
          </h3>
          <ul>
            {team1.map((x, idx) => {
              return (
                <li key={idx} className="mb-2">
                  <button
                    onClick={() => deleteName(x.name)}
                    className="bg-ThemeWhite border text-MarvelBlack rounded-xl px-1.5 hover:bg-white hover:animate-grow hover:text-MarvelBlack active:bg-ThemeB1 text-sm"
                  >
                    x
                  </button>
                  <label className="ml-3">{x.name}</label>
                </li>
              );
            })}
          </ul>
        </div>
        <button onClick={checkCurrentTeam1} className="bg-blue-400 rounded-md mt-5">Check Team1</button>
      </div>
    </div>
  );
};

export default GameBoard;
