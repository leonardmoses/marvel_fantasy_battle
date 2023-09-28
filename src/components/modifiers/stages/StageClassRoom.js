import { useEffect } from "react"

const StageClassRoom = ({teamA , teamAStageStats, setTeamAStageStats , characterOptionSelection }) => {
    console.log(teamA)
    console.log(teamAStageStats)


    //Start of UseEffect
    //This useEffect has an emtpy array. Will only run the code once. But once for everytime the component renders. (Everytime the component is selected in the dropbdown)
    useEffect(() => {


    // How the stage modifies the individual stats. All values should add up to 1.0
    const stageModifier = {
        mele_effectiveness: 0.25,
        projectile_effectiveness: 0.25,
        durability: 0.25,
        flight_speed: 0.25
    }

    // Create a copy of all the team stats for the stage
    const teamAStage = []
    // Creates an actual copy instead of reference in memory
    teamA.forEach(teamAMember => {
        let copy = Object.assign({} , teamAMember)
        teamAStage.push(copy)
    });

    // Executing the Stage modifications
    teamAStage.forEach(teamAMember => {
        parseInt(teamAMember.mele_effectiveness = parseFloat(teamAMember.mele_effectiveness * stageModifier.mele_effectiveness)).toFixed(1)
        parseInt(teamAMember.projectile_effectiveness = parseFloat(teamAMember.projectile_effectiveness * stageModifier.projectile_effectiveness)).toFixed(1)
        parseInt(teamAMember.durability = parseFloat(teamAMember.durability * stageModifier.durability)).toFixed(1)
        parseInt(teamAMember.flight_speed = parseFloat(teamAMember.flight_speed * stageModifier.flight_speed)).toFixed(1)
    });
    // console.log(teamAStage)
    setTeamAStageStats(teamAStage)

    //End of the use Effect.
    }, [])
    return ( 
        <>
            <h1>ClassRoom Rendered</h1>
        </>
     );
}

export default StageClassRoom;