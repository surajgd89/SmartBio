import './career-overview.css';
import React, { useContext } from 'react';
import { AppData } from '../../App';
function CareerOverview() {
    const { UserData } = useContext(AppData);
    const careerOverview = UserData.careerOverview;
    return (
        <section className='career-overview'>
            <h2 className='heading'>Career Overview</h2>
            <div className='description'>{careerOverview}</div>
        </section>
    );
}
export default CareerOverview;