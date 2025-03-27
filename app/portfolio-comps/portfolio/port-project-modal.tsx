import {useState} from "react";
export function PortProjectModal({showModal, closeModal, projectTitle, projectDesc }){
    const [tab, setTab] = useState('About');
    return(
    <>
        <div className={`project-modal-overlay ${showModal ? '' : 'hidden'}`}>
            <div className={`project-modal`}>
                <div className="project-modal-header">
                    <div className="project-modal-tabs">
                        <p>About</p>
                        <p>Gallery</p>
                        <p>Etc</p>
                    </div>
                    <div class="modal-close">
                        <button onClick={closeModal}>X</button>
                    </div>
                </div>
                <p className="modal-project-title"> {projectTitle}</p>
                <p>{projectDesc}</p>
            </div>
        </div>
    </>
    );
}
