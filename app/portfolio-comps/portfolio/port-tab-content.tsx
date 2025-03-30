import {PortCard} from "./port-card";
import {useState} from "react";
import {projects} from "./port-project-data";

export default function PortTabContent({tab})
{
    return(
    <>
        <div class="portfolio-tab-content">
            <div class="port-projects">
                {
                    projects.map((project => (
                    <>
                        <PortCard project={project} currentTab={tab}/>
                    </>
                    )))
                }
            </div>
        </div>

    </>
    );
}
