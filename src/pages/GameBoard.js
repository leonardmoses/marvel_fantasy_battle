import { useState } from "react";
import { powergrid } from "../data/powergrid";
import TeamASelect from "../components/TeamASelect";
import TeamARoster from "../components/TeamARoster";
import TeamAEvaluation from "../components/TeamAEvaluation";
import StageComponents from "../components/stages/StageComponents";

const GameBoard = () => {
  const [newName, setNewName] = useState("");
  const [teamAName, setTeamAName] = useState([]);
  
  const [teamA, setTeamA] = useState([]);

  const [teamAStageStats, setTeamAStageStats] = useState(teamA);
  const [teamALeader, setTeamALeader] = useState("");

  console.log(teamA)

  function removeTeamMember() {

  }
  
  return (
    <div className="m-5 bg-ThemeWhite border-solid border-2 border-white rounded-lg p-5">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-white">Game Board</h2>
        <StageComponents
          teamA={teamA}
          teamAStageStats={teamAStageStats}
          setTeamAStageStats={setTeamAStageStats}
        />
      </div>

      <div className="">
        <div className="rounded-lg lg:w-1/2 md:w-full">
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

          <TeamAEvaluation
            teamA={teamA}
            teamALeader={teamALeader}
            setTeamALeader={setTeamALeader}
            teamAStageStats={teamAStageStats}
            removeTeamMember={removeTeamMember}
          />

          <button
            onClick={(e) => console.log(teamA)}
            className="bg-slate-100 rounded-md mt-5 p-1"
          >
            Console Log TeamAName
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
