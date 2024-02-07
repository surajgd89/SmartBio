
import './intro.scss';
import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import TypeAnimation from 'react-type-animation';
function Intro({ isDownload }) {
    const { UserData } = useContext(AppContext);

    const { personalInfo, experience } = UserData;
    const { name, designation } = personalInfo;


    function calcExp(fromDate, toDate) {
        let exp;
        let current = new Date();
        let from = new Date(fromDate);
        let to = new Date(toDate);
        const monthInmiliseconds = 2590000000;
        if (toDate === "Present") {
            let difference = new Date(current - from).getTime();
            let months = Math.floor(difference / monthInmiliseconds);
            let yr = months / 12;
            exp = Math.round(yr * 10) / 10;
        } else {
            let difference = new Date(to - from).getTime();
            let months = Math.floor(difference / monthInmiliseconds);
            let yr = months / 12;
            exp = Math.round(yr * 10) / 10;
        }
        return exp;
    }

    let totalExperience = 0;

    experience.map((item, index) => {
        let workExp = calcExp(item.fromDate, item.toDate);
        totalExperience += workExp;
        totalExperience = Math.floor(totalExperience)
        return totalExperience;
    })


    return (
        <section className='intro'>
            <h1 className='name'>{name.first} <span>{name.last}</span></h1>
            <h2 className='designation' >

                {isDownload ? designation[0] :
                    <TypeAnimation
                        cursor={false}
                        className="type"
                        sequence={designation}
                        wrapper="div"
                        repeat={Infinity}
                    />
                }
            </h2>
            <div className='yr-experience'>
                {totalExperience > 0 ? `${totalExperience} Year's of Experience` : "Fresher"}
            </div>
        </section>
    );
}
export default Intro;