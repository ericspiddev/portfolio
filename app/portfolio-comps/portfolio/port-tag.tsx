

export function PortTag({tagColor, tagText}) {
    return (
        <div className="port-project-tag hidden"style={{backgroundColor: tagColor}}>
            <p>{tagText}</p>
        </div>
    );
}
