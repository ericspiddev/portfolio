import ImageBanner from "./image-banner"
import PortfolioHeader from "../misc/portfolio-header";

export function PortAbout({nameClass}) {
    const aboutHeaderText = "About";
    return (<>
        <div id="about-section-container" class="section-common">
            <ImageBanner nameClass={nameClass}/>
            <div class="about-text section-text-common">
                <PortfolioHeader header={ "About" }/>
                <p>A highly motivated embedded systems and web developer who loves learning about technology.
                My introduction to technology came when I learned how to mod Minecraft at 12 years old.
                Ever since then I’ve always enjoyed tinkering and solving computer problems.
                I have a wide range of experience from porting low-level drivers to a hypervisor; to designing a website using CSS and front end frameworks.
                I am passionate about creating solutions and technologies that improve people’s lives in various ways.
                Whether it is a simple bug fix that enhances the UX of a website or an application that improves a decades old process of a company,
                I enjoy knowing that I helped solve someone’s problem using code. During my free time you’ll often find me gaming online with friends,
                working on my golf swing, or hitting the gym.</p>
                <div class="download-container">
                    <a href="files/Eric_Spidle_Resume.pdf" download><button id="big-dl-resume">Download Resume </button> </a>
                </div>
            </div>
             <div class="filler"></div>
        </div>
    </>);
}
