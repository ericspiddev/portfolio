import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCodeCommit} from "@fortawesome/free-solid-svg-icons"
export function PortContributeCommit({ commit }) {
    return (
    <>
        <div class="commit">
            <p> <FontAwesomeIcon icon={faCodeCommit}/>{commit.sha.slice(0, 7)} </p>
            <p> "{commit.message}" </p>
            <p> --- @ericspidledw</p>
        </div>
    </>
    );
}
