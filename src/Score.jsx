function Score ({scores}) {
    const score = scores.map((score, i) => {
        return (
            <>
            <h3>Scores</h3>
        <p key={`${score.date}-${i}`}>Date: {score.date}</p>
        <p key={`${score.score}-${i}`}> Score: {score.score}</p>
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