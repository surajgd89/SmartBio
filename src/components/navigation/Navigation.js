import './navigation.css';
import { Link } from 'react-scroll'

function Navigation(props) {
    const sidebarToggle = props.sidebarFlag;

    return (
        <nav className="navigation" >
            <div className="action">
                <button className="close" onClick={sidebarToggle}>
                    <i className="fal fa-times"></i>
                </button>
            </div>
            <ul>
                <li>
                    <Link activeClass="active" to="CareerOverview" spy={true} smooth={true} offset={-100} duration={1000}>Career Overview</Link>
                </li>
                <li>
                    <Link to="AboutMe" spy={true} smooth={true} offset={-100} duration={1000}>About Me</Link>
                </li>
                <li>
                    <Link to="Experience" spy={true} smooth={true} offset={-100} duration={1000}>Experience</Link>
                </li>
                <li>
                    <Link to="Skills" spy={true} smooth={true} offset={-100} duration={1000}>Skills</Link>
                </li>
                <li>
                    <Link to="KeyResponsiblities" spy={true} smooth={true} offset={-100} duration={1000}>Key Responsiblities</Link>
                </li>
                <li>
                    <Link to="Projects" spy={true} smooth={true} offset={-100} duration={1000}>Projects</Link>
                </li>
                <li>
                    <Link to="Awards" spy={true} smooth={true} offset={-100} duration={1000}>Awards</Link>
                </li>
                <li>
                    <Link to="Education" spy={true} smooth={true} offset={-100} duration={1000}>
                        Education
                    </Link>
                </li>
                <li>
                    <Link to="PersonalInfo" spy={true} smooth={true} offset={-100} duration={500}>Personal Info</Link>
                </li>
                <li>
                    <Link to="References" spy={true} smooth={true} offset={-100} duration={500}>References</Link>
                </li>
                <li>
                    <Link to="FollowMe" spy={true} smooth={true} offset={-100} duration={500}>Follow Me</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navigation;
