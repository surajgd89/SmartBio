import './navigation.css';
import React, { useContext } from 'react';
import { AppDataContext } from '../../AppDataProvider';
import { Link } from 'react-scroll';
function Navigation(props) {
    const { ApplicationData } = useContext(AppDataContext);
    const offsetTop = ApplicationData.content.offsetTop;
    const ContentPadding = parseInt(ApplicationData.content.padding);

    const handleSetActive = (to) => {
        ApplicationData.sidebar.sidebarToggle();
    }


    return (
        <nav className="navigation" >
            <div className="action">
                <button className="close" onClick={() => ApplicationData.sidebar.sidebarToggle()}>
                    <i className="fal fa-times"></i>
                </button>
            </div>
            <ul>
                <li>
                    <Link activeClass="active" onClick={handleSetActive} to="career-overview" spy={true} smooth={true} offset={-(offsetTop + ContentPadding)} duration={1000}>Career Overview</Link>
                </li>
                <li>
                    <Link activeClass="active" onClick={handleSetActive} to="about-me" spy={true} smooth={true} offset={-(offsetTop + ContentPadding)} duration={1000}>About Me</Link>
                </li>
                <li>
                    <Link activeClass="active" onClick={handleSetActive} to="experience" spy={true} smooth={true} offset={-(offsetTop + ContentPadding)} duration={1000}>Experience</Link>
                </li>
                <li>
                    <Link activeClass="active" onClick={handleSetActive} to="skills" spy={true} smooth={true} offset={-(offsetTop + ContentPadding)} duration={1000}>Skills</Link>
                </li>
                <li>
                    <Link activeClass="active" onClick={handleSetActive} to="certifications" spy={true} smooth={true} offset={-(offsetTop + ContentPadding)} duration={1000}>Certifications</Link>
                </li>
                <li>
                    <Link activeClass="active" onClick={handleSetActive} to="key-responsiblities" spy={true} smooth={true} offset={-(offsetTop + ContentPadding)} duration={1000}>Key Responsiblities</Link>
                </li>
                <li>
                    <Link activeClass="active" onClick={handleSetActive} to="projects" spy={true} smooth={true} offset={-(offsetTop + ContentPadding)} duration={1000}>Projects</Link>
                </li>
                <li>
                    <Link activeClass="active" onClick={handleSetActive} to="awards" spy={true} smooth={true} offset={-(offsetTop + ContentPadding)} duration={1000}>Awards</Link>
                </li>
                <li>
                    <Link activeClass="active" onClick={handleSetActive} to="education" spy={true} smooth={true} offset={-(offsetTop + ContentPadding)} duration={1000}>
                        Education
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" onClick={handleSetActive} to="personal-info" spy={true} smooth={true} offset={-(offsetTop + ContentPadding)} duration={500}>Personal Info</Link>
                </li>
                <li>
                    <Link activeClass="active" onClick={handleSetActive} to="references" spy={true} smooth={true} offset={-(offsetTop + ContentPadding)} duration={500}>References</Link>
                </li>
                <li>
                    <Link activeClass="active" onClick={handleSetActive} to="follow-me" spy={true} smooth={true} offset={-(offsetTop + ContentPadding)} duration={500}>Follow Me</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navigation;
