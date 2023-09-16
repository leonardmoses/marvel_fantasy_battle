import { useState } from "react";

const TeamASelect = ({ powergrid, teamAName, setTeamAName, newName, setNewName , teamA , setTeamA }) => {

  function addNameToTeamA(e) {
    e.preventDefault();
    setTeamAName((currentName) => {
      return [...currentName, { name: newName }];
    });
  }

  function onOptionChange(e) {
    setNewName(e.target.value);
    // console.log(e.target.value);
  }

  function setTeamAStats(e) {
    // e.preventDefault();
    const stats = []
    // const removeDuplicates = [...new Set(teamAStats)]
    //loops through active roster
    for (let i = 0; i < teamAName.length; i++) {
      //loops through powergrid database for every member of active roster
      for (let j = 0; j < powergrid.length; j++) {
        //runs if the active roster member matches with powergrid database
        if (teamAName[i].name === powergrid[j].name) {
          stats.push(powergrid[j]);
        }
      }
    }
    setTeamA(stats)
  }

  return (
    <>
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
            // value={newName}
            onChange={onOptionChange}
            className="w-11/12 place-self-center text-center my-3 p-0.5 rounded-md bg-ThemeWhite"
          >
            {powergrid.map((character) => {
              return (
                <option
                  key={character.id}
                  value={character.name}
                  data-mele_effectiveness={character.mele_effectiveness}
                  data-projectile_effectiveness={
                    character.projectile_effectiveness
                  }
                >
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

      <button
        onClick={setTeamAStats}
        className="bg-ThemeA1 text-ThemeWhite2 rounded-md mt-2 py-1 px-2 w-full place-self-center hover:bg-MarvelRed"
      >
        Confirm Team
      </button>
    </>
  );
};

export default TeamASelect;
