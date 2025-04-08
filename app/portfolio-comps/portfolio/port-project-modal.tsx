import {useState} from "react";
import {ProjModalTabs} from "./project-modal-tab";
import {ProjModalTabContent} from "./project-modal-tab-content";

export function PortProjectModal({project, closeModal, showModal}){

    function setTabIndex(index) {
        setTab(index);
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
        title: "Gallery",
        content: "Photos eventually",
        isHidden: true
      },
    ]
    return(
    <>
        <div className={`project-modal-overlay ${showModal ? '' : 'hidden'}`}>
            <div className={`project-modal`}>
                <div className="project-modal-header">
                    <div className="project-modal-tabs">
                     <ProjModalTabs tabs={tabs} setTab={setTabIndex}/>
                    </div>
                    <div class="modal-close">
                        <button onClick={closeModal}>X</button>
                    </div>
                </div>
                <div class="modal-content">
                    <div>
                        <p className="modal-project-title"> {project.title}</p>
                        <ProjModalTabContent tabs={tabs} currTab={tab}/>
                    </div>
                    <img class= {`modal-preview-img ${project.previewImg == '' ? 'hidden' : '' }`} src={`images/projects/modal/${project.previewImg}`}/>
                </div>
            </div>
        </div>
    </>
    );
}
