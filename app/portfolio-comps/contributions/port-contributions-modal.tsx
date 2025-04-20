import { PortContributePullRequest } from "./port-contribute-pull-request";
export function PortContributeModal({closeModal, showModal, feature}) {
    function isLoading(pull_reqs) {
        if (pull_reqs.length === 0) {
            return 1;
        }
        return 0
    }
    return (
    <>
        <div className={`project-modal-overlay ${showModal ? '' : 'hidden'}`}>
            <div className={`project-modal`}>
                <div className="project-modal-header">
                    <p className="modal-title">{feature.displayTitle}</p>
                    <div class="modal-close">
                        <button onClick={closeModal}>X</button>
                    </div>
                </div>
                <div className="contribute-modal-body">
                <p> {feature.about} </p>
                <div className="modal-repo">
                {
                    feature.pull_requests.map(pull_request => <PortContributePullRequest pull_request={pull_request}/>)
                }

                </div>
                </div>
                </div>
            </div>
    </>
    );
}


