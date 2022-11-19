import Score from './Score'

function Student ({student}) {
    return (
        <>
        <h1>{student.name}</h1>
        <h2>Bio:</h2>
        <p>{student.bio}</p>
        <Score scores={student.scores} />
        </>
    )
}

export default Student