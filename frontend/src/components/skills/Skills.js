import './Skills.scss';
import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';

function Skills() {
    const { user } = useContext(AppContext);
    const { skills } = user;
    const { parts, description } = skills;
    return (
        <section className="skills">
            <h2 className="heading">Skills</h2>
            <div className="description">{description}</div>
            <div className="list">
                {parts.map((item, index) => {
                    return (
                        <div className="item-group" key={index}>
                            <div className="head">{item.title}</div>

                            <div className="item">
                                {item.list.map((subitem, subindex) => {
                                    return (
                                        <div className="logo" key={subindex}>
                                            <img
                                                src={
                                                    process.env.PUBLIC_URL +
                                                    subitem.logo
                                                }
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
                })}
            </div>
        </section>
    );
}
export default Skills;
