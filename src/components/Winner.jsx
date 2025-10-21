export default function Winner({func}) {
    return (
        <>
            <button onClick={func}>Restart</button><h1>You Win</h1>
        </>
    )
}