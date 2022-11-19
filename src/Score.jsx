function Score ({scores}) {
    const score = scores.map((score, i) => {
        return (
            <>
            <h3>Scores</h3>
        <p key={`${score.date}-${i}`}>Dates: {score.date}</p>
        <p key={`${score.score}-${i}`}> Scores: {score.score}</p>
        </>
        )
    }) 
    return (
        <>
        {score}
        </>
    )
}

export default Score