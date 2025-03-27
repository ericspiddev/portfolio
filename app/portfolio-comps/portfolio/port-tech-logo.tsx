
function getTitle(imagePath) {
        let imageName = imagePath.split('/');
        imageName = imageName[imageName.length -1]
        return imageName.split('-')[0];
}
export function PortTextLogo({state, image}) {
    return(
        <img className={`tech-photo ${state ? 'color-in-logo' : ''}`} src={image} title={getTitle(image)}/>
    );
}
