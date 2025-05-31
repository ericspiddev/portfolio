import PortfolioHeader from "../misc/portfolio-header";
import PortfolioTabContent from "./port-tab-content";
import {PortTech} from "./port-tech";
import { useState } from "react";

export enum portfolioTabTypes {
    PERSONAL,
    PROFESSIONAL,
    EDUCATIONAL,
}
export function PortPortfolio() {
    const [tab, setTab] = useState(portfolioTabTypes.PERSONAL);
    console.log(portfolioTabTypes.PROFESSIONAL);
    return (
        <>
            <div id="porfolio-section">
                <div className="section-common">
                    <div className="section-text-common">
                    <PortfolioHeader header="Portfolio"/>
                    <p className="project-header-text"> Projects I've { portfolioTabTypes.PROFESSIONAL == tab ? 'worked on' : 'built'} ...</p>
                    </div>
                    <div className="portfolio-tabs section-text-common">
                        <div className="portfolio-tab-header">
                        <button className="portfolio-tab"
                                id={tab == portfolioTabTypes.PERSONAL ? 'active-tab': ''}
                                onClick = {() => setTab(portfolioTabTypes.PERSONAL)}>
                        Personal
                        </button>
                        <button className="portfolio-tab"
                                id={tab == portfolioTabTypes.PROFESSIONAL ? 'active-tab': ''}
                                onClick = {() => setTab(portfolioTabTypes.PROFESSIONAL)}>
                        Professional
                        </button>
                        <button className="portfolio-tab"
                                id={tab == portfolioTabTypes.EDUCATIONAL ? 'active-tab': ''}
                                onClick = {() => setTab(portfolioTabTypes.EDUCATIONAL)}>
                        Educational
                        </button>
                    </div>
                    <PortfolioTabContent tab={tab} />
                    <div>
                        <p className="project-header-text"> Using these technologies...</p>
                    </div>
                    <PortTech/>
                </div>
            </div>
            <div className="filler"></div>
            </div>
        </>
    );
}


