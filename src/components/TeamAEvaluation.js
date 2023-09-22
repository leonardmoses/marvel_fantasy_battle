
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
      console.log(e)
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
      <h3 className="mt-3">Raw Stats</h3>

      <table className="text-center w-full">
        <thead>
            <tr className="font-medium">
                <td></td>
                <th className="border border-solid border-black px-10">Name</th>
                <th className="border border-solid border-black px-5 ">Mele</th>
                <th className="border border-solid border-black px-5">Projectile</th>
                <th className="border border-solid border-black px-5">Durability</th>
                <th className="border border-solid border-black px-5">Flight</th>
            </tr>
        {teamA.map((x) => (
            <tr key={x.id} className="font-light">
                <td><button onClick={() => removeFromTeam(x)} className="bg-purple-800 rounded-xl font-xl py-0.5 px-2 text-white">x</button></td>
                <th className="mr-0 border border-solid border-black">{x.name}</th>
                <td className="border border-solid border-black">{x.mele_effectiveness}</td>
                <td className="border border-solid border-black">{x.projectile_effectiveness}</td>
                <td className="border border-solid border-black">{x.durability}</td>
                <td className="border border-solid border-black">{x.flight_speed}</td>
            </tr>
        ))}  
        </thead>
      </table>
   
        {teamAStageStats.length > 0 ? 
      <div>
          <h3 className="mt-3">Stats Affected by Stage</h3>
        <table className="text-center w-full">
          <thead>
            <tr className="font-medium border border-solid border-black">
              <th className="border border-solid border-black px-10">Name</th>
              <th className="border border-solid border-black px-5 ">Mele</th>
              <th className="border border-solid border-black px-5">Projectile</th>
              <th className="border border-solid border-black px-5">Durability</th>
              <th className="border border-solid border-black px-5">Flight</th>
            </tr>
          {teamAStageStats.map((x) => (
            <tr key={x.id} className="font-light border border-solid border-black">
              <th className="mr-0 border border-solid border-black">{x.name}</th>
              <td className="border border-solid border-black">{x.mele_effectiveness}</td>
              <td className="border border-solid border-black">{x.projectile_effectiveness}</td>
              <td className="border border-solid border-black">{x.durability}</td>
              <td className="border border-solid border-black">{x.flight_speed}</td>
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
