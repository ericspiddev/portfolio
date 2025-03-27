

export function PortTag({tagColor, tagText}) {
    return (
        <div class="port-project-tag"style={{backgroundColor: tagColor}}>
            <p>{tagText}</p>
        </div>
    );
}
