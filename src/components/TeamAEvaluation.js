
const TeamAEvaluation = ({ teamA , teamALeader, setTeamALeader , teamAStageStats }) => {

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

  return (
    <div className="bg-white text-sm w-full mt-5 rounded-lg border border-purple-300 border-solid p-5">
        <h3 className="text-sm">Team Leader: {teamALeader}</h3>
        <h3 className="mt-3">Raw Team Stats</h3>
      <table className="text-center w-full">
        <thead>
            <tr className="font-medium border border-solid border-black">
                <th className="border border-solid border-black px-10">Name</th>
                <th className="border border-solid border-black px-5 ">Mele</th>
                <th className="border border-solid border-black px-5">Projectile</th>
                <th className="border border-solid border-black px-5">Durability</th>
                <th className="border border-solid border-black px-5">Flight</th>
            </tr>
        {teamA.map((x) => (
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

      <button
      onClick={leaderSelected}
      className="bg-slate-100 rounded-md mt-5 p-1"
    >
      who is leader
    </button>
    </div>
  );
};

export default TeamAEvaluation;
