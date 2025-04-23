import { faLinkedin, faGithub, faInstagram, faMedium} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { PortFavButton } from "./port-fav-button"
import {PortBanner} from "./port-banner";
import { useState, useEffect } from 'react';

export function PortContactForm({ favIcon, redirectLink, downloadable=false}) {
    const linkedInAccount = "https://www.linkedin.com/in/espidle/";
    const githubAccount = "https://github.com/ericspiddev";
    const instaAccount = "https://instagram.com/espidle";
    const mediumAccount = "https://medium.com/@ericspidledev";
    const resumePath = "public/files/Eric_Spidle_Resume.pdf";

    const [showBanner, setShowBanner] = useState(false);
    const [bannerMsg, setBannerMsg] = useState("Message Sent Successfully! " + String.fromCodePoint(0x2705));

    const [contactData, setContactData] = useState({
        fullName: '',
        userEmail: '',
        customMessage: ''
    });

    useEffect(() => {
      const bannerTime = setInterval(() => {
        setShowBanner(false);
      }, 3000); // let banner linger for 3s before clearing
        return () => clearInterval(bannerTime);
    }, [showBanner])

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
        console.log('Successfully sent email message ')
        setBannerMsg("Message Sent Successfully! " + String.fromCodePoint(0x2705))
        setContactData({
            fullName: '',
            userEmail: '',
            customMessage: ''
        });

      } else {
        console.error('Error: something went wrong sending the message with error code ' + response.status)
        setBannerMsg("Message failed to send! " + String.fromCodePoint(0x274C))
      }
        setShowBanner(true);
    } catch (error) {
        console.error('Request failed', error);
    }
  };

const handleFormChange = (event) => {
    const {name, value } = event.target;
    let maxLen = 0;
    if (name == "customMessage") {
        maxLen = getFieldMaxSize("large");
    } else {
        maxLen = getFieldMaxSize("medium");
    }

    if(contactData[name].length < maxLen) {
        setContactData({
            ...contactData, // keep other values the same
            [name]: value,
        });
    }

};

function buildTextCounter(length, size) {
    let max = getFieldMaxSize(size);
    length = (length > max) ? max : length;
    return `${length}/${max}`
}

function getFieldMaxSize(size, name){
    if (size == "large" || name == "customMessage") {
        return 512;
    }
    else if (size == "medium")
        return 256;

    return 128;
}

    return(
        <>
         <form class="contact-form-container" onSubmit={handleSubmit}>
         <div class="contact-form">
            <div class="form-input-field">
                <label for="contact-name">Name: {buildTextCounter(contactData.fullName.length, "medium")} </label>
                <input type="text" id="contact-name" name="fullName" value={contactData.fullName} onChange={handleFormChange} placeHolder="Your name"required/>
            </div>
            <div class="form-input-field">
                <label for="contact-email">Email: {buildTextCounter(contactData.userEmail.length, "medium")} </label>
                <input type="email" id="contact-email" name="userEmail" value={contactData.userEmail} onChange={handleFormChange} placeHolder="Your email"required/>
            </div>
            <div class="form-input-field">
                <label for="contact-message">Message: {buildTextCounter(contactData.customMessage.length, "large")}</label>
                <textarea id="contact-message" placeholder="Please put your message here"
                    value={contactData.customMessage} onChange={handleFormChange} name="customMessage" required> </textarea>
            </div>
         </div>
          <div class="form-footer">

            <div class="contact-buttons">
                <PortFavButton redirectLink={mediumAccount} favIcon={faMedium} title="Medium"/>
                <PortFavButton redirectLink={linkedInAccount} favIcon={faLinkedin} title="Linkedin"/>
                <PortFavButton redirectLink={instaAccount} favIcon={faInstagram} title="Instagram"/>
                <PortFavButton redirectLink={githubAccount} favIcon={faGithub} title="Github"/>
                <PortFavButton redirectLink={resumePath} favIcon={faFile} downloadable={true} title="Resume"/>
            </div>

          <button type="submit" id="send-message"> Send Message </button>
        </div>
         </form>
        <PortBanner show={showBanner} resultMsg={bannerMsg}/>
        </>
    );
}
