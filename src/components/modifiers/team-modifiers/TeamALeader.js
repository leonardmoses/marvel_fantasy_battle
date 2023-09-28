const TeamALeader = ({ teamA, setTeamALeader }) => {
    
  function leaderSelected() {
    let leaders = [];
    for (let i = 0; i < teamA.length; i++) {
      leaders.push(teamA[i].leadership_influence);
    }

    for (let i = 0; i < teamA.length; i++) {
      if (teamA[i].leadership_influence === Math.max(...leaders)) {
        setTeamALeader(teamA[i].name);
      }
    }
  }

  return (
    <div>
      <button
        onClick={leaderSelected}
        className="bg-slate-100 rounded-md mt-5 p-1">
        Set Team Leader
      </button>
    </div>
  );
};

export default TeamALeader;
