import {PortContributeCommit} from "./port-contribute-commit"
export function PortContributeCommitList({ commitList })
{
    return (
    <>
        <div className="commit-list">
        {
            commitList.map(commit => (<PortContributeCommit commit={commit}/>))
        }
        </div>
    </>
    );
}
