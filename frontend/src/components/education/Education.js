import './education.scss';
import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
function Education() {
    const { user } = useContext(AppContext);
    const { education } = user;

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