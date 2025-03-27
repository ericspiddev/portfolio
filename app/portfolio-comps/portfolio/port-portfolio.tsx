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
    return (
        <>
            <div id="porfolio-section">
                <div class="section-common">
                    <div class="section-text-common">
                    <PortfolioHeader header="Portfolio"/>
                    <p> Projects will go here </p> 
                    </div> 
                    <div class="portfolio-tabs section-text-common">
                        <div class="portfolio-tab-header">
                        <button class="portfolio-tab"
                                id={tab == portfolioTabTypes.PERSONAL ? 'active-tab': ''} 
                                onClick = {() => setTab(portfolioTabTypes.PERSONAL)}>
                        Personal
                        </button>
                        <button class="portfolio-tab"
                                id={tab == portfolioTabTypes.PROFESSIONAL ? 'active-tab': ''}
                                onClick = {() => setTab(portfolioTabTypes.PROFESSIONAL)}>
                        Professional
                        </button>
                        <button class="portfolio-tab"
                                id={tab == portfolioTabTypes.EDUCATIONAL ? 'active-tab': ''}
                                onClick = {() => setTab(portfolioTabTypes.EDUCATIONAL)}>
                        Educational
                        </button>
                    </div>
                    <PortfolioTabContent tab={tab} />
                </div>
            </div>
            <PortTech/>
            <div class="filler"></div>
            </div>
        </>
    );
}


