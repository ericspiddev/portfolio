

function handleTechMouseEnter(setState) {
    setState(true);
}
function handleTechMouseLeave(setState) {
    setState(false);
}

export function PortTechSelector({state, setState, selectorText})  {
    return(
        <button 
            onMouseEnter={() => handleTechMouseEnter(setState)} 
            onMouseLeave={() => handleTechMouseLeave(setState)}
            class="tech-selector">{selectorText}</button>
    );
}
