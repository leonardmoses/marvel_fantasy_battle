import { useState } from "react";
import { powergrid } from "../data/powergrid";
import TeamA from "../components/TeamA";
import Modifiers from "../components/modifiers/Modifiers";

const GameBoard = () => {
  const [teamA, setTeamA] = useState([]);
  const [teamALeader, setTeamALeader] = useState("");
  const [teamAStageStats, setTeamAStageStats] = useState([]);
  const [teamAScore, setTeamAScore] = useState(0)

  // let teamAScore = 0


  function characterOptionSelection(character) {
    // console.log(character)
  }

  return (
    <div className="m-5 bg-ThemeWhite border-solid border-2 border-white rounded-lg p-5">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-white">Game Board</h2>
        <Modifiers
          teamA={teamA}
          teamAStageStats={teamAStageStats}
          setTeamAStageStats={setTeamAStageStats}
          characterOptionSelection={characterOptionSelection}
        />
      </div>

      <div className="rounded-lg lg:w-1/2 md:w-full">
        <TeamA
          powergrid={powergrid}
          teamA={teamA}
          setTeamA={setTeamA}
          teamAScore={teamAScore}
          setTeamAScore={setTeamAScore}
          teamALeader={teamALeader}
          setTeamALeader={setTeamALeader}
          teamAStageStats={teamAStageStats}
          setTeamAStageStats={setTeamAStageStats}
          characterOptionSelection={characterOptionSelection}
        />
      </div>
    </div>
  );
};

export default GameBoard;
