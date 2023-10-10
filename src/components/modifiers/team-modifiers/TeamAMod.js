import { useEffect } from "react";

const TeamAMod = ( {teamAStageStats , teamA , teamAScore , setTeamAScore } ) => {


    function setScore() {
        console.log(teamAStageStats)
        console.log(teamAScore)
        let score = []

        teamAStageStats.forEach(char => {
            let charScore =
            char.mele_effectiveness + 
            char.projectile_effectiveness + 
            char.durability +
            char.flight_speed;
            score.push(charScore)
        });
        // console.log(score)
        setTeamAScore(score.reduce((a,b) => a+b))
    }

    useEffect(() => {
        setScore()
    }, [teamAScore])

    return ( 
        <div>
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

            <button
                onClick={setScore}
                className="bg-slate-100 rounded-md mt-5 p-1 border-solid border-gray-400 border">
                Set Team A Score
          </button>
        </div>
     );
}
 
export default TeamAMod;