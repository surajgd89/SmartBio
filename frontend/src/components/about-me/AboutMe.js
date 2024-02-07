import './about-me.scss';
import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';

function AboutMe() {
    const { UserData } = useContext(AppContext);
    const { aboutMe } = UserData;

    return (
        <section className='about-me'>
            <h2 className='heading'>About Me</h2>
            <ul className='list'>

                {
                    aboutMe.map((item, index) => {
                        return <li className='item' key={index}>{item}</li>;
                    })
                }

            </ul>
        </section>
    );
}
export default AboutMe;