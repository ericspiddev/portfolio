
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleInfo, faCode, faCodeCommit, faComment, faEnvelope} from "@fortawesome/free-solid-svg-icons";
export function PortNavBar()
{
    return (
    <nav id="portfolio-nav-container">
        <ul id="portfolio-nav">
            <li class="portfolio-nav-item"><a href="#about-section"> <FontAwesomeIcon icon={faCircleInfo}/> About</a> </li>
            <li class="portfolio-nav-item"><a href="#portfolio-section"> <FontAwesomeIcon icon={faCode}/> Portfolio </a></li>
            <li class="portfolio-nav-item"><a href="#contact-section"> <FontAwesomeIcon icon={faEnvelope}/> Contact</a></li>
            <li class="portfolio-nav-item"> <a href="#blog-section"> <FontAwesomeIcon icon={faComment}/> Blog</a></li>
            <li class="portfolio-nav-item"> <a href="#contributions-section"> <FontAwesomeIcon icon={faCodeCommit}/> Contributions</a></li>
            <li></li>
            <div id="portfolio-nav-banner">
                <a href="#big-dl-resume">
                <p>Eric Spidle</p>
                </a>
            </div>
        </ul> 
    </nav>
    )
}
