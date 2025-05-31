import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState, useRef, useEffect} from 'react';
import {faBars, faCircleInfo, faCode, faCodeCommit, faComment, faEnvelope} from "@fortawesome/free-solid-svg-icons";


export function HamburgerMenu() {
    let [show, setShow] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const handleHamburgerClick = () => {
        setShow(!show);
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
            <FontAwesomeIcon icon={faBars} onClick={handleHamburgerClick} ref={buttonRef} size="lg"/>
        </div>

        <div className= {show ? 'hamburger-menu' : 'hidden'} ref={menuRef}>
        <ul>
            <li onClick={handleHamburgerClick} ><a href="#about-section"> <FontAwesomeIcon icon={faCircleInfo}/> About</a> </li>
            <li onClick={handleHamburgerClick}><a href="#portfolio-section"> <FontAwesomeIcon icon={faCode}/> Portfolio </a></li>
            <li onClick={handleHamburgerClick}><a href="#contact-section"> <FontAwesomeIcon icon={faEnvelope}/> Contact</a></li>
            <li onClick={handleHamburgerClick}> <a href="#blog-section"> <FontAwesomeIcon icon={faComment}/> Blog</a></li>
            <li onClick={handleHamburgerClick}> <a href="#contributions-section"> <FontAwesomeIcon icon={faCodeCommit}/> Contributions</a></li>
        </ul>
        </div>
    </>
    );
}
