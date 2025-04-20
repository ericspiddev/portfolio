import {PortContributeCommitList} from "./port-contribute-commitlist";
export function PortContributePullRequest({ pull_request })
{
    return (
    <>
        <p className="repo-title"> {pull_request.repo} </p>
        <PortContributeCommitList commitList={pull_request.commits}/>
    </>
    );
}
