
const StageClassRoom = ({teamA}) => {
    // console.log(teamA)

    // // How the stage modifies the individual stats. All values should add up to 1.0
    // const stageModifier = {
    //     mele_effectiveness: 0.25,
    //     projectile_effectiveness: 0.25,
    //     durability: 0.25,
    //     flight_speed: 0.25
    // }

    // // Create a copy of all the team stats for the stage
    // const teamAStage = []
    // // Creates an actual copy instead of reference in memory
    // teamA.forEach(teamAMember => {
    //     let copy = Object.assign({} , teamAMember)
    //     teamAStage.push(copy)
    // });

    // // Executing the Stage modifications
    // teamAStage.forEach(teamAMember => {
    //     teamAMember.mele_effectiveness = teamAMember.mele_effectiveness * stageModifier.mele_effectiveness
    //     teamAMember.projectile_effectiveness = teamAMember.projectile_effectiveness * stageModifier.projectile_effectiveness
    //     teamAMember.durability = teamAMember.durability * stageModifier.durability
    //     teamAMember.flight_speed = teamAMember.flight_speed * stageModifier.flight_speed

    // });


    // console.log(teamAStage)

    return ( 
        <>
            <h1>ClassRoom Rendered</h1>
        </>
     );
}

export default StageClassRoom;