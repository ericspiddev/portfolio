
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
            <li className="hover-enlarge portfolio-nav-item"><a href="#about-section" class="portfolio-nav-link"> <FontAwesomeIcon icon={faCircleInfo}/> About</a> </li>
            <li className="hover-enlarge portfolio-nav-item"><a href="#portfolio-section" class="portfolio-nav-link"> <FontAwesomeIcon icon={faCode}/> Portfolio </a></li>
            <li className="hover-enlarge portfolio-nav-item"><a href="#contact-section" class="portfolio-nav-link"> <FontAwesomeIcon icon={faEnvelope}/> Contact</a></li>
            <li className="hover-enlarge portfolio-nav-item"> <a href="#blog-section" class="portfolio-nav-link"> <FontAwesomeIcon icon={faComment}/> Blog</a></li>
            <li className="hover-enlarge portfolio-nav-item"> <a href="#contributions-section" class="portfolio-nav-link"> <FontAwesomeIcon icon={faCodeCommit}/> Contributions</a></li>
            <HamburgerMenu/>
        </ul>
   </nav>
    )
}
