import { PortNavBar } from "../portfolio-comps/navbar/port-nav";
import { PortAbout } from "../portfolio-comps/about/port-about";
import { PortPortfolio } from "../portfolio-comps/portfolio/port-portfolio";
import { PortContact } from "../portfolio-comps/contact/port-contact";
import { PortContributions } from "../portfolio-comps/contributions/port-contributions";
import { PortBlog } from "../portfolio-comps/blog/port-blog";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Eric Spidle Portfolio" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function Home() {

    const[count, setCount] = useState(0);
    const[currClass, setCurrClass] = useState('name-primary');

    useEffect(() => {
        const interval = setInterval(() => {
            if(count == 0){
                setCurrClass('name-primary');
                setCount(1);
            }
            else if(count == 1){
                setCurrClass('name-secondary');
                setCount(2);
            }
            else {
                setCurrClass('name-teritary');
                setCount(0);
            }
        }, 500);

        return () => clearInterval(interval);
    }, [count, currClass]);

    return (
        <>
            <script src="https://kit.fontawesome.com/b24df79285.js" crossorigin="anonymous"></script>
            <PortNavBar/>
            <PortAbout nameClass={currClass}/>
            <PortPortfolio/>
            <PortResume/>
            <PortContributions/>
            <PortBlog/>
        </>
    );
}
