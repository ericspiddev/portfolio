import {PortContributeCommitList} from "./port-contribute-commitlist";
export function PortContributePullRequest({ pull_request, mergedMsg, reviewMsg })
{
    return (
    <>
        <div class="repo-info">
            <p className="repo-title"> {pull_request.repo} </p>
            <p className="repo-merged">{pull_request.commits.is_merged ? `${mergedMsg}` : `${reviewMsg}`}</p>
        </div>
        <PortContributeCommitList commitList={pull_request.commits.commits}/>
    </>
    );
}
