import PortfolioHeader from "../misc/portfolio-header";
import {PortContributeFeature} from "./port-contribute-feature";
import {vuartBackendData, x86VgaBackendData} from "./port-contributions-data";
import {useState, useEffect} from "react";

interface Commit {
    id : number;
    message : string;
    sha : string;
    author : string;
};

interface Feature {
    displayTitle : string,
    pull_requests : PullRequest[],
    about : string,
    color : string,
    titleId : string,
}

interface PullRequest {
    project : string, // base project
    repo: string, // actual repo
    commits : Commit[], // commits from to be added
}
export function PortContributions() {
    const armpl011About = `This pull request was a contribution made to the seL4 project. It added uart emulation for the AMBA PL011 a common ARM serial device.`
    const x86VGAAbout = `Added earlyprint/VMM prints via a VGA device for seL4. One of the big challenges with x86 and seL4 is the lack of COM ports on newer devices.`
    const [features, setFeatures] = useState([
        createFeature("PL011 Vuart", armpl011About, "purple", "pl011_vuart"),
        createFeature("x86 VGA Console", x86VGAAbout, "blue", "x86_vga")
    ]);

    useEffect(() => {
        const refreshCommits = async () => {
            await updateFeatureCommits("pl011_vuart");
            await updateFeatureCommits("x86_vga");
        }
        refreshCommits();
    }, []);

    async function updateFeatureCommits(featureName) {
        let newPrData = await getProjectContributions(featureName); // Features consists of 1 or more repos which consists of 1 or more commits
        console.log("New pr data is" + JSON.stringify(newPrData));
        setFeatures(features =>
            features.map(currentFeature => {
                return (currentFeature.titleId == featureName) ? {...currentFeature, pull_requests: newPrData.prs, project: newPrData.project} : currentFeature;
            })
        );
    }

    function createFeature(displayTitle, about, color, titleId) : Feature {
        return {
            displayTitle,
            pull_requests: [],
            about,
            project: "seL4",
            color,
            titleId
        };
    }

    async function getProjectContributions(featureName)
    {
        let ret = {}
        let req = `http://localhost:5050/api/contributions/${featureName}` // make the request PER feature
        let contributions = {}
        try {
            let res = await fetch(req);
            contributions = await res.json();
        } catch (error) {
            console.error("Something went wrong getting contributions " + error);
        }
        ret["project"] = contributions["project"];
        ret["prs"] = requestToPullRequest(contributions);
        return ret;
    }

    function requestToPullRequest(reqData) {
        let pullReqs = [];
        for(const [key, value] of Object.entries(reqData)) {
            if(key != "project"){
                pullReqs.push({repo: key, commits : value})
            }
        }
        return pullReqs;
    }

    return (
        <>
            <div id="contributions-section">
                <div className="section-common">
                    <div className="section-text-common">
                        <PortfolioHeader header="Contributions"/>
                        <p>Contributions will go here</p>
                    </div>
                    <div className="section-text-common">
                        <div id="contributions">
                        {
                            features.map((feature) => ( // map over each feature...
                            <PortContributeFeature feature={feature}/>))
                        }
                        </div>
                    </div>
                </div>
                <div className="filler"></div>
            </div>
        </>
    );
}
