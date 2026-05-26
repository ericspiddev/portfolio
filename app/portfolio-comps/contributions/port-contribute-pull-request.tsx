import {PortContributeCommitList} from "./port-contribute-commitlist";
export function PortContributePullRequest({ pull_request, mergedMsg, reviewMsg })
{
    return (
    <>
        <div className="repo-info">
            <p className="modal-mr-status">{pull_request.commits.is_merged ? `${mergedMsg}` : `${reviewMsg}`}</p>
        </div>
        <PortContributeCommitList repo={pull_request.repo} commitList={pull_request.commits.commits}/>
    </>
    );
}
