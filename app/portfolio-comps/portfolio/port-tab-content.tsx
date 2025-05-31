import {PortCard} from "./port-card";
import {useState} from "react";
import {projects} from "./port-project-data";

export default function PortTabContent({tab})
{
    return(
    <>
        <div className="portfolio-tab-content">
            <div className="port-projects">
                {
                    projects.map((project => (
                        <PortCard key={project.id} project={project} currentTab={tab}/>
                    )))
                }
            </div>
        </div>

    </>
    );
}
