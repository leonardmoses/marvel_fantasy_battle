import TeamAEvaluation from "./TeamAEvaluation";
import TeamALeader from "./modifiers/team-modifiers/TeamALeader";

const TeamA = ({ powergrid, teamAStageStats, setTeamAStageStats, teamALeader, setTeamALeader , teamA , setTeamA , characterOptionSelection , teamAScore , setTeamAScore }) => {

  function onOptionChange(e) {
    // setNewName(e.target.value);
    const teamMemberName = e.target.value;
    //goes through array and filters out everything else that doesn't pass the test. RETURNS AN ARRAY of one object! That's why using [0]
    const teamMember = powergrid.filter(
      (character, index) => character.name === teamMemberName
    )[0];
    //Takes an array and destructures the array.
    setTeamA([...teamA, teamMember]);
    characterOptionSelection(teamMember)
  }


  return (
    <div className="border-purple-300 rounded-lg bg-white py-5 border-solid border p-5">
      
      
      <form className="flex flex-col ">
        <label htmlFor="character">
          <h4 className="text-2xl text-center text-Secondary">Team A</h4>
        </label>

        <div className="flex flex-col">
          <select
            id="character"
            // value={newName}
            onChange={onOptionChange}
            className="w-full place-self-center text-center my-3 p-0.5 rounded-md bg-ThemeWhite">
            {powergrid.map((character) => {
              return (
                <option key={character.id} value={character.name}>
                  {character.name}
                </option>
              );
            })}
          </select>
        </div>
      </form>

      <TeamALeader teamA={teamA} setTeamALeader={setTeamALeader}/>
      
      <h3 className="text-sm">Team Leader: {teamALeader}</h3>

      <TeamAEvaluation
        teamA={teamA}
        setTeamA={setTeamA}
        teamAScore={teamAScore}
        setTeamAScore={setTeamAScore}
        teamALeader={teamALeader}
        setTeamALeader={setTeamALeader}
        teamAStageStats={teamAStageStats}
      />
    </div>
  );
};

export default TeamA;
