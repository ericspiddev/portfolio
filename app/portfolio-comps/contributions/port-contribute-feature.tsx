import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfo, faCircleQuestion} from "@fortawesome/free-solid-svg-icons"
import {PortContributeModal} from "./port-contributions-modal";
import {useState, useEffect } from "react";
export function PortContributeFeature({ feature }){
    function getCommitTotals(pull_requests) {
        let totalCommits = 0;
        pull_requests.forEach(pull_request => {
            totalCommits += pull_request.commits.commits.length;
        });
        return totalCommits;
    }

    useEffect(() => {
        isFullyMerged(feature.pull_requests);
    }, [feature])
    const mergedSymbol = String.fromCodePoint(0x1f7e2)
    const mergedMsg = "Merged " + mergedSymbol

    const inReviewSymbol = String.fromCodePoint(0x1f7e1)
    const inReviewMsg = "In Review " + inReviewSymbol

    const [isMerged, setIsMerged] = useState(false);
    function isFullyMerged(pull_requests) {
        for(let i = 0; i < pull_requests.length; i++) {
            let feat = pull_requests[i];
            if (!feat.commits.is_merged) {
                setIsMerged(false);
                return;
            }
        }
        setIsMerged(true);
    }

    const [showModal, setShowModal] = useState(false);
    function showProjectModal() {
        document.body.style.overflow = "hidden";
        setShowModal(true);
    }

    function hideProjectModal() {
        document.body.style.overflow = "auto";
        setShowModal(false);
    }
    return (
        <>
          <div className="feature hover-enlarge">
            <div className="feature-title underline-header">
                 {feature.displayTitle}
            </div>
                <div className="commit-count" title={ isMerged ? 'Merged' : 'In Review'}>
                    <span className="mr-status"> {isMerged ? `${mergedSymbol}` : `${inReviewSymbol}`} </span>
                    {getCommitTotals(feature.pull_requests)} commits
                </div>
            <div>
                <button className="feature-learn-more clickable" onClick={showProjectModal}> Learn More </button>
            </div>
        </div>
            <PortContributeModal showModal={showModal} closeModal={hideProjectModal} feature={feature}
                mergedMsg={mergedMsg} reviewMsg={inReviewMsg}/>
        </>
    );
}
