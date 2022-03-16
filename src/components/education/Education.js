import './education.css';
import React, { useContext } from 'react';
import { AppData } from '../../App';
function Education(props) {
    const { UserData } = useContext(AppData);
    const education = UserData.education;

    return (
        <section className='education'>
            <h2 className='heading'>Education</h2>
            <div className='list'>
                {
                    education.map((item, index) => {
                        return (
                            <div className='item' key={index}>
                                <div className='col-one'>
                                    <h3>{item.level}</h3>
                                    <div>{item.year}</div>
                                </div>
                                <div className='col-two'>
                                    <h3>{item.name}</h3>
                                    <div>{item.from}</div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}
export default Education;