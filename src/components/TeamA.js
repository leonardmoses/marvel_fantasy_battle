import TeamAEvaluation from "./TeamAEvaluation";
const TeamA = ({ powergrid, teamAStageStats, setTeamAStageStats, teamALeader, setTeamALeader , teamA , setTeamA , removeTeamMember }) => {


  function onOptionChange(e) {
    // setNewName(e.target.value);
    const teamMemberName = e.target.value;
    //goes through array and filters out everything else that doesn't pass the test. RETURNS AN ARRAY of one object! That's why using [0]
    const teamMember = powergrid.filter(
      (character, index) => character.name === teamMemberName
    )[0];
    //Takes an array and destructures the array.
    setTeamA([...teamA, teamMember]);
  }


  return (
    <div className="border-purple-300 rounded-lg bg-white py-5 border-solid border">
      <form className="mt-5 flex flex-col ">
        <label htmlFor="character">
          <h4 className="text-2xl text-center text-Secondary">Team A</h4>
        </label>

        <div className="flex flex-col">
          <select
            id="character"
            // value={newName}
            onChange={onOptionChange}
            className="w-11/12 place-self-center text-center my-3 p-0.5 rounded-md bg-ThemeWhite">
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

      <TeamAEvaluation
        teamA={teamA}
        setTeamA={setTeamA}
        teamALeader={teamALeader}
        setTeamALeader={setTeamALeader}
        teamAStageStats={teamAStageStats}
        removeTeamMember={removeTeamMember}
      />
    </div>
  );
};

export default TeamA;
