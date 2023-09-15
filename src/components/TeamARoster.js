const TeamARoster = ({team1 , deleteName}) => {
  return (
    <div className="text-ThemeWhite bg-Secondary p-5 mt-2 rounded-lg">
      <h3 className="mb-3 text-xl text-center border-b border-solid border-white pb-2">
        Active Roster
      </h3>
      <ul>
        {team1.map((x, idx) => {
          return (
            <li key={idx} className="mb-2">
              <button
                onClick={() => deleteName(x.name)}
                className="bg-ThemeWhite border text-MarvelBlack rounded-xl px-1.5 hover:bg-white hover:animate-grow hover:text-MarvelBlack active:bg-ThemeB1 text-sm"
              >
                x
              </button>
              <label className="ml-3">{x.name}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TeamARoster;
