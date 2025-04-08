import {PortProjectResult} from "./project-result";

export function ProjModalTabContent({tabs, currTab}) {
    if (currTab != 1) {
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
    else {
        return (
            <PortProjectResult results={tabs[currTab].content}/>
        );
    }
}
