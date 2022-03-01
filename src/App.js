import './App.css';
import React, { useState, useEffect, createContext, useRef } from 'react';
import { RotatingSquare } from 'react-loader-spinner';
import ScrollToTop from 'react-scroll-to-top';
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
export const AppData = createContext();

function App() {
    const [Loading, setLoading] = useState(true);
    const [WindowWidth, setWindowWidth] = useState(window.innerWidth);
    const [WindowHeight, setWindowHeight] = useState(window.innerHeight);
    const [blockScroll, allowScroll] = useScrollBlock();
    const [XL, setXL] = useState(false);
    const [LG, setLG] = useState(false);
    const [MD, setMD] = useState(false);
    const [SM, setSM] = useState(false);
    const [SidebarActive, setSidebarActive] = useState(false);
    const [HeaderFixed, setHeaderFixed] = useState(false);
    const ContentDiv = useRef('null');
    const [ContentOffsetTop, setContentOffsetTop] = useState(null);
    const [ContentPadding, setContentPadding] = useState(null);
    const getDimensions = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
        WindowWidth < 1200 ? setXL(true) : setXL(false);
        WindowWidth < 992 ? setLG(true) : setLG(false);
        WindowWidth < 768 ? setMD(true) : setMD(false);
        WindowWidth < 576 ? setSM(true) : setSM(false);
    };

    function sidebarToggle() {
        setSidebarActive(!SidebarActive);
    }

    const getOffsetTop = () => {
        setContentOffsetTop(ContentDiv.current.offsetTop);
    };

    function Sidebar(props) {
        const XL = props.breakpoint;

        if (XL) {
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
        const XL = props.breakpoint;
        if (XL) {
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

    const getPadding = () => {
        const content = ContentDiv.current;
        const padding = window
            .getComputedStyle(content)
            .getPropertyValue('padding-top');
        setContentPadding(padding);
    };

    useEffect(() => {
        window.addEventListener('resize', getDimensions);
        window.addEventListener('scroll', () => {
            setHeaderFixed(window.scrollY > 80);
        });
        getDimensions();
        getOffsetTop();
        getPadding();
        setLoading(false);
    });

    const ApplicationData = {
        loading: Loading,
        sidebar: {
            active: SidebarActive,
            sidebarToggle: sidebarToggle,
        },
        content: {
            offsetTop: ContentOffsetTop,
            padding: ContentPadding,
        },
        breakpoint: {
            xl: XL,
            lg: LG,
            md: MD,
            sm: SM,
        },
        window: {
            width: WindowWidth,
            height: WindowHeight,
        },
        scroll: {
            blockScroll: blockScroll(),
            allowScroll: allowScroll(),
        },
        header: {
            fixed: HeaderFixed,
        },
    };

    return (
        <AppData.Provider value={{ ApplicationData }}>

            <RotatingSquare
                ariaLabel="rotating-square"
                visible={ApplicationData.loading}
                height="70"
                width="70"
                wrapperClass="loader"
                strokeWidth="5"
            />

            <ScrollToTop
                height="20"
                width="20"
                smooth={true}
                component=""
                className="scroll-to-top"
            />

            <div className="main-container">
                <div className="container">
                    <div className={SidebarActive ? 'sidebar open' : 'sidebar'}>
                        {SidebarActive ? blockScroll() : allowScroll()}
                        <Sidebar breakpoint={XL} />
                    </div>
                    <div className="wrapper">
                        {XL ? <Header /> : null}
                        <div className="content" ref={ContentDiv}>
                            {XL ? null : <Intro />}
                            {SM ? <Intro /> : null}
                            <CareerOverview name="career-overview" />
                            <Content breakpoint={XL} />
                        </div>
                        <Declare />
                        <Footer />
                    </div>
                </div>
                <div
                    className={SidebarActive ? 'overlay active' : 'overlay'}
                    onClick={sidebarToggle}
                ></div>
            </div>
        </AppData.Provider>
    );
}

export default App;
