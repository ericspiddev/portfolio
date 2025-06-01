import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCodeCommit} from "@fortawesome/free-solid-svg-icons"
export function PortContributeCommit({ commit }) {
    return (
    <>
        <div className="commit">
            <div className="commit-sha"><img className="commit-img" src="images/contribute/commit.svg"/> {commit.sha.slice(0, 8)} </div>
            <p className="commit-message"> "{commit.message}" </p>
            <p className="commit-author"> @{commit.author}</p>
        </div>
    </>
    );
}
