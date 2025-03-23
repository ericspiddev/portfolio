
import { useState } from 'react';
import {PortTechSelector} from "./port-tech-selector"
import {PortTextLogo} from "./port-tech-logo";
export function PortTech() {
    const [devToolColor, setDevToolColor] = useState(false);
    const [embeddedColor, setEmbeddedColor] = useState(false);
    const [languageColor, setLanguageColor] = useState(false);
    const [databaseColor, setDatabaseColor] = useState(false);
    const [frameworkColor, setFrameworkColor] = useState(false);

    return (
        <>
            <div class="tech-experience">
                <div class="tech-header">
                    <p>Experience with...</p>
                </div>
                    <div class="tech-highlight">
                        <PortTechSelector state={languageColor} setState={setLanguageColor} selectorText="Languages"/>
                        <PortTechSelector state={frameworkColor} setState={setFrameworkColor} selectorText="Frameworks"/>
                        <PortTechSelector state={embeddedColor} setState={setEmbeddedColor} selectorText="Embedded"/>
                        <PortTechSelector state={databaseColor} setState={setDatabaseColor} selectorText="Databases"/>
                        <PortTechSelector state={devToolColor} setState={setDevToolColor} selectorText="Dev Tools"/>
                    </div>
                <div class="tech-grid">
                    <PortTextLogo state={embeddedColor} image="images/tech/linux-original.svg"/> 
                    <PortTextLogo state={languageColor} image="images/tech/css3-original.svg"/> 
                    <PortTextLogo state={languageColor} image="images/tech/c-original.svg"/> 
                    <PortTextLogo state={devToolColor} image="images/tech/docker-original.svg"/> 
                    <PortTextLogo state={languageColor} image="images/tech/html5-original.svg"/> 
                    <PortTextLogo state={languageColor} image="images/tech/rust-original.svg"/> 
                    <PortTextLogo state={frameworkColor} image="images/tech/react-original.svg"/> 
                    <PortTextLogo state={languageColor} image="images/tech/cplusplus-original.svg"/> 
                    <PortTextLogo state={devToolColor} image="images/tech/neovim-original.svg"/> 
                    <PortTextLogo state={languageColor} image="images/tech/csharp-original.svg"/> 
                    <PortTextLogo state={frameworkColor} image="images/tech/rails-wordmark-original.svg"/> 
                    <PortTextLogo state={frameworkColor} image="images/tech/bootstrap-original.svg"/> 
                    <PortTextLogo state={languageColor} image="images/tech/python-original.svg"/> 
                    <PortTextLogo state={embeddedColor} image="images/tech/amazonwebservices-original.svg"/>
                    <PortTextLogo state={devToolColor} image="images/tech/gitlab-original.svg"/> 
                    <PortTextLogo state={devToolColor} image="images/tech/git-original.svg"/> 
                    <PortTextLogo state={frameworkColor} image="images/tech/express-original.svg"/> 
                    <PortTextLogo state={embeddedColor} image="images/tech/embeddedc-original.svg"/> 
                    <PortTextLogo state={databaseColor} image="images/tech/sqlite-original.svg"/> 
                    <PortTextLogo state={frameworkColor} image="images/tech/dotnetcore-original.svg"/> 
                    <PortTextLogo state={embeddedColor} image="images/tech/qt-original.svg"/> 
                    <PortTextLogo state={databaseColor} image="images/tech/mysql-original.svg"/> 
                    <PortTextLogo state={languageColor} image="images/tech/javascript-original.svg"/> 
                    <PortTextLogo state={languageColor} image="images/tech/java-original.svg"/>
                    <PortTextLogo state={devToolColor} image="images/tech/vscode-original.svg"/>
                    <PortTextLogo state={embeddedColor} image="images/tech/sel4-original.svg"/>
                    <PortTextLogo state={databaseColor} image="images/tech/microsoftsqlserver-original.svg"/>
                </div>
            </div> 
        </>
    );
}

