export function PortProjectResult({results}) {
    return (
        <div>
            <ul className="project-result-list">

            {
                results.map((result) => (
                    <li className="result" key={result}> {result} </li>
                ))
            }
            </ul>
        </div>
    );
}
