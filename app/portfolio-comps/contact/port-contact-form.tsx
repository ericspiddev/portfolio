import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export function PortContactForm({ favIcon, redirectLink, downloadable=false}) {
    return(
        <>
         <form>
         <div class="contact-form">
            <div>
                <label for="contact-name">Name:</label>
                <input type="text" id="contact-name" name="Name"/>
            </div>
            <div>
                <label for="contact-email">Email: </label>
                <input type="email" id="conact-email" name="Email"/>
            </div>
            <div>
                <label for="contact-message">Message:</label>
                <textarea id="contact-message"> Please put your message here </textarea>
            </div>
         </div>
          <button type="submit"> Send Message </button>
         </form>
        </>
    );
}
