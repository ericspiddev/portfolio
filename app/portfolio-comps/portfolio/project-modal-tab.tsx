export interface TabObject {
    index: int;
    title : string;
    content : string;
    isHidden : boolean
};
export function ProjModalTabs({tabs, setTab, currTab}) {
    return (
    <>
       {
        tabs.map((tab) => (
        <p key={tab.index}
           className={`clickable ${tab.content == undefined ? 'hidden': ''} ${tab.index == currTab ? 'active-tab' : '' }`}
           onClick={() => setTab(tab.index)}> {tab.title} </p>))
        }
    </>
    );
}
