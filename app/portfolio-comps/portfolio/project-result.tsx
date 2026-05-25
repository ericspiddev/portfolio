export function PortProjectResult({results}) {
    return (
            <ul className="project-result-list">

            {
                results.map((result) => (
                    <li className="result" key={result}> {result} </li>
                ))
            }
            </ul>
    );
}
