import { useState } from "react";
import ClassRoom from "./ClassRoom";
import StageBeach from "./StageBeach";

const StageComponents = ({ teamA }) => {

  const [stage, setStage] = useState("select the stage");
  const [classroomVisible , setClassroomVisible] = useState(false);
  const [stagebeachVisible , setStageBeachVisible] = useState(false);

  function handleOnChange(e) {
    setStage(e.target.value);
  }

  function makeFirstLetterCapital(str) {
     return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function renderResult() {
    let result;
    stage === "selectStage"
      ? (result = "select the stage")
      : (result = makeFirstLetterCapital(stage));
    return result;
  };

  return (
    <>
      <div>
        <h1>Hello {renderResult()}</h1>
      </div>

      <div>
        <select value={stage} onChange={handleOnChange}>
          <option value="class room">ClassRoom</option>
          <option value="stage beach">StageBeach</option>
        </select>
      </div>
    </>
  );
};

export default StageComponents;
