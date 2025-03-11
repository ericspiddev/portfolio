import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { PortFavButton } from "./port-fav-button"
export function PortContactForm({ favIcon, redirectLink, downloadable=false}) {
    const linkedInAccount = "https://www.linkedin.com/in/espidle/";
    const githubAccount = "https://github.com/ericspiddev";
    const resumePath = "public/files/Eric_Spidle_Resume.pdf";
    return(
        <>
         <form class="contact-form-container">
         <div class="contact-form">
            <div class="form-input-field">
                <label for="contact-name">Name:</label>
                <input type="text" id="contact-name" name="Name" required/>
            </div>
            <div class="form-input-field">
                <label for="contact-email">Email: </label>
                <input type="email" id="conact-email" name="Email" required/>
            </div>
            <div class="form-input-field">
                <label for="contact-message">Message:</label>
                <textarea id="contact-message" placeholder="Please put your message here" required>  </textarea>
            </div>
         </div>
          <div class="form-footer">

            <div class="contact-buttons">
                <PortFavButton redirectLink={linkedInAccount} favIcon={faLinkedin} />
                <PortFavButton redirectLink={githubAccount} favIcon={faGithub}/>
                <p>Resume: </p>
                <PortFavButton redirectLink={resumePath} favIcon={faFile} downloadable={true}/>
            </div>

          <button type="submit" id="send-message"> Send Message </button>
        </div>

         </form>
        </>
    );
}
