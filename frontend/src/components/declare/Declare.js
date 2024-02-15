import './declare.scss';
import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';

function Declare({ download, AppData }) {
    const { user } = useContext(AppContext);

    const { personalInfo, declare } = user

    const fullName = `${personalInfo.name.first} ${personalInfo.name.middle} ${personalInfo.name.last}`;

    return (
        <section className="declare">
            <div className="description">{declare}</div>
            <h3 className="name">{fullName}</h3>
            {AppData.breakpoint.xl ? null : (
                <div className="action-sec" data-html2canvas-ignore="true">
                    <button type='button' className="download-btn" onClick={download}>
                        <i className="fal fa-arrow-to-bottom"></i>
                        <span>Download PDF</span>
                    </button>
                </div>
            )
            }
        </section >
    );
}
export default Declare;
