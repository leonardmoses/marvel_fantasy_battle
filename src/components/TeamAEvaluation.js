import TeamAMod from "./modifiers/team-modifiers/TeamAMod";

const TeamAEvaluation = ({ teamA , setTeamA , teamAScore , setTeamAScore , teamALeader, setTeamALeader , teamAStageStats }) => {

  function removeFromTeam(e) {
    setTeamA((intendedChar) => {
      return intendedChar.filter((x) => x.name !== e.name)
    }) 
  }

  return (
    <div className="bg-white text-sm w-full">

      <div className="bg-Secondary px-3 py-3 rounded-lg text-white">
        <h3 className="text-center text-xl">Team A Roster</h3>
        <h4 className="text-center text-md">Character Raw Stats</h4>

        <table className="text-center w-full flex justify-center items-center mt-3">
          <thead className="">
            <tr className="font-medium ">
              <td></td>
              <th className="border-white border-b border-solid text-left w-screen">Name</th>
              <th className="border-white border-b border-solid w-screen ">Mele</th>
              <th className="border-white border-b border-solid w-screen">Projectile</th>
              <th className="border-white border-b border-solid w-screen">Durability</th>
              <th className="border-white border-b border-solid w-screen">Flight</th>
            </tr>
          {teamA.map((x ,idx) => (
            <tr key={idx} className="font-light ">
              <td className="py-1"><button onClick={() => removeFromTeam(x)} className="bg-ThemeWhite rounded-md font-xl py-0 px-1.5 mr-3 text-MarvelBlack hover:bg-MarvelRed hover:text-ThemeWhite hover:animate-grow">x</button></td>
              <th className="mr-0 text-left border-b border-solid border-white">{x.name}</th>
              <td className="border-b border-solid border-white">{x.mele_effectiveness}</td>
              <td className="border-b border-solid border-white">{x.projectile_effectiveness}</td>
              <td className="border-b border-solid border-white">{x.durability}</td>
              <td className="border-b border-solid border-white">{x.flight_speed}</td>
            </tr>
          ))}  
          </thead>
        </table>

      </div>

      {teamAStageStats.length > 0 ? 
        <TeamAMod 
        teamA={teamA}
        teamAScore={teamAScore}
        setTeamAScore={setTeamAScore}
        teamAStageStats={teamAStageStats} 
        /> 
      : console.log()}

    </div>
  );
};

export default TeamAEvaluation;
