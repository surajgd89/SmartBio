import './skills.css';
import PhotoshopLogo from '../../images/photoshop.png';
import IllustratorLogo from '../../images/illustrator.png';
import XdLogo from '../../images/xd.png';
import CorelDrawLogo from '../../images/coreldraw.png';
import HtmlLogo from '../../images/html.png';
import CssLogo from '../../images/css.png';
import JavascriptLogo from '../../images/javascript.png';
import BootstrapLogo from '../../images/bootstrap.png';
import ReactLogo from '../../images/react.png';
import SassLogo from '../../images/sass.png';
import NodeJsLogo from '../../images/nodejs.png';
import NpmLogo from '../../images/npm.png';
import GitLogo from '../../images/git.png';
import VSCodeLogo from '../../images/vscode.png';
import JqueryLogo from '../../images/jquery.png';
import SvgLogo from '../../images/svg.png';
import JsonLogo from '../../images/json.png';
function Skills() {
    return (
        <section className="skills">
            <h2 className="heading">Skills</h2>
            <div className="description">
                HTML5, CSS3, SASS, JQuery, Bootstrap, JavaScript, JSON, SVG,
                React, JSON, NodeJs, Npm, Adobe Photoshop, CorelDraw, Adobe
                Illustrator,Adobe XD, VS Code, Ajax, Git
            </div>
            <div className="list">
                <div className='head'>UI / UX Design</div>
                <div className="item">
                    <div className="logo">
                        <img
                            src={PhotoshopLogo}
                            alt="Adobe Photoshop"
                            title="Adobe Photoshop"
                        />
                        <span>Adobe Photoshop</span>
                    </div>
                    <div className="logo">
                        <img
                            src={IllustratorLogo}
                            alt="Adobe Illustrator"
                            title="Adobe Illustrator"
                        />
                        <span>Adobe Illustrator</span>
                    </div>
                    <div className="logo">
                        <img src={XdLogo} alt="Adobe XD" title="Adobe XD" />
                        <span>Adobe XD</span>
                    </div>
                    <div className="logo">
                        <img
                            src={CorelDrawLogo}
                            alt="CorelDRAW"
                            title="CorelDRAW"
                        />
                        <span>CorelDRAW</span>
                    </div>
                </div>
                <div className='head'>Front End Development </div>
                <div className="item">
                    <div className="logo">
                        <img src={HtmlLogo} alt="HTML5" title="HTML5" />
                        <span>HTML5</span>
                    </div>
                    <div className="logo">
                        <img src={CssLogo} alt="CSS3" title="CSS3" />
                        <span>CSS3</span>
                    </div>
                    <div className="logo">
                        <img
                            src={JavascriptLogo}
                            alt="JavaScript"
                            title="JavaScript"
                        />
                        <span>JavaScript</span>
                    </div>
                    <div className="logo">
                        <img src={JqueryLogo} alt="JQuery" title="JQuery" />
                        <span>JQuery</span>
                    </div>
                    <div className="logo">
                        <img
                            src={BootstrapLogo}
                            alt="Bootstrap"
                            title="Bootstrap"
                        />
                        <span>Bootstrap</span>
                    </div>
                    <div className="logo">
                        <img src={SassLogo} alt="SASS" title="SASS" />
                        <span>SASS</span>
                    </div>
                    <div className="logo">
                        <img src={SvgLogo} alt="SVG" title="SVG" />
                        <span>SVG</span>
                    </div>
                    <div className="logo">
                        <img src={ReactLogo} alt="React" title="React" />
                        <span>React</span>
                    </div>
                    <div className="logo">
                        <img src={JsonLogo} alt="JSON" title="JSON" />
                        <span>JSON</span>
                    </div>
                </div>
                <div className='head'>Other Key Tools </div>
                <div className="item">
                    <div className="logo">
                        <img src={VSCodeLogo} alt="VS Code" title="VS Code" />
                        <span>VS Code</span>
                    </div>
                    <div className="logo">
                        <img src={GitLogo} alt="Git" title="Git" />
                        <span>Git</span>
                    </div>
                    <div className="logo">
                        <img src={NodeJsLogo} alt="NodeJs" title="NodeJs" />
                        <span>NodeJs</span>
                    </div>
                    <div className="logo">
                        <img src={NpmLogo} alt="Npm" title="Npm" />
                        <span>npm</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Skills;
