export interface TabObject {
    index: int;
    title : string;
    content : string;
    isHidden : boolean
};
export function ProjModalTabs({tabs, setTab}) {
    return (
    <>
       {
        tabs.map((tab) => (
        <p className={`clickable ${tab.content == undefined ? 'hidden': ''}`} onClick={() => setTab(tab.index)}> {tab.title} </p>))
        }
    </>
    );
}
