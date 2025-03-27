import PortfolioHeader from "../misc/portfolio-header";
import {PortContributeFeature} from "./port-contribute-feature";

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
    about: string;
};

const features : Feature[] = [
    createFeature(0, [0, 1, 2], "Feature title",
        ["First title", "Second Title", "Third Title"],
        ["kdjekjdkew", "123jdk321ll", "942jd23kj43"],
        ["commit one", "commit two", "commit three"],
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Dui blandit ultrices nulla eu eleifend metus pellentesque. Nisi euismod mauris proin nascetur sagittis conubia felis ex. Mauris dis conubia duis ac platea habitant dictum euismod. Massa vulputate suspendisse ante sociosqu sit at consequat erat pretium. Tempor facilisi vitae arcu sit ullamcorper. Egestas mus dictumst cras dictumst bibendum ante. Est integer pulvinar lobortis euismod, pretium vivamus."),
    createFeature(0, [0, 1, 2], "Feature title",
        ["First title", "Second Title", "Third Title"],
        ["kdjekjdkew", "123jdk321ll", "942jd23kj43"],
        ["commit one", "commit two", "commit three"],
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Dui blandit ultrices nulla eu eleifend metus pellentesque. Nisi euismod mauris proin nascetur sagittis conubia felis ex. Mauris dis conubia duis ac platea habitant dictum euismod. Massa vulputate suspendisse ante sociosqu sit at consequat erat pretium. Tempor facilisi vitae arcu sit ullamcorper. Egestas mus dictumst cras dictumst bibendum ante. Est integer pulvinar lobortis euismod, pretium vivamus."),
createFeature(0, [0, 1, 2], "Feature title",
        ["First title", "Second Title", "Third Title"],
        ["kdjekjdkew", "123jdk321ll", "942jd23kj43"],
        ["commit one", "commit two", "commit three"],
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Dui blandit ultrices nulla eu eleifend metus pellentesque. Nisi euismod mauris proin nascetur sagittis conubia felis ex. Mauris dis conubia duis ac platea habitant dictum euismod. Massa vulputate suspendisse ante sociosqu sit at consequat erat pretium. Tempor facilisi vitae arcu sit ullamcorper. Egestas mus dictumst cras dictumst bibendum ante. Est integer pulvinar lobortis euismod, pretium vivamus."),
];

function createFeature(id, ids, featureTitle, titles, shas, messages, about ) : Feature {
    let commits : Commit[] = [];
    for (let i = 0; i < titles.length; i++) {
        commits.push(createCommit(ids[i], titles[i], shas[i], messages[i]));
    }
    return {
        id,
        title: featureTitle,
        commits,
        about
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
export enum contributionsTabType {
    SEL4=1,
    MOER=2,
};

export function PortContributions() {
    return (
        <>
            <div id="contributions-section">
                <div class="section-common">
                    <div class="section-text-common">
                        <PortfolioHeader header="Contributions"/>
                        <p>Contributions will go here</p>
                    </div>
                <div class="portfolio-tabs section-text-common">
                            <div class="portfolio-tab-header">
                                <button class="portfolio-tab"
                                        id={'active-tab'}>
                                    seL4
                                </button>
                                <button class="portfolio-tab">
                                More
                                </button>
                            </div>
                        </div>
                    <div class="section-text-common">
                        <div id="contributions"> {
                            features.map((feature) => (
                            <PortContributeFeature feature={feature}/>))
                        }
                        <div class="secondary-filler"> </div>
                        </div>
                    </div>
                </div>
                <div class="filler"></div>
            </div>
        </>
    );
}
