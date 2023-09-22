
const TeamAEvaluation = ({ teamA , setTeamA , teamALeader, setTeamALeader , teamAStageStats }) => {

    function leaderSelected() {
        let leaders =  []
        for (let i=0; i<teamA.length ; i ++) {
            leaders.push(teamA[i].leadership_influence)
        }
        for (let i=0 ; i<teamA.length; i++) {
            if (teamA[i].leadership_influence === Math.max(...leaders)) {
                setTeamALeader(teamA[i].name)
            }
        }
    }

    function removeFromTeam(e) {
      setTeamA((intendedChar) => {
        return intendedChar.filter((x) => x.name !== e.name)
      }) 
      
    }

  return (
    <div className="bg-white text-sm w-full p-5">
      <button
        onClick={leaderSelected}
        className="bg-slate-100 rounded-md mt-5 p-1"
      >
        Set Team Leader
      </button>

      <h3 className="text-sm">Team Leader: {teamALeader}</h3>
      

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

        <div className="bg-ThemeWhite border-Secondary border border-solid px-3 py-3 mt-5 rounded-lg text-Secondary">
        <h3 className="text-center">Stats Affected by Modifiers</h3>

        <table className="text-center w-full flex justify-center items-center mt-3">
          <thead className="">
            <tr className="font-medium ">
              <td></td>
              <th className="border-Secondary border-b border-solid text-left w-screen">Name</th>
              <th className="border-Secondary border-b border-solid w-screen ">Mele</th>
              <th className="border-Secondary border-b border-solid w-screen">Projectile</th>
              <th className="border-Secondary border-b border-solid w-screen">Durability</th>
              <th className="border-Secondary border-b border-solid w-screen">Flight</th>
            </tr>
          {teamAStageStats.map((x, idx) => (
            <tr key={idx} className="font-light ">
              <td className="py-1"></td>
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
      : console.log()}

    </div>
  );
};

export default TeamAEvaluation;
