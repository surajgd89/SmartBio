import './career-overview.css';
import React, { useContext } from 'react';
import { AppDataContext } from '../../AppDataProvider';
function CareerOverview() {
    const { UserDataJSON } = useContext(AppDataContext);
    const careerOverview = UserDataJSON.careerOverview;
    return (
        <section className='career-overview'>
            <h2 className='heading'>Career Overview</h2>
            <div className='description'>{careerOverview}</div>
        </section>
    );
}
export default CareerOverview;