import {PortTag} from "./port-tag";
import {useState} from "react";

export function PortCard({projectImage, projectTitle, showProject, clickHandle}) {
    const [tab, setTab] = useState('About');
    return (
    <div className={`port-project-card ${showProject ? '' : 'hidden'}`} onClick={() => clickHandle(projectTitle)}>
        <img class="project-card-image" src={projectImage}/>
        <div class="project-card-body">
            <h1 class="project-card-title"> {projectTitle} </h1>
        </div>
        <div class="project-card-footer">
            <PortTag tagText="Embed" tagColor="green"/>
            <PortTag tagText="Web" tagColor="blue"/>
            <PortTag tagText="tag" tagColor="red"/>
        </div>
    </div>
    );
}
