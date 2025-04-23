import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export function PortFavButton({ favIcon, redirectLink, downloadable=false, title}) {
    if (downloadable) {
        return (
            <>
                <a href={redirectLink} download title={title}>
                    <FontAwesomeIcon icon={favIcon} size="3x"/>
                </a>
            </>
        );
    }
    else {
        return(
            <>
                <a href={redirectLink} title={title} target="_blank">
                    <FontAwesomeIcon icon={favIcon} size="3x"/>
                </a>
            </>
        );
    }
}
