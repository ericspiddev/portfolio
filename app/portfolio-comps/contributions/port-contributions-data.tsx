// Each project feature should consist of a list of projects, repos, and PR IDs that correspond to it
import {apiUrl} from "../../env/env";
export interface FeatureBackendInfo {
    project: string;
    repo: string;
    pullRequestId : number;
}

export interface Feature {
    id : number;
    title : string
    commits: Commit[];
    project: string
    about: string;
    color: string;
};


export const vuartBackendData : FeatureBackendInfo[] = [
    createBackendData("seL4", "camkes-vm", 134),
    createBackendData("seL4", "seL4_projects_libs", 133),
];
export const x86VgaBackendData : FeatureBackendInfo[] = [
    createBackendData("seL4", "seL4", 1288),
    createBackendData("seL4", "util_libs", 186),
]

function createBackendData(project, repo, pullRequestId) {
    return {
        project,
        repo,
        pullRequestId
    }
}

async function createFeature(id, ids, featureTitle, about, color, projectData) : Feature {
    let commits : Commit[] = [];
    for (let i = 0; i < projectData.length; i++) {
        let currPR = projectData[i];
        let prCommits = await getProjectContribution(currPR.project, currPR.repo, currPR.pullRequestId);
        commits.push(prCommits);
    }

    return {
        id,
        title: featureTitle,
        commits: commits != undefined ? commits : "test",
        about,
        project: projectData[0].project,
        color
    };
}

async function getProjectContribution(project, repo, pullRequestId)
{

    let req = `${apiUrl}/api/62567c58947/contributions/${project}/${repo}?pull_id=${pullRequestId}`
    let commits : Commit[] = [];
    try {
        let res = await fetch(req);
        let prData = await res.json();
        for(let i = 0; i < prData.length; i++) {
            let currCommit = prData[i];
            commits.push(createCommit(currCommit.sha, currCommit.message, currCommit.author));
        }
        console.log("Returning commits");
        return commits
    } catch (error) {
        console.log("Something went wrong!");
    }
}

function createCommit(id, sha, message, author) : Commit
{

    let commit: Commit = {
        id: 1,
        sha,
        message,
        author,
    }
    return commit;
}

