import PortfolioHeader from "../misc/portfolio-header"
import PortfolioTabContent from "./port-tab-content"
import { useState } from "react";

export enum portfolioTabTypes {
    WEB = 1,
    EMBEDDED = 2,
}

export function PortPortfolio() { 
    
    const [tab, setTab] = useState(portfolioTabTypes.WEB);
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
                <button class="portfolio-tab" onClick = {() => setTab(portfolioTabTypes.WEB)}> Web </button> 
                <button class="portfolio-tab" onClick = {() => setTab(portfolioTabTypes.EMBEDDED)}> Embedded </button> 
                </div>
                <PortfolioTabContent tab={tab} />
            </div>
            </div>
            <div class="filler">

            </div>
            </div>
        </>
    );
}


