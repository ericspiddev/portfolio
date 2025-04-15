export interface Commit {
    id : number;
    title : string;
    sha : string;
    message : string;
};

export interface Feature {
    id : number;
    title : string
    commits: Commit[];
    project: string
    about: string;
    color: string;
};

const armpl011About = `This pull request was a contribution made to the seL4 project. It added uart emulation for the AMBA PL011 a common ARM serial device.`
const x86VGAAbout = `Added earlyprint/VMM prints via a VGA device for seL4. One of the big challenges with x86 and seL4 is the lack of COM ports on newer devices.`

export const features : Feature[] = [
    createFeature(0, [0, 1, 2], "PL011 Vuart",
        ["First title", "Second Title", "Third Title"],
        ["kdjekjdkew", "123jdk321ll", "942jd23kj43"],
        ["commit one", "commit two", "commit three"], armpl011About, "seL4", "purple"),
    createFeature(0, [0, 1, 2], "x86 VGA Console",
        ["First title", "Second Title", "Third Title"],
        ["kdjekjdkew", "123jdk321ll", "942jd23kj43"],
        ["commit one", "commit two", "commit three"], x86VGAAbout, "seL4", "blue")
];

function createFeature(id, ids, featureTitle, titles, shas, messages, about, project, color) : Feature {
    let commits : Commit[] = [];
    for (let i = 0; i < titles.length; i++) {
        commits.push(createCommit(ids[i], titles[i], shas[i], messages[i]));
    }
    return {
        id,
        title: featureTitle,
        commits,
        about,
        project,
        color
    };
}

function createCommit(id, title, sha, message) : Commit
{
    let commit: Commit = {
        id,
        title,
        sha,
        message,
    }

    return commit;
}

