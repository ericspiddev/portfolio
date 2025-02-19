import { PortNavBar } from "../portfolio-comps/navbar/port-nav";
import { PortAbout } from "../portfolio-comps/about/port-about";
import { PortResume } from "../portfolio-comps/resume/port-resume";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Eric Spidle Portfolio" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function Home() {
    return (
        <>
            <PortNavBar/>
            <PortAbout/>
            <PortResume/>
        </>
    );
}
