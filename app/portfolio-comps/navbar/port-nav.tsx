
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleInfo, faCode, faCodeCommit, faComment, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {HamburgerMenu} from "../mobile/hamburger-menu/hamburger-menu"
export function PortNavBar()
{
    return (
    <nav id="portfolio-nav-container">
            <div id="portfolio-nav-banner">
                <a href="#">
                <p>Eric Spidle</p>
                </a>
            </div>
        <ul id="portfolio-nav">
            <li className="portfolio-nav-item"><a href="#about-section"> <FontAwesomeIcon icon={faCircleInfo}/> About</a> </li>
            <li className="portfolio-nav-item"><a href="#portfolio-section"> <FontAwesomeIcon icon={faCode}/> Portfolio </a></li>
            <li className="portfolio-nav-item"><a href="#contact-section"> <FontAwesomeIcon icon={faEnvelope}/> Contact</a></li>
            <li className="portfolio-nav-item"> <a href="#blog-section"> <FontAwesomeIcon icon={faComment}/> Blog</a></li>
            <li className="portfolio-nav-item"> <a href="#contributions-section"> <FontAwesomeIcon icon={faCodeCommit}/> Contributions</a></li>
            <HamburgerMenu/>
        </ul>
   </nav>
    )
}
