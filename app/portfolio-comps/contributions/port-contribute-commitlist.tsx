import {PortContributeCommit} from "./port-contribute-commit"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCodeMerge} from "@fortawesome/free-solid-svg-icons"
export function PortContributeCommitList({ repo, commitList })
{
    return (
    <>
        <div className="commit-list">
        <div className="commit-repo">
           <div><FontAwesomeIcon icon={faCodeMerge} size="xl"/> </div>
           <div>{repo}</div>
        </div>
        {
            commitList.map(commit => (<PortContributeCommit commit={commit} key={commit.sha}/>))
        }
        </div>
    </>
    );
}
