import {useState} from "react";

export function PortProjectModal({project, closeModal, showModal}){
    const [tab, setTab] = useState('About');
    return(
    <>
        <div className={`project-modal-overlay ${showModal ? '' : 'hidden'}`}>
            <div className={`project-modal`}>
                <div className="project-modal-header">
                    <div className="project-modal-tabs">
                        <p>About</p>
                        <p>Gallery</p>
                    </div>
                    <div class="modal-close">
                        <button onClick={closeModal}>X</button>
                    </div>
                </div>
                <div class="modal-content">
                    <div>
                        <p className="modal-project-title"> {project.title}</p>
                        <p class="modal-project-desc">{project.desc}</p>
                    </div>
                    <img class="modal-preview-img" src={`images/projects/modal/${project.previewImg}`}/>
                </div>
            </div>
        </div>
    </>
    );
}
