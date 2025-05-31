export function PortProjectResult({results}) {
    return (
        <div>
            <ul className="project-result-list">

            {
                results.map((result) => (
                    <li className="result"> {result} </li>
                ))
            }
            </ul>
        </div>
    );
}
