import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState, useRef, useEffect} from 'react';
import {faBars, faCircleInfo, faCode, faCodeCommit, faComment, faEnvelope, faX} from "@fortawesome/free-solid-svg-icons";


export function HamburgerMenu() {
    let [show, setShow] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const handleHamburgerClick = () => {
        setShow(!show)
    }

    const closeHamburger = () => {
        setShow(false)
    }


    useEffect(() => {
        function closeOnOutsideClick(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)
            && buttonRef.current && !buttonRef.current.contains(event.target)) {
                setShow(false);
            }
        }

        document.addEventListener("mousedown", closeOnOutsideClick);
        return () => {
            document.removeEventListener("mousedown", closeOnOutsideClick);
        };
    }, []);

    return (
    <>
        <div className="hamburger-toggle">
            <FontAwesomeIcon icon={faBars} onClick={handleHamburgerClick} size="lg" className={`${show ? 'hidden' : ''}`}/>
            <FontAwesomeIcon icon={faX} onClick={handleHamburgerClick} ref={buttonRef} size="lg" className={`${show ? '' : 'hidden'}`}/>
        </div>

        <div className={`${show ? 'hamburger-menu' : 'hidden'}` } ref={menuRef}>
        <ul className="hamburger-links">
            <a href="#about-section" onClick={closeHamburger}> <li> <span> <FontAwesomeIcon icon={faCircleInfo}/> About </span> </li> </a>
            <a href="#portfolio-section" onClick={closeHamburger}> <li> <span> <FontAwesomeIcon icon={faCode}/> Portfolio </span></li> </a>
            <a href="#contact-section" onClick={closeHamburger}> <li> <span> <FontAwesomeIcon icon={faEnvelope}/> Contact </span></li> </a>
            <a href="#blog-section" onClick={closeHamburger}> <li> <span> <FontAwesomeIcon icon={faComment}/> Blog </span></li> </a>
            <a href="#contributions-section" onClick={closeHamburger}> <li> <span> <FontAwesomeIcon icon={faCodeCommit}/> Contributions </span> </li></a>
        </ul>
        </div>
    </>
    );
}
