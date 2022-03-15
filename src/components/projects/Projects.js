import './projects.css';
import React, { useContext } from 'react';
import { AppData } from '../../App';
function Projects() {
    const { UserData } = useContext(AppData);
    const projects = UserData.projects;
    return (
        <section className='projects'>
            <h2 className='heading'>Projects</h2>

            <ul className='list'>
                {
                    projects.map((item, index) => {
                        return <li className='item' key={index}>{item}</li>;
                    })
                }

            </ul>
        </section>
    );
}
export default Projects;