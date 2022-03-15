import TypeAnimation from 'react-type-animation';
import './intro.css';
import React, { useContext } from 'react';
import { AppData } from '../../App';
function Intro() {
    const { UserData } = useContext(AppData);
    const PersonalInfo = UserData.personalInfo;
    const designation = PersonalInfo.designation;
    const totalExperience = PersonalInfo.totalExperience;

    return (
        <section className='intro'>
            <h1 className='name'>{PersonalInfo.name.first} <span>{PersonalInfo.name.last}</span></h1>
            <h2 className='designation' >
                <TypeAnimation
                    cursor={false}
                    className="type"
                    sequence={designation}
                    wrapper="div"
                    repeat={Infinity}
                />
            </h2>
            <div className='yr-experience'>
                {
                    (totalExperience >= 12) ? `${totalExperience / 12} Year's of Experience`
                        : (totalExperience < 12 && totalExperience > 0) ? `${totalExperience} Month's of Experience` : (totalExperience == 0) ? "Fresher" : null}
            </div>
        </section>
    );
}
export default Intro;