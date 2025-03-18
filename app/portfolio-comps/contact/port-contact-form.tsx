import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { PortFavButton } from "./port-fav-button"
import { useState } from 'react';

export function PortContactForm({ favIcon, redirectLink, downloadable=false}) {
    const linkedInAccount = "https://www.linkedin.com/in/espidle/";
    const githubAccount = "https://github.com/ericspiddev";
    const resumePath = "public/files/Eric_Spidle_Resume.pdf";

    const [contactData, setContactData] = useState({
        fullName: '',
        userEmail: '',
        customMessage: ''
    });
 const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5050/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        console.log('Success')
        // Optionally, you can update the UI with a success message or reset the form
      } else {
        console.error('Error:')
      }
    } catch (error) {
      console.error('Request failed', error);
    }
  };

const handleFormChange = (event) => {
    const {name, value } = event.target; 
    setContactData({
        ...contactData, // keep other values the same
        [name]: value,
    });
};








    return(
        <>
         <form class="contact-form-container" onSubmit={handleSubmit}  action="http://localhost:5050/api/send-mail" method="post">
         <div class="contact-form">
            <div class="form-input-field">
                <label for="contact-name">Name:</label>
                <input type="text" id="contact-name" name="fullName" value={contactData.fullName} onChange={handleFormChange}required/>
            </div>
            <div class="form-input-field">
                <label for="contact-email">Email: </label>
                <input type="email" id="contact-email" name="userEmail" value={contactData.userEmail} onChange={handleFormChange}required/>
            </div>
            <div class="form-input-field">
                <label for="contact-message">Message:</label>
                <textarea id="contact-message" placeholder="Please put your message here" 
                    value={contactData.customMessage} onChange={handleFormChange} name="customMessage" required>  </textarea>
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
