import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState} from 'react';
import {faBars, faCircleInfo, faCode, faCodeCommit, faComment, faEnvelope} from "@fortawesome/free-solid-svg-icons";


export function HamburgerMenu() {
    let [show, setShow] = useState(false);

    const handleHamburgerClick = () => {
        console.log(show);
        setShow(!show);
    }
    return (
    <>
        <div class="hamburger-toggle">
        <FontAwesomeIcon icon={faBars} onClick={handleHamburgerClick}/> 
        </div>

        <div class= {show ? 'hamburger-menu' : 'hidden'} >
        <ul>
            <li ><a href="#about-section"> <FontAwesomeIcon icon={faCircleInfo}/> About</a> </li>
            <li ><a href="#portfolio-section"> <FontAwesomeIcon icon={faCode}/> Portfolio </a></li>
            <li ><a href="#contact-section"> <FontAwesomeIcon icon={faEnvelope}/> Contact</a></li>
            <li > <a href="#blog-section"> <FontAwesomeIcon icon={faComment}/> Blog</a></li>
            <li > <a href="#contributions-section"> <FontAwesomeIcon icon={faCodeCommit}/> Contributions</a></li>
        </ul>
        </div>
    </>
    );
}
