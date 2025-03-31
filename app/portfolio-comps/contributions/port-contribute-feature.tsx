import { PortContributeCommit } from "./port-contribute-commit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfo, faCircleQuestion} from "@fortawesome/free-solid-svg-icons"
export function PortContributeFeature({ feature }){
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
                <button class="feature-learn-more clickable" > Learn More </button>
            </div>
        </div>
        </>
    );
}
