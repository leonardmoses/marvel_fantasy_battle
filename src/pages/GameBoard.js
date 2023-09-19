import { useState } from "react";
import { powergrid } from "../data/powergrid";
import TeamASelect from "../components/TeamASelect";
import TeamARoster from "../components/TeamARoster";
import TeamAEvaluation from "../components/TeamAEvaluation";
import StageComponents from "../components/stages/StageComponents";

const GameBoard = () => {
  const [newName, setNewName] = useState("");
  const [teamAName, setTeamAName] = useState([]);
  const [teamA, setTeamA] = useState([])
  const [teamALeader , setTeamALeader] = useState('')


  return (
    <div className="m-5 bg-ThemeWhite border-solid border-2 border-white rounded-lg p-5">
      <h2 className="text-5xl font-bold text-white">Game Board</h2>
      <div className="rounded-lg w-1/2">
        <TeamASelect
          powergrid={powergrid}
          teamAName={teamAName}
          setTeamAName={setTeamAName}
          newName={newName}
          setNewName={setNewName}
          teamA={teamA}
          setTeamA={setTeamA}
        />

        <TeamARoster teamAName={teamAName} setTeamAName={setTeamAName} />

        <TeamAEvaluation teamA={teamA} teamALeader={teamALeader} setTeamALeader={setTeamALeader}/>
        <StageComponents teamA={teamA}/>
        <button
          onClick={e => console.log(teamA)}
          className="bg-slate-100 rounded-md mt-5 p-1"
        >
          Console Log TeamAName
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
