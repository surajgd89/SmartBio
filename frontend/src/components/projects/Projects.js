import './projects.css';
import React, { useContext } from 'react';
import { AppDataContext } from '../../AppDataProvider';
function Projects() {
    const { UserDataJSON } = useContext(AppDataContext);
    const projects = UserDataJSON.projects;
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