import {PortProjectResult} from "./project-result";
import {PortModalVideo} from "./port-modal-video";

export function ProjModalTabContent({tabs, currTab}) {
    const data = tabs[currTab].content;
    if (currTab == 0) {
        return (
            <div>
                {
                    tabs.map((tab) => (
                        <p className={`modal-project-desc ${tab.index == currTab ? '' : 'hidden'}`}> {tab.content}</p>
                    ))
                }
            </div>
        );
    }
    else if (currTab == 1) {
        return (
            <PortProjectResult results={data}/>
        );
    }
    else {
        return(
            <PortModalVideo vid={data}/>
        );
    }
}
