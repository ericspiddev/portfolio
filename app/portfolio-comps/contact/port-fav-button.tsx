import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export function PortFavButton({ favIcon, redirectLink, downloadable=false}) {
    if (downloadable) {
        return ( 
            <>            
                <a href={redirectLink} download > 
                    <FontAwesomeIcon icon={favIcon} size="3x"/>
                </a>
            </>
        );
    }
    else {
        return(
            <>            
                <a href={redirectLink} >
                    <FontAwesomeIcon icon={favIcon} size="3x"/>
                </a>
            </>
        );
    }
}
