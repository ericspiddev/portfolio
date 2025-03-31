import {PortTag} from "./port-tag";
import {useState} from "react";
import {PortProjectModal} from "./port-project-modal";

export function PortCard({project, currentTab,}) {

    const [showModal, setShowModal] = useState(false);
    function showProjectModal() {
        document.body.style.overflow = "hidden";
        setShowModal(true);
    }

    function hideProjectModal() {
        document.body.style.overflow = "auto";
        setShowModal(false);
    }
    ;const [tab, setTab] = useState('About');
    return (
    <>
    <div className={`port-project-card ${project.projectType == currentTab ? '' : 'hidden'} clickable`} onClick={showProjectModal}>
        <img class="project-card-image" src={`images/projects/${project.projectImg}`}/>
        <div class="project-card-body">
            <h1 class="project-card-title"> {project.title} </h1>
        </div>
        <div class="project-card-footer">
            <PortTag tagText="Embed" tagColor="green"/>
            <PortTag tagText="Web" tagColor="blue"/>
            <PortTag tagText="tag" tagColor="red"/>
        </div>

    </div>
        <PortProjectModal project={project} showModal={showModal} closeModal={hideProjectModal}/>
    </>
    );
}
