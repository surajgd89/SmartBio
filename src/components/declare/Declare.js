import './declare.css';
import React, { useContext, useRef } from 'react';
import { AppDataContext } from '../../AppDataProvider';

function Declare(props) {
    const { ApplicationData, UserDataJSON } = useContext(AppDataContext);
    const PersonalInfo = UserDataJSON.personalInfo;
    const declare = UserDataJSON.declare;
    const fullName = `${PersonalInfo.name.first} ${PersonalInfo.name.middle} ${PersonalInfo.name.last}`;

    return (
        <section className="declare">
            <div className="description">{declare}</div>
            <h3 className="name">{fullName}</h3>
            {ApplicationData.breakpoint.xl ? null : (
                <div className="action-sec" data-html2canvas-ignore="true">
                    <a className="download-btn" onClick={props.download}>
                        <i className="fal fa-arrow-to-bottom"></i>
                        <span>Download PDF</span>
                    </a>
                </div>
            )}
        </section>
    );
}
export default Declare;
