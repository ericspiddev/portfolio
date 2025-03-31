import PortfolioHeader from "../misc/portfolio-header";
import {PortContributeFeature} from "./port-contribute-feature";
import {features} from "./port-contributions-data";

export function PortContributions() {
    return (
        <>
            <div id="contributions-section">
                <div class="section-common">
                    <div class="section-text-common">
                        <PortfolioHeader header="Contributions"/>
                        <p>Contributions will go here</p>
                    </div>
                    <div class="section-text-common">
                        <div id="contributions"> {
                            features.map((feature) => (
                            <PortContributeFeature feature={feature}/>))
                        }
                        </div>
                    </div>
                </div>
                <div class="filler"></div>
            </div>
        </>
    );
}
