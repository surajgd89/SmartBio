import './about-me.css';
import React, { useContext } from 'react';
import { AppData } from '../../App';
function AboutMe() {
    const { UserData } = useContext(AppData);
    return (
        <section className='about-me'>
            <h2 className='heading'>About Me</h2>

            {UserData.map((list, listkey) => (
                <ul className='list' key={listkey}>
                    {list.aboutMe.map((item, itemkey) => (
                        <li className='item' key={itemkey}>{item}</li>
                    ))}
                </ul>
            ))}



            {/* <ul className='list'>
                <li className='item'>A quick learner who's eager to learn
                    new skills</li>
                <li className='item'>Can work effectively as part of a
                    team and individually</li>
                <li className='item'>Use creative approach for problem
                    solving</li>
                <li className='item'>Hardworking, energetic and self
                    motivated</li>
                <li className='item'>Reliable and great at time
                    management</li>
                <li className='item'>Well organized and great at
                    Multitasking</li>
                <li className='item'>Love to take on challenges with an
                    open mind</li>
            </ul> */}


        </section>
    );
}
export default AboutMe;