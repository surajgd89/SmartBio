import './navigation.css';
import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-scroll';
import { AppData } from '../../App';
function Navigation(props) {
    const { ApplicationData } = useContext(AppData);
    const [Height, setHeight] = useState(ApplicationData.header.height);


    const handleSetActive = (to) => {
        ApplicationData.sidebar.sidebarToggle();
    }

    useEffect(() => {
        setHeight(ApplicationData.header.height);
    });


    return (
        <nav className="navigation" >
            <div className="action">
                <button className="close" onClick={() => ApplicationData.sidebar.sidebarToggle()}>
                    <i className="fal fa-times"></i>
                </button>
            </div>
            <ul>
                <li>
                    <Link activeClass="active" onClick={handleSetActive} to="career-overview" spy={true} smooth={true} offset={-(Height + 20)} duration={1000}>Career Overview</Link>
                </li>
                <li>
                    <Link activeClass="active" onClick={handleSetActive} to="about-me" spy={true} smooth={true} offset={-(Height + 20)} duration={1000}>About Me</Link>
                </li>
                <li>
                    <Link activeClass="active" onClick={handleSetActive} to="experience" spy={true} smooth={true} offset={-(Height + 20)} duration={1000}>Experience</Link>
                </li>
                <li>
                    <Link activeClass="active" onClick={handleSetActive} to="skills" spy={true} smooth={true} offset={-(Height + 20)} duration={1000}>Skills</Link>
                </li>
                <li>
                    <Link activeClass="active" onClick={handleSetActive} to="key-responsiblities" spy={true} smooth={true} offset={-(Height + 20)} duration={1000}>Key Responsiblities</Link>
                </li>
                <li>
                    <Link activeClass="active" onClick={handleSetActive} to="projects" spy={true} smooth={true} offset={-(Height + 20)} duration={1000}>Projects</Link>
                </li>
                <li>
                    <Link activeClass="active" onClick={handleSetActive} to="awards" spy={true} smooth={true} offset={-(Height + 20)} duration={1000}>Awards</Link>
                </li>
                <li>
                    <Link activeClass="active" onClick={handleSetActive} to="education" spy={true} smooth={true} offset={-(Height + 20)} duration={1000}>
                        Education
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" onClick={handleSetActive} to="personal-info" spy={true} smooth={true} offset={-(Height + 20)} duration={500}>Personal Info</Link>
                </li>
                <li>
                    <Link activeClass="active" onClick={handleSetActive} to="references" spy={true} smooth={true} offset={-(Height + 20)} duration={500}>References</Link>
                </li>
                <li>
                    <Link activeClass="active" onClick={handleSetActive} to="follow-me" spy={true} smooth={true} offset={-(Height + 20)} duration={500}>Follow Me</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navigation;
