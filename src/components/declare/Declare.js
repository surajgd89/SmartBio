import React, { useContext } from 'react';
import './declare.css';
import ResumeFile from '../../Resume.pdf';
import { AppData } from '../../App';
function Declare() {
    const { ApplicationData, UserData } = useContext(AppData);
    const PersonalInfo = UserData.personalInfo;
    const declare = UserData.declare;
    const fullName = `${PersonalInfo.name.first} ${PersonalInfo.name.middle} ${PersonalInfo.name.last}`;

    return (
        <section className='declare'>
            <div className='description'>
                {declare}
            </div>
            <h3 className='name'>
                {fullName}
            </h3>
            {ApplicationData.breakpoint.xl ? null : <div className='action-sec'><a href={ResumeFile} className='download-btn' download={true}>
                <i className='fal fa-arrow-to-bottom'></i>
                <span>Download PDF</span>
            </a></div>}
        </section>
    );
}
export default Declare;