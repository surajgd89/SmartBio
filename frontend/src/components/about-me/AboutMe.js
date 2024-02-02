import './about-me.css';
import React, { useContext } from 'react';
import { AppDataContext } from '../../AppDataProvider';

function AboutMe() {
    const { UserDataJSON } = useContext(AppDataContext);
    const AboutList = UserDataJSON.aboutMe;

    return (
        <section className='about-me'>
            <h2 className='heading'>About Me</h2>
            <ul className='list'>

                {
                    AboutList.map((item, index) => {
                        return <li className='item' key={index}>{item}</li>;
                    })
                }

            </ul>
        </section>
    );
}
export default AboutMe;