import './projects.scss';
import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
function Projects() {
    const { UserData } = useContext(AppContext);
    const { projects } = UserData;
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