import './skills.css';
import React, { useContext } from 'react';
import { AppDataContext } from '../../AppDataProvider';

function Skills() {
    const { UserDataJSON } = useContext(AppDataContext);
    const skills = UserDataJSON.skills;
    const parts = UserDataJSON.skills.parts;
    return (
        <section className="skills">
            <h2 className="heading">Skills</h2>
            <div className="description">
                {skills.description}
            </div>
            <div className="list">
                {parts.map((item, index) => {
                    return (
                        <div className="item-group" key={index}>
                            <div className='head'>{item.title}</div>

                            <div className="item">
                                {
                                    item.list.map((subitem, subindex) => {
                                        //console.log(subitem.logo);
                                        return (
                                            <div className="logo" key={subindex}>
                                                <img
                                                    src={process.env.PUBLIC_URL + subitem.logo}
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
