import ImageBanner from "./image-banner"
import PortfolioHeader from "../misc/portfolio-header";

export function PortAbout() {
    const aboutHeaderText = "About";
    return <>
        <div id="about-section-container" class="section-common">
            <ImageBanner/> 
            <div class="about-text section-text-common">
                <PortfolioHeader header={ "About" }/>
                <p>An embedded systems/web developer that has a love for technology. My development journey began when I was 10 years old and trying to figure out how I could mod Minecraft. Since then I've enjoyed learning everything there is about software and how it works. My areas of specialty are embedded systems, specifically hypervisors and embedded Linux, and web development where I have experience with both ASP MVC and Ruby on Rails. I love solving complex problems and building out solutions that improve a company or person's everyday.</p>
                
                <div class="download-container">
                    <a href="files/Eric_Spidle_Resume.pdf" download><button id="big-dl-resume">Download Resume </button> </a>
                </div>
                
            </div> 
        </div>
    </>
}
