import PortfolioHeader from "../misc/portfolio-header"
import { PortContactForm } from "./port-contact-form"
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
export function PortContact() {
        return (
        <>
            <div className="section-common">
                <div className="section-text-common">
                    <PortfolioHeader header="Contact"/>
                    <PortContactForm/>
                </div>
                <div className="filler">
                </div>
            </div>
        </>
    );
}
