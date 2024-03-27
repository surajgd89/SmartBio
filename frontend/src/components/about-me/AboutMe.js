// git mv about-me/about-me.scss about-me/AboutMe.scss 
// git mv awards/awards.scss awards/Awards.scss 
// git mv career-overview/career-overview.scss career-overview/CareerOverview.scss 
// git mv certifications/certifications.scss certifications/Certifications.scss 
// git mv declare/declare.scss declare/Declare.scss 
// git mv education/education.scss education/Education.scss 
// git mv experience/experience.scss experience/Experience.scss 
// git mv follow-me/follow-me.scss follow-me/FollowMe.scss 
// git mv footer/footer.scss footer/Footer.scss 
// git mv header/header.scss header/Header.scss 
// git mv intro/intro.scss intro/Intro.scss 
// git mv key-responsiblities/key-responsiblities.scss key-responsiblities/KeyResponsiblities.scss 
// git mv navigation/navigation.scss navigation/Navigation.scss 
// git mv personal-info/personal-info.scss personal-info/PersonalInfo.scss 
// git mv profile-picture/profile-picture.scss profile-picture/ProfilePicture.scss 
// git mv projects/projects.scss projects/Projects.scss 
// git mv references/references.scss references/References.scss 
// git mv skills/skills.scss skills/Skills.scss


import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import './AboutMe.scss';
function AboutMe() {
    const { user } = useContext(AppContext);
    const { aboutMe } = user;

    return (
        <section className="about-me">
            <h2 className="heading">About Me</h2>
            <ul className="list">
                {aboutMe.map((item, index) => {
                    return (
                        <li className="item" key={index}>
                            {item}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
export default AboutMe;
