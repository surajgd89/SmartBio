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
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [headerHeight, setHeaderHeight] = useState(false);
    const [blockScroll, allowScroll] = useScrollBlock();
    const [isXL, setIsXL] = useState(false);
    const [isLG, setIsLG] = useState(false);
    const [isMD, setIsMD] = useState(false);
    const [isSM, setIsSM] = useState(false);
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setfixed(window.scrollY > 80);
        });
        getHeaderHeight();
        goToTop();
    }, []);

    useEffect(() => {
        getDimensions();
        window.addEventListener('resize', getDimensions);
        console.log(globalData);
    });

    const getDimensions = () => {
        setWidth(window.innerWidth);
        (windowWidth < 1200) ? setIsXL(true) : setIsXL(false);
        (windowWidth < 992) ? setIsLG(true) : setIsLG(false);
        (windowWidth < 768) ? setIsMD(true) : setIsMD(false);
        (windowWidth < 576) ? setIsSM(true) : setIsSM(false);
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
        setIsSidebarActive(!isSidebarActive);
    };

    const getHeaderHeight = (height) => {
        setHeaderHeight(height)
    };

    const goToTop = () => {
        scroll.scrollToTop();
    }

    const appData = [
        {
            "sidebar": isActive,
            "breakpoint": {
                "xl": isXL,
                "lg": isLG,
                "md": isMD,
                "sm": isSM,
            },
            "window": {
                "width": windowWidth,
                "height": windowHeight,
            },
            "scroll": {
                "allow": blockScroll(),
                "block": allowScroll(),
            },
            "header": {
                "height": headerHeight,
                "fixed": isfixed,
            },
        }
    ];


    return (
        <GlobalInfo.Provider value={appData}>
            <div className="main-container">
                <div className="container">
                    <div className={isSidebarActive ? 'sidebar open' : 'sidebar'}>
                        {isSidebarActive ? blockScroll() : allowScroll()}
                        <Sidebar breakpoint={isXL} />
                    </div>
                    <div className="wrapper">
                        {isXL ? (
                            <Header
                                sidebarFlag={sidebarToggle}
                                headerFlag={fixed}
                                breakpoint={{ XL: isXL, SM: isSM }}
                            />
                        ) : null}
                        <div className="content">
                            {isXL ? null : <Intro />}
                            {isSM ? <Intro /> : null}
                            <CareerOverview name='career-overview' />
                            <Content breakpoint={isXL} />
                        </div>
                        <Declare breakpoint={isXL} />
                        <Footer />

                    </div>
                </div>
                <div
                    className={isSidebarActive ? 'overlay active' : 'overlay'}
                    onClick={sidebarToggle}
                ></div>
            </div>
        </GlobalInfo.Provider>
    );
}

export default App;
