import { useState } from "react";
import { powergrid } from "../data/powergrid";
import TeamASelect from "../components/TeamASelect";
import TeamARoster from "../components/TeamARoster";

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
    console.log(team1);
  }

  return (
    <div className="m-5 bg-ThemeWhite border-solid border-2 border-white rounded-lg p-5">
      <h2 className="text-5xl font-bold text-white">Game Board</h2>
      <div className="rounded-lg w-1/2">
        <TeamASelect
          powergrid={powergrid}
          addNameToTeamA={addNameToTeamA}
          newName={newName}
          setNewName={setNewName}
        />

        <TeamARoster team1={team1} deleteName={deleteName} />

        <button
          onClick={checkCurrentTeam1}
          className="bg-slate-100 rounded-md mt-5 p-1"
        >
          Console Log Team1
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
