import { portfolioTabTypes } from './port-portfolio';

export default function PortTabContent({tab})
{
    return(
    <>
        <div class="portfolio-tab-content">
            <h1> You selected tab {tabToStr(tab)}</h1>
        </div>
    </>
    );
}

function tabToStr(tab: portfolioTabTypes) {
    switch (tab)  {
        case portfolioTabTypes.EMBEDDED: {
            return "Embedded"
        } 
        case portfolioTabTypes.WEB:{
                return "WEB";
        }
    } 
}
