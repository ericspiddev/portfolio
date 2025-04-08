export function PortProjectResult({results}) {
    return (
        <div>
            <ul class="project-result-list">

            {
                results.map((result) => (
                    <li className="result"> {result} </li>
                ))
            }
            </ul>
        </div>
    );
}
