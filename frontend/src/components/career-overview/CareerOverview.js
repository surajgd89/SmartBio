import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import './CareerOverview.scss';

function CareerOverview() {
    const { user } = useContext(AppContext);
    const { careerOverview } = user;
    return (
        <section className="career-overview">
            <h2 className="heading">Career Overview</h2>
            <div className="description">{careerOverview}</div>
        </section>
    );
}
export default CareerOverview;
