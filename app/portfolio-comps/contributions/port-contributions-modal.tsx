import {PortContributeCommit} from "./port-contribute-commit";

export function PortContributeModal({closeModal, showModal, feature}) {
    return (
    <>
        <div className={`project-modal-overlay ${showModal ? '' : 'hidden'}`}>
            <div className={`project-modal`}>
                <div className="project-modal-header">
                    <p>{feature.title}</p>
                    <div class="modal-close">
                        <button onClick={closeModal}>X</button>
                    </div>
                </div>
                <div className="contribute-modal-body">
                <p> {feature.about}</p>
                 <div className="contribute-modal-commits">
                    {
                        feature.commits.map((commit) =>
                            <PortContributeCommit commit={commit}/>)
                    }
                 </div>
                </div>
            </div>
        </div>
    </>
    );
}
