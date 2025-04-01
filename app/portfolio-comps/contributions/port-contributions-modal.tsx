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
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
