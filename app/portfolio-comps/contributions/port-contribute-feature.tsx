import { PortContributeCommit } from "./port-contribute-commit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfo, faCircleQuestion} from "@fortawesome/free-solid-svg-icons"
export function PortContributeFeature({ feature }){
    return (
        <>
          <div class="feature">
          <div class="feature-title">
            <p> {feature.title}:</p>
            <div class="info-icon" feature-about={feature.about}>
                <FontAwesomeIcon icon={faCircleQuestion} size="sm" />
            </div>
          </div>
        {
            feature.commits.map((commit) => (
            <PortContributeCommit commit={commit}/>))
        }
        </div>
        </>
    );
}
