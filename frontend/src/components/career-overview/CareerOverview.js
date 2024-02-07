import './career-overview.scss';
import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
function CareerOverview() {
    const { UserData } = useContext(AppContext);
    const { careerOverview } = UserData;
    return (
        <section className='career-overview'>
            <h2 className='heading'>Career Overview</h2>
            <div className='description'>{careerOverview}</div>
        </section>
    );
}
export default CareerOverview;