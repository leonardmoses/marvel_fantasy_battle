
const TeamAEvaluation = ({ teamA , teamALeader, setTeamALeader}) => {

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
    <div>
        <h3>Team Leader: {teamALeader}</h3>
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Mele Effectiveness</th>
                <th>Projectile Effectiveness</th>
                <th>Durability</th>
                <th>Flight Speed</th>
            </tr>
        {teamA.map((x) => (
            <tr key={x.id}>
                <th>{x.name}</th>
                <td>{x.mele_effectiveness}</td>
                <td>{x.projectile_effectiveness}</td>
                <td>{x.durability}</td>
                <td>{x.flight_speed}</td>
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
