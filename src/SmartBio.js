import React, { useRef, useState, useEffect, useContext } from 'react';
import { AppDataContext } from './AppDataProvider';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import CareerOverview from './components/career-overview/CareerOverview';
import ProfilePicture from './components/profile-picture/ProfilePicture';
import AboutMe from './components/about-me/AboutMe';
import PersonalInfo from './components/personal-info/PersonalInfo';
import Awards from './components/awards/Awards';
import FollowMe from './components/follow-me/FollowMe';
import References from './components/references/References';
import Navigation from './components/navigation/Navigation';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import Certifications from './components/certifications/Certifications';
import KeyResponsiblities from './components/key-responsiblities/KeyResponsiblities';
import Projects from './components/projects/Projects';
import Declare from './components/declare/Declare';
import Footer from './components/footer/Footer';

function SmartBio() {
    const { ApplicationData, UserDataJSON } = useContext(AppDataContext);
    const ContentDiv = useRef('null');
    const [ContentOffsetTop, setContentOffsetTop] = useState(null);
    const [ContentPadding, setContentPadding] = useState(null);

    const ContentObj = {
        offsetTop: ContentOffsetTop,
        padding: ContentPadding,
    }

    ApplicationData.content = ContentObj;

    const getOffsetTop = () => {
        setContentOffsetTop(ContentDiv.current.offsetTop);
    };

    const getPadding = () => {
        const content = ContentDiv.current;
        const padding = window
            .getComputedStyle(content)
            .getPropertyValue('padding-top');
        setContentPadding(padding);
    };

    function Sidebar() {

        if (ApplicationData.breakpoint.xl) {
            return <Navigation sidebarFlag={ApplicationData.sidebar.sidebarToggle} />;
        } else {
            return (
                <>
                    <ProfilePicture />
                    <AboutMe />
                    <PersonalInfo />
                    {(UserDataJSON.awards != null) ? <Awards /> : null}
                    {(UserDataJSON.followMe != null) ? <FollowMe /> : null}
                    {(UserDataJSON.references != null) ? <References /> : null}
                </>
            );
        }
    }

    function Content() {

        if (ApplicationData.breakpoint.xl) {
            return (
                <>
                    <AboutMe name="about-me" />
                    <Experience name="experience" />
                    <Skills name="skills" />
                    {(UserDataJSON.Certifications !== null) ? <Certifications name="certifications" /> : null}
                    <KeyResponsiblities name="key-responsiblities" />
                    <Projects name="projects" />
                    {(UserDataJSON.awards !== null) ? <Awards name="awards" /> : null}
                    <Education name="education" />
                    <PersonalInfo name="personal-info" />
                    {(UserDataJSON.references !== null) ? <References name="references" /> : null}
                    {(UserDataJSON.followMe !== null) ? <FollowMe name="follow-Me" /> : null}
                </>
            );
        } else {
            return (
                <>
                    <Experience />
                    <Skills />
                    {(UserDataJSON.Certifications !== null) ? <Certifications /> : null}
                    <KeyResponsiblities />
                    <Projects />
                    <Education />
                </>
            );
        }
    }

    useEffect(() => {
        getOffsetTop();
        getPadding();
    });



    return (
        <div className="main-container">
            <div className="container">
                <div className={ApplicationData.sidebar.active ? 'sidebar open' : 'sidebar'}>

                    <Sidebar />
                </div>
                <div className="wrapper">
                    {ApplicationData.breakpoint.xl ? <Header /> : null}
                    <div className="content" ref={ContentDiv}>
                        {ApplicationData.breakpoint.xl ? null : <Intro />}
                        {ApplicationData.breakpoint.sm ? <Intro /> : null}
                        <CareerOverview name="career-overview" />
                        <Content />
                    </div>
                    <Declare />
                    <Footer />
                </div>
            </div>
            <div
                className={ApplicationData.sidebar.active ? 'overlay active' : 'overlay'}
                onClick={ApplicationData.sidebar.sidebarToggle}
            ></div>
        </div>
    )
}
export default SmartBio;