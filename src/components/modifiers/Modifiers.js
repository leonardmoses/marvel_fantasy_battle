import StageComponents from "./stages/StageComponents";

const Modifiers = ({ teamA , teamAStageStats , setTeamAStageStats , characterOptionSelection }) => {
    return ( 
        <div>
            <StageComponents
            teamA={teamA}
            teamAStageStats={teamAStageStats}
            setTeamAStageStats={setTeamAStageStats}
            characterOptionSelection={characterOptionSelection}
          />
        </div>
     );
}
 
export default Modifiers;