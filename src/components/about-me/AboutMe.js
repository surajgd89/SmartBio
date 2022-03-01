import './about-me.css';
import data from '../../data/data.json';
import React, { useState, useEffect } from 'react';
function AboutMe() {
    const [UserData, setUserData] = useState(data);

    useEffect(() => {
        setUserData(data);
        console.log(UserData.id);
    }, [UserData]);

    return (
        <section className='about-me'>
            <h2 className='heading'>About Me</h2>
            <ul className='list'>
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
            </ul>
        </section>
    );
}
export default AboutMe;