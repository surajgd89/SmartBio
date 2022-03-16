import './experience.css';
import React, { useContext } from 'react';
import { AppData } from '../../App';
function Experience() {
    const { UserData } = useContext(AppData);
    const experience = UserData.experience;
    function countExp(fromDate, toDate) {
        let exp;
        let current = new Date();
        let from = new Date(fromDate);
        let to = new Date(toDate);
        const monthInmiliseconds = 2590000000;

        if (toDate == "Present") {
            let difference = new Date(current - from).getTime();
            let months = Math.floor(difference / monthInmiliseconds);
            let yr = months / 12;
            let num = Math.round(yr * 10) / 10;
            let in_years = num.toString().split('.')[0];
            let in_months = num.toString().split('.')[1];

            if (in_years === '0') {
                exp = `${in_years} years`
            } else if (in_months === '0') {
                exp = `${in_months} months`
            } else {
                exp = `${in_years} year, ${in_months} months`
            }

        } else {
            let difference = new Date(to - from).getTime();
            let months = Math.floor(difference / monthInmiliseconds);
            let yr = months / 12;
            let num = Math.round(yr * 10) / 10;
            let in_years = num.toString().split('.')[0];
            let in_months = num.toString().split('.')[1];
            if (in_years === '0') {
                exp = `${in_years} years`
            } else if (in_months === '0') {
                exp = `${in_months} months`
            } else {
                exp = `${in_years} year, ${in_months} months`
            }
        }
        return exp;
    }

    return (
        <section className='experience'>
            <h2 className='heading'>Experience</h2>
            <div className='list'>
                {
                    experience.map((item, index) => {
                        return (
                            <div className='item' key={index}>
                                <div className='col-one'>
                                    <h3>{new Date(item.fromDate).getFullYear()} - {item.toDate != "Present" ? new Date(item.toDate).getFullYear() : "Present"}</h3>
                                    <div>{countExp(item.fromDate, item.toDate)}</div>
                                </div>
                                <div className='col-two'>
                                    <h3>{item.companyName}</h3>
                                    <div>{item.designation}</div>
                                </div>
                            </div>
                        );
                    })
                }

            </div>
        </section>
    );
}
export default Experience;