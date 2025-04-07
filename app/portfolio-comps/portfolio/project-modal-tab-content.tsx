export function ProjModalTabContent({tabs, currTab}) {
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
