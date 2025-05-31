import {useState} from "react";
import {ProjModalTabs} from "./project-modal-tab";
import {ProjModalTabContent} from "./project-modal-tab-content";
import {PortProjectResult} from "./project-result";
import {PortModalVideo} from "./port-modal-video";

export function PortProjectModal({project, closeModal, showModal}){

    function setTabIndex(index) {
        setTab(index);
    }

    function closeModalAndResetTab() {
        setTab(0);
        closeModal();
    }

    function hasDemo(tabs) {
        return tabs[2].content != undefined;
    }

    const [tab, setTab] = useState(0);
    const tabs : TabObject[] = [
      {
        index: 0,
        title: "About",
        content: project.desc,
        isHidden: false
      },
      {
        index: 1,
        title: "Results",
        content: project.results == undefined ? ["tmp"] : project.results,
        isHidden: false
      },
      {
        index: 2,
        title: "Demo",
        content: project.demo,
        isHidden: false
      },
    ]
    return(
    <>
        <div className={`project-modal-overlay ${showModal ? '' : 'hidden'}`}>
            <div className={`project-modal`}>
                <div className="project-modal-header">
                    <div className="modal-close">
                        <button onClick={closeModalAndResetTab}>X</button>
                    </div>
                    <div className="project-modal-tabs">
                     <ProjModalTabs tabs={tabs} setTab={setTabIndex}/>
                    </div>
                </div>
                <div className="modal-content">
                    <div className={`${tab == 2 ? 'full' : ''}`}>
                        <p className="modal-project-title"> {project.title}</p>
                        <ProjModalTabContent tabs={tabs} currTab={tab}/>
                    </div>
                    <img className= {`modal-preview-img ${(project.previewImg == '' || tab == 2) ? 'hidden' : '' }`} src={`images/projects/modal/${project.previewImg}`}/>
                </div>
                <div className="modal-content-fullscreen">
                    <p className="modal-project-title"> {project.title}</p>
                    <img className= {`modal-preview-img ${project.previewImg == '' ? 'hidden' : '' }`} src={`images/projects/modal/${project.previewImg}`}/>
                    <p className="modal-section-header"> {tabs[0].title}</p>
                    <p className={`modal-project-desc`}> {tabs[0].content}</p>
                    <p className="modal-section-header"> {tabs[1].title}</p>
                    <PortProjectResult results={tabs[1].content}/>
                    <div className={`${hasDemo(tabs) ? '' : 'hidden'}`}>
                    <p className="modal-section-header"> {tabs[2].title}</p>
                    <PortModalVideo vid={tabs[2].content}/>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
