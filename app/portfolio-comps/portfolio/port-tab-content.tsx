import { portfolioTabTypes } from './port-portfolio';
import {PortCard} from "./port-card";
import {useState} from "react";
import {PortProjectModal} from "./port-project-modal";

export interface ModalProject
{
    title : string;
    desc : string;
};

export default function PortTabContent({tab})
{
    const [showModal, setShowModal] = useState(false);
    const [project, setProject] = useState("");

    function showProjectModal(projectTitle) {
        setShowModal(true);
        setProject(projectTitle);
    }

    function hideProjectModal() {
        setShowModal(false);
    }
    return(
    <>
        <div class="portfolio-tab-content">
            <h1> You selected tab {tabToStr(tab)}</h1>
            <div class="port-projects">
                <PortCard projectTitle="Lunar Logger "projectImage="images/projects/rocket.svg" 
                        showProject={tab==portfolioTabTypes.PERSONAL} clickHandle={showProjectModal}/>
                <PortCard projectTitle="Networked Coffee"projectImage="images/projects/coffee.svg" 
                        showProject={tab==portfolioTabTypes.PERSONAL} clickHandle={showProjectModal}/>
                <PortCard projectTitle="Car Dashboard" projectImage="images/projects/speedometer.svg"
                        showProject={tab==portfolioTabTypes.EDUCATIONAL} clickHandle={showProjectModal}/>
                <PortCard projectTitle="seL4 Doom Pendulum"projectImage="images/projects/video-games.svg"
                        showProject={tab==portfolioTabTypes.EDUCATIONAL} clickHandle={showProjectModal}/>
                <PortCard projectTitle="Magic Mirror"projectImage="images/projects/mirror.svg" 
                        showProject={tab==portfolioTabTypes.PERSONAL} clickHandle={showProjectModal}/>
                <PortCard projectTitle="Dexter Live"projectImage="images/projects/wifi.svg"
                        showProject={tab==portfolioTabTypes.PROFESSIONAL} clickHandle={showProjectModal}/>
                <PortCard projectTitle="Dexter Controls"projectImage="images/projects/laundry.svg"
                        showProject={tab==portfolioTabTypes.PROFESSIONAL} clickHandle={showProjectModal}/>
                <PortCard projectTitle="seL4 XHCI USB"projectImage="images/projects/usb.svg"
                        showProject={tab==portfolioTabTypes.PROFESSIONAL} clickHandle={showProjectModal}/>
            </div>
        </div>

        <PortProjectModal showModal={showModal} closeModal={hideProjectModal} projectTitle={project}/>
    </>
    );
}



function tabToStr(tab: portfolioTabTypes) {
    switch (tab)  {
        case portfolioTabTypes.EMBEDDED: {
            return "Embedded"
        } 
        case portfolioTabTypes.WEB:{
                return "WEB";
        }
    } 
}
