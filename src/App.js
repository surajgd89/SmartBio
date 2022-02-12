import './App.css';

import React, { useState, useEffect, createContext } from 'react';
import { animateScroll as scroll } from 'react-scroll'
import useScrollBlock from './vendor/useScrollBlock/useScrollBlock';
import ProfilePicture from './components/profile-picture/ProfilePicture';
import AboutMe from './components/about-me/AboutMe';
import PersonalInfo from './components/personal-info/PersonalInfo';
import Awards from './components/awards/Awards';
import FollowMe from './components/follow-me/FollowMe';
import References from './components/references/References';
import Navigation from './components/navigation/Navigation';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import CareerOverview from './components/career-overview/CareerOverview';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import KeyResponsiblities from './components/key-responsiblities/KeyResponsiblities';
import Projects from './components/projects/Projects';
import Declare from './components/declare/Declare';
import Footer from './components/footer/Footer';
export const GlobalInfo = createContext();

function App() {

    const [width, setWidth] = useState(window.innerWidth);
    const [breakpointXL, setBreakpointXL] = useState(false);
    const [breakpointLG, setBreakpointLG] = useState(false);
    const [breakpointMD, setBreakpointMD] = useState(false);
    const [breakpointSM, setBreakpointSM] = useState(false);
    const [SidebarActive, setSidebarActive] = useState(false);
    const [blockScroll, allowScroll] = useScrollBlock();
    const [scrollTop, setScrollTop] = useState(false);
    const [headerHt, setHeaderHt] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollTop(window.scrollY > 80);
        });
        getHeaderHt();
        scroll.scrollToTop();
    }, []);

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
    });

    const updateDimensions = () => {
        setWidth(window.innerWidth);
        width < 1200 ? setBreakpointXL(true) : setBreakpointXL(false);
        width < 992 ? setBreakpointLG(true) : setBreakpointLG(false);
        width < 768 ? setBreakpointMD(true) : setBreakpointMD(false);
        width < 576 ? setBreakpointSM(true) : setBreakpointSM(false);
    };

    function Sidebar(props) {
        const IsbreakpointXL = props.breakpoint;
        if (IsbreakpointXL) {
            return <Navigation sidebarFlag={sidebarToggle} />;
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

    function Content(props) {
        const IsbreakpointXL = props.breakpoint;
        if (IsbreakpointXL) {
            return (
                <>
                    <AboutMe name="about-me" />
                    <Experience name="experience" />
                    <Skills name="skills" />
                    <KeyResponsiblities name="key-responsiblities" />
                    <Projects name="projects" />
                    <Awards name="awards" />
                    <Education name='education' />
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

    function sidebarToggle() {
        setSidebarActive(!SidebarActive);
    };

    const getHeaderHt = (height) => {
        setHeaderHt(height)
    };

    return (
        <GlobalInfo.Provider value={{ getHeaderHt: getHeaderHt, headerHt: headerHt }}>
            <div className="main-container">
                <div className="container">
                    <div className={SidebarActive ? 'sidebar open' : 'sidebar'}>
                        {SidebarActive ? blockScroll() : allowScroll()}
                        <Sidebar breakpoint={breakpointXL} />
                    </div>
                    <div className="wrapper">
                        {breakpointXL ? (
                            <Header
                                sidebarFlag={sidebarToggle}
                                headerFlag={scrollTop}
                                breakpoint={{ XL: breakpointXL, SM: breakpointSM }}
                            />
                        ) : null}
                        <div className="content">
                            {breakpointXL ? null : <Intro />}
                            {breakpointSM ? <Intro /> : null}
                            <CareerOverview name='career-overview' />
                            <Content breakpoint={breakpointXL} />
                        </div>
                        <Declare breakpoint={breakpointXL} />
                        <Footer />

                    </div>
                </div>
                <div
                    className={SidebarActive ? 'overlay active' : 'overlay'}
                    onClick={sidebarToggle}
                ></div>
            </div>
        </GlobalInfo.Provider>
    );
}

export default App;
