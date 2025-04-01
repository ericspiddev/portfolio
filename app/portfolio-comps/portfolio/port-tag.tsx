

export function PortTag({tagColor, tagText}) {
    return (
        <div class="port-project-tag hidden"style={{backgroundColor: tagColor}}>
            <p>{tagText}</p>
        </div>
    );
}
