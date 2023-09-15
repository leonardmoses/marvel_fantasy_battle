const TeamASelect = ({ powergrid, setTeam1 , newName, setNewName }) => {

  function addNameToTeamA(e) {
    e.preventDefault();
    setTeam1((currentName) => {
      return [...currentName, { name: newName }];
    });
  }

  return (
    <div>
      <form
        onSubmit={addNameToTeamA}
        className="mt-5 flex flex-col py-5 border-solid border border-purple-300 rounded-lg bg-white"
      >
        <label htmlFor="character">
          <h4 className="text-2xl text-center text-Secondary">Team A</h4>
        </label>
        <div className="flex flex-col">
          <select
            id="character"
            value={newName}
            placeholder={"Default"}
            onChange={(e) => setNewName(e.target.value)}
            className="w-11/12 place-self-center text-center my-3 p-0.5 rounded-md bg-ThemeWhite"
          >
            {powergrid.map((character) => {
              return (
                <option key={character.id} value={character.name}>
                  {character.name}
                </option>
              );
            })}
          </select>
        </div>
        <button className="bg-Secondary text-ThemeWhite2 rounded-md mt-2 py-1 px-2 w-11/12 place-self-center hover:bg-MarvelRed">
          Add Character
        </button>
      </form>
    </div>
  );
};

export default TeamASelect;
