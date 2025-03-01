import { PortNavBar } from "../portfolio-comps/navbar/port-nav";
import { PortAbout } from "../portfolio-comps/about/port-about";
import { PortPortfolio } from "../portfolio-comps/portfolio/port-portfolio";
import { PortResume } from "../portfolio-comps/contact/port-resume";
import { PortContributions } from "../portfolio-comps/contributions/port-contributions";
import { PortBlog } from "../portfolio-comps/blog/port-blog";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Eric Spidle Portfolio" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function Home() {
    return (
        <>
            <script src="https://kit.fontawesome.com/b24df79285.js" crossorigin="anonymous"></script>
            <PortNavBar/>
            <PortAbout/>
            <PortPortfolio/>
            <PortResume/>
            <PortContributions/>
            <PortBlog/>
        </>
    );
}
