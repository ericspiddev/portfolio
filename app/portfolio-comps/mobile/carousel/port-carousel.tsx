import {useState, useRef} from "react";
import PortBlogEntry from "../../blog/port-blog-entry";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightLong, faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';

export function PortCarousel({items, maxIndex}) {
    const [caroIndex, setCaroIndex] = useState(0);
    const buttonDebounce = useRef(null);

    const handleCaroClick = (isForward) => {
        if(buttonDebounce.current) {
            clearTimeout(buttonDebounce.current);
        }

        buttonDebounce.current = setTimeout(() => {
            if(isForward && caroIndex == maxIndex - 1){
                setCaroIndex(0);
            }
            else if(!isForward && caroIndex == 0) {
                setCaroIndex(maxIndex - 1);
            }
            else {
                let newIndex = isForward ? caroIndex + 1 : caroIndex - 1;
                setCaroIndex(newIndex);
            }
        }, 10);
    };

    return(
    <div className="carousel-container">
        <button onClick={() => handleCaroClick(false)} className="caro-button clickable"> <FontAwesomeIcon icon={faArrowLeftLong} /> </button>
        <PortBlogEntry blog={items[caroIndex]} index={caroIndex} maxIndex={maxIndex}/>
        <button onClick={() => handleCaroClick(true)} className="caro-button clickable"> <FontAwesomeIcon icon={faArrowRightLong}/> </button>
    </div>);
}
