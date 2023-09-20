import { useState } from "react";
import StageBeach from "./StageBeach";
import StageDefault from "./StageDefault";
import StageClassRoom from "./StageClassRoom";
import StageDesert from "./StageDesert";

const StageComponents = ({ teamA, teamAStageStats, setTeamAStageStats }) => {
  //   const [stage, setStage] = useState("no stage selected");
  let stage = "default";
  const [stageDefaultVisible, setStageDefaultVisible] = useState(true);
  const [stageClassRoomVisible, setStageClassRoomVisible] = useState(false);
  const [stageBeachVisible, setStageBeachVisible] = useState(false);
  const [stageDesertVisible, setStageDesertVisible] = useState(false);

  function stageSelectHandler(e) {
    // setStage(e.target.value);
    // console.log(e.target.value);
    stage = e.target.value;

    switch (stage) {
      case "Class Room":
        setStageDefaultVisible(false);
        setStageBeachVisible(false);
        setStageDesertVisible(false);
        setStageClassRoomVisible(true);
        console.log("we are in class room");
        break;
      case "Beach":
        setStageDefaultVisible(false);
        setStageClassRoomVisible(false);
        setStageDesertVisible(false);
        setStageBeachVisible(true);
        console.log("we are in beach");
        break;
      case "Desert":
        setStageDefaultVisible(false);
        setStageClassRoomVisible(false);
        setStageBeachVisible(false);
        setStageDesertVisible(true);
        console.log("we are in desert");
        break;
      default:
        console.log("we are in default");
        setStageClassRoomVisible(false);
        setStageBeachVisible(false);
        setStageDesertVisible(false);
        setStageDefaultVisible(true);
    }
  }

  return (
    <>
      <div className="text-xl">
        <h1>Select the Stage</h1>
      </div>

      <div className="">
        <select
          value={stage.innerText}
          onChange={stageSelectHandler}
          className="w-1/3 text-center"
        >
          <option value="select stage">---</option>
          <option value="Class Room">Class Room</option>
          <option value="Beach">Beach</option>
          <option value="Desert">Desert</option>
        </select>
      </div>
      {stageDefaultVisible ? <StageDefault /> : null}
      {stageClassRoomVisible ? (
        <StageClassRoom
          teamA={teamA}
          teamAStageStats={teamAStageStats}
          setTeamAStageStats={setTeamAStageStats}
        />
      ) : null}
      {stageBeachVisible ? <StageBeach /> : null}
      {stageDesertVisible ? <StageDesert /> : null}
    </>
  );
};

export default StageComponents;
