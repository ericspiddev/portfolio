import { PortContributePullRequest } from "./port-contribute-pull-request";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faX} from "@fortawesome/free-solid-svg-icons";
export function PortContributeModal({closeModal, showModal, feature, mergedMsg, reviewMsg}) {
    function isLoading(pull_reqs) {
        if (pull_reqs.length === 0) {
            return 1;
        }
        return 0
    }
    return (
    <>
        <div className={`project-modal-overlay ${showModal ? '' : 'hidden'}`}>
            <div className={`project-modal modal-scrollable`}>
                <div className="project-modal-header">
                    <div className="modal-close">
                        <button className="clickable" onClick={closeModal}><FontAwesomeIcon icon={faX}/></button>
                    </div>
                    <p className="feature-modal-title">{feature.displayTitle}</p>
                </div>
                <div className="contribute-modal-body">
                <p class="feature-modal-about"> {feature.about} </p>
                <div className="modal-repo">
                {
                    feature.pull_requests.map(pull_request => <PortContributePullRequest key={pull_request.id} pull_request={pull_request}
                                    mergedMsg={mergedMsg}
                                    reviewMsg={reviewMsg}/>)
                }
                </div>
                </div>
                </div>
            </div>
    </>
    );
}


