// Each project feature should consist of a list of projects, repos, and PR IDs that correspond to it
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

//export const features : Feature[] = [
//    await createFeature(0, [0, 1, 2], "PL011 Vuart", armpl011About, "purple", vuartBackendData),
//    await createFeature(1, [0, 1, 2], "x86 VGA Console", x86VGAAbout, "blue", x86VgaBackendData)
//];

async function createFeature(id, ids, featureTitle, about, color, projectData) : Feature {
    let commits : Commit[] = [];
    console.log("projectdat length " + projectData.length);
    for (let i = 0; i < projectData.length; i++) {
        let currPR = projectData[i];
        let prCommits = await getProjectContribution(currPR.project, currPR.repo, currPR.pullRequestId);
        console.log("PR commits is " + prCommits);
        commits.push(prCommits);
    }

    console.log("ON FEATURE CREATE COMMITS IS " + JSON.stringify(commits));
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
    let req = `http://localhost:5050/api/contributions/${project}/${repo}?pull_id=${pullRequestId}`
    let commits : Commit[] = [];
    try {
        let res = await fetch(req);
        let prData = await res.json();
        console.log("PrData len is " + prData.len);
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
    console.log("Commit is : " + JSON.stringify(commit));
    return commit;
}

