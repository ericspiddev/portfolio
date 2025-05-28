import {useEffect} from "react";

function handleTechMouseEnter(setState) {
    setState(true);
}
function handleTechMouseLeave(setState) {
    setState(false);
}

const highlightTimeSecs = 5;


export function PortTechSelector({state, setState, selectorText}) {
    useEffect(() => {
      const highlightTime = setInterval(() => {
        setState(false);
      }, highlightTimeSecs * 1000); // let banner linger for 3s before clearing
        return () => clearInterval(highlightTime);
    }, [state]);
    return(
        <button
            onMouseEnter={() => handleTechMouseEnter(setState)}
            onMouseLeave={() => handleTechMouseLeave(setState)}
            onClick={() => setState(true)}
            class="tech-selector">{selectorText}</button>
    );
}
