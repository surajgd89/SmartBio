import './declare.css';
//import ResumeFile from '../../Resume.pdf';
import React, { useContext } from 'react';
import { AppDataContext } from '../../AppDataProvider';
import ReactToPdf from 'react-to-pdf';
function Declare() {
    const { ApplicationData, UserDataJSON } = useContext(AppDataContext);
    const PersonalInfo = UserDataJSON.personalInfo;
    const declare = UserDataJSON.declare;
    const fullName = `${PersonalInfo.name.first} ${PersonalInfo.name.middle} ${PersonalInfo.name.last}`;

    return (
        <section className='declare'>
            <div className='description'>
                {declare}
            </div>
            <h3 className='name'>
                {fullName}
            </h3>
            {ApplicationData.breakpoint.xl ? null :
                <div className='action-sec'>
                    <ReactToPdf targetRef={ref} filename={`SmartBio_${UserDataJSON.passkey}.pdf`}>
                        {
                            ({ toPdf }) => {
                                <button onClick={toPdf} className='download-btn'><i className='fal fa-arrow-to-bottom'></i><span>Download PDF</span> </button>
                                //             <a href={ResumeFile} className='download-btn' download={true}>
                                //     <i className='fal fa-arrow-to-bottom'></i>
                                //     <span>Download PDF</span>
                                // </a>
                            }
                        }
                    </ReactToPdf>

                </div>
            }
        </section>
    );
}
export default Declare;

