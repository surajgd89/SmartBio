import React, { useRef, useState, useEffect, useContext } from 'react';
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
import KeyResponsiblities from './components/key-responsiblities/KeyResponsiblities';
import Projects from './components/projects/Projects';
import Declare from './components/declare/Declare';
import Footer from './components/footer/Footer';
import { AppData } from './App';



function SmartBio() {
    const ContentDiv = useRef('null');
    const { ApplicationData, UserData } = useContext(AppData);
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
                    <Awards />
                    <FollowMe />
                    <References />
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
                    <KeyResponsiblities name="key-responsiblities" />
                    <Projects name="projects" />
                    <Awards name="awards" />
                    <Education name="education" />
                    <PersonalInfo name="personal-info" />
                    <References name="references" />
                    <FollowMe name="follow-Me" />
                </>
            );
        } else {
            return (
                <>
                    <Experience />
                    <Education />
                    <Skills />
                    <KeyResponsiblities />
                    <Projects />
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
                    {ApplicationData.sidebar.active ? ApplicationData.scroll.blockScroll : ApplicationData.scroll.allowScroll}
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