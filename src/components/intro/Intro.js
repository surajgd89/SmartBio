
import './intro.css';
import React, { useContext } from 'react';
import { AppDataContext } from '../../AppDataProvider';
import TypeAnimation from 'react-type-animation';
function Intro(props) {
    const { UserDataJSON } = useContext(AppDataContext);
    const PersonalInfo = UserDataJSON.personalInfo;
    const designation = PersonalInfo.designation;
    const experience = UserDataJSON.experience;

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
            <h1 className='name'>{PersonalInfo.name.first} <span>{PersonalInfo.name.last}</span></h1>
            <h2 className='designation' >

                {props.isDownload ? designation[0] :
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