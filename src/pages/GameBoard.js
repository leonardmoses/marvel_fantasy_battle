import { useState } from "react";
import { powergrid } from "../data/powergrid";
import TeamA from "../components/TeamA";
import StageComponents from "../components/stages/StageComponents";

const GameBoard = () => {
  const [teamA, setTeamA] = useState([]);
  const [teamAStageStats, setTeamAStageStats] = useState(teamA);
  const [teamALeader, setTeamALeader] = useState("");

  // console.log(teamA);

  function removeTeamMember() {}

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

      <div className="rounded-lg lg:w-1/2 md:w-full">
        <TeamA
          powergrid={powergrid}
          teamA={teamA}
          setTeamA={setTeamA}
          teamALeader={teamALeader}
          setTeamALeader={setTeamALeader}
          teamAStageStats={teamAStageStats}
          setTeamAStageStats={setTeamAStageStats}
          removeTeamMember={removeTeamMember}
        />
      </div>
    </div>
  );
};

export default GameBoard;
