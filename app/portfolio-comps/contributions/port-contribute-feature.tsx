import { PortContributeCommit } from "./port-contribute-commit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfo, faCircleQuestion} from "@fortawesome/free-solid-svg-icons"
import {PortContributeModal} from "./port-contributions-modal";
import {useState } from "react";
export function PortContributeFeature({ feature }){

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
          <div class="feature">
            <div class="feature-title">
                <p> {feature.title}:</p>
                <div class="info-icon" feature-about={feature.about}></div>
            </div>
                <div class="feature-color" style={{backgroundColor: feature.color}}></div>
                <div class="commit-count">
                    {feature.commits.length} commits
                </div>
            <div>
                Project name
            </div>
            <div>
                <button class="feature-learn-more clickable" onClick={showProjectModal}> Learn More </button>
            </div>
            <PortContributeModal showModal={showModal} closeModal={hideProjectModal} feature={feature}/>
        </div>
        </>
    );
}
