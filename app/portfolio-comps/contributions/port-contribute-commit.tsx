import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCodeCommit} from "@fortawesome/free-solid-svg-icons"
export function PortContributeCommit({ commit }) {
    return (
    <>
        <div class="commit">
            <div class="commit-sha"><img className="commit-img" src="public/images/contribute/commit.svg"/> {commit.sha.slice(0, 7)} </div>
            <p> "{commit.message}" </p>
            <p> - @ericspidledw</p>
        </div>
        <div class="commit">
            <div class="commit-sha"><img className="commit-img" src="public/images/contribute/commit.svg"/> {commit.sha.slice(0, 7)} </div>
            <p> "{commit.message}" </p>
            <p> - @ericspidledw</p>
        </div>
        <div class="commit">
            <div class="commit-sha"><img className="commit-img" src="public/images/contribute/commit.svg"/> {commit.sha.slice(0, 7)} </div>
            <p> "{commit.message}" </p>
            <p> - @ericspidledw</p>
        </div>
    </>
    );
}
