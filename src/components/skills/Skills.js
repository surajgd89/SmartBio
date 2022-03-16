import './skills.css';
import React, { useContext } from 'react';
import { AppData } from '../../App';
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
    const { UserData } = useContext(AppData);
    const skills = UserData.skills;
    const parts = UserData.skills.parts;
    return (
        <section className="skills">
            <h2 className="heading">Skills</h2>
            <div className="description">
                {skills.description}
            </div>
            <div className="list">

                {
                    parts.map((item, index) => {
                        return (
                            <div className="item-group" key={index}>
                                <div className='head'>{item.title}</div>

                                <div className="item">
                                    {
                                        item.list.map((subitem, subindex) => {
                                            return (
                                                <div className="logo" key={subindex}>
                                                    <img
                                                        src={subitem.logo}
                                                        alt={subitem.name}
                                                        title={subitem.name}
                                                    />
                                                    <span>{subitem.name}</span>
                                                </div>
                                            );

                                        })}
                                </div>
                            </div>
                        );
                    })
                }



                {/* <div className="item-group">
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
                </div>
                <div className="item-group">
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
                </div> */}

            </div>
        </section>
    );
}
export default Skills;
