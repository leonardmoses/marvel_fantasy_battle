import { useState } from "react";
import StageBeach from "./StageBeach";
import StageDefault from "./StageDefault";
import StageClassRoom from "./StageClassRoom";
import StageDesert from "./StageDesert";

const StageComponents = ({ teamA }) => {
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
        setStageClassRoomVisible(true);
        setStageDefaultVisible(false);
        setStageBeachVisible(false);
        console.log("we are in class room");
        break;
      case "Beach":
        setStageBeachVisible(true);
        setStageDefaultVisible(false);
        setStageClassRoomVisible(false);
        console.log("we are in beach");
        break;
    case "Desert":
        setStageDesertVisible(true)
        setStageDefaultVisible(false)
        setStageClassRoomVisible(false)
        setStageBeachVisible(false)
        console.log("we are in desert");
        break;
      default:
        console.log("we are in default");
    }
  }

  return (
    <>
      <div>
        <h1>Hello</h1>
      </div>

      <div>
        <select value={stage} onChange={stageSelectHandler}>
          <option value="select stage">---</option>
          <option value="Class Room">Class Room</option>
          <option value="Beach">Beach</option>
          <option value="Desert">Desert</option>
        </select>
      </div>
      {stageDefaultVisible ? <StageDefault /> : null}
      {stageClassRoomVisible ? <StageClassRoom /> : null}
      {stageBeachVisible ? <StageBeach /> : null}
      {stageDesertVisible ? <StageDesert /> : null}
      
    </>
  );
};

export default StageComponents;
