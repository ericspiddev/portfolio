import PortfolioHeader from "../misc/portfolio-header"
import { PortFavButton } from "./port-fav-button"
import { PortContactForm } from "./port-contact-form"
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
export function PortResume() {
    const linkedInAccount = "https://www.linkedin.com/in/espidle/";
    const githubAccount = "https://github.com/ericspiddev";
    return (
        <>
            <div class="section-common">
            <div class="section-text-common">
            <PortfolioHeader header="Contact"/>
            <p>All of my contacts can be found below </p>
            <PortContactForm/>
            <div class="contact-buttons">
                <PortFavButton redirectLink={linkedInAccount} favIcon={faLinkedin} />
                <PortFavButton redirectLink={githubAccount} favIcon={faGithub}/>
                <p>Resume: </p>
                <PortFavButton redirectLink="#" favIcon={faFile}/>
            </div>
            </div>
            </div>
        </>
    );
}
