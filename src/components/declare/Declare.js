import React, { useContext } from 'react';
import './declare.css';
import ResumeFile from '../../Resume.pdf';
import { AppData } from '../../App';
function Declare() {
    const { ApplicationData } = useContext(AppData);

    return (
        <section className='declare'>
            <div className='description'>
                I announce that the information and details shared in this resume are correct and inclusive. I take full liability for the correctness of the information.
            </div>
            <h3 className='name'>
                Suraj Ananda Patil
            </h3>
            {ApplicationData.breakpoint.xl ? null : <div className='action-sec'><a href={ResumeFile} className='download-btn' download={true}>
                <i className='fal fa-arrow-to-bottom'></i>
                <span>Download PDF</span>
            </a></div>}
        </section>
    );
}
export default Declare;