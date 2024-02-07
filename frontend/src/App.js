import './App.scss';

import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { AppContext } from "./AppContext";
import { RotatingSquare } from 'react-loader-spinner';

import axios from 'axios';
import ScrollToTop from 'react-scroll-to-top';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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

function App() {

    const API_URL = `${process.env.REACT_APP_API_URL}/SmartBio/users`;

    const [Loading, setLoading] = useState(true);
    const [UserData, setUserData] = useState([]);
    const [SidebarActive, setSidebarActive] = useState(false);
    const [HeaderFixed, setHeaderFixed] = useState(false);
    const ContentDiv = useRef('null');
    const [ContentOffsetTop, setContentOffsetTop] = useState(null);
    const [ContentPadding, setContentPadding] = useState(null);
    const [isDownload, setisDownload] = useState(false);
    const [WindowWidth, setWindowWidth] = useState(window.innerWidth);
    const [WindowHeight, setWindowHeight] = useState(window.innerHeight);
    const [XL, setXL] = useState(false);
    const [LG, setLG] = useState(false);
    const [MD, setMD] = useState(false);
    const [SM, setSM] = useState(false);

    const ContentObj = {
        offsetTop: ContentOffsetTop,
        padding: ContentPadding,
    }
    const getDimensions = () => {
        const newWindowWidth = window.innerWidth;
        const newWindowHeight = window.innerHeight;

        setWindowWidth(newWindowWidth);
        setWindowHeight(newWindowHeight);

        setXL(newWindowWidth < 1200);
        setLG(newWindowWidth < 992);
        setMD(newWindowWidth < 768);
        setSM(newWindowWidth < 576);
    };

    const sidebarToggle = () => {
        setSidebarActive(!SidebarActive);
    };

    const getOffsetTop = () => {
        setContentOffsetTop(ContentDiv.current.offsetTop);
    };

    const getPadding = () => {
        const padding = window.getComputedStyle(ContentDiv.current).getPropertyValue('padding-top');
        setContentPadding(padding);
    };

    function Sidebar() {

        if (AppData.breakpoint.xl) {
            return <Navigation sidebarFlag={AppData.sidebar.sidebarToggle} />;
        } else {
            return (
                <>
                    <ProfilePicture />
                    <AboutMe />
                    <PersonalInfo />
                    {(UserData.awards != null) ? <Awards /> : null}
                    {(UserData.followMe != null) ? <FollowMe /> : null}
                    {(UserData.references != null) ? <References /> : null}
                </>
            );
        }
    }

    function getPDF() {
        setisDownload(true);
        setTimeout(() => {
            html2canvas(document.querySelector('.container'), {
                dpi: 144,
                scale: 2,
            }).then((canvas) => {
                let width = canvas.width / 4;
                let height = canvas.height / 4;
                var imgData = canvas.toDataURL('image/JPEG', 1.0);
                var doc = new jsPDF('p', 'px', [width, height], true);
                doc.addImage(imgData, 'JPEG', 0, 0, width, height);

                let now = new Date();
                let date = now.getDate();
                let month = now.getMonth() + 1;
                let year = now.getFullYear();
                let fullname = UserData.personalInfo.name.first + UserData.personalInfo.name.last;
                if (date.toString().length === 1) {
                    date = "0" + date;
                }
                if (month.toString().length === 1) {
                    month = "0" + month;
                }
                doc.save(`SmartBio_${fullname}_${date}${month}${year}.pdf`);
            });
        }, 2000)

    }

    function Content() {

        if (AppData.breakpoint.xl) {
            return (
                <>
                    <AboutMe name="about-me" />
                    <Experience name="experience" />
                    <Skills name="skills" />
                    {(UserData.Certifications !== null) ? <Certifications name="certifications" /> : null}
                    <KeyResponsiblities name="key-responsiblities" />
                    <Projects name="projects" />
                    {(UserData.awards !== null) ? <Awards name="awards" /> : null}
                    <Education name="education" />
                    <PersonalInfo name="personal-info" />
                    {(UserData.references !== null) ? <References name="references" /> : null}
                    {(UserData.followMe !== null) ? <FollowMe name="follow-Me" /> : null}
                </>
            );
        } else {
            return (
                <>
                    <Experience />
                    <Skills />
                    {(UserData.Certifications !== null) ? <Certifications /> : null}
                    <KeyResponsiblities />
                    <Projects />
                    <Education />
                </>
            );
        }
    }

    const AppData = {
        sidebar: {
            active: SidebarActive,
            sidebarToggle: sidebarToggle,
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
        header: {
            fixed: HeaderFixed,
        },

        content: ContentObj,
        isDownload: isDownload,

    };

    useEffect(() => {
        const handleResize = () => {
            getDimensions();
        };
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', () => {
            setHeaderFixed(window.scrollY > 80);
        });

        getDimensions();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', () => {
                setHeaderFixed(window.scrollY > 80);
            });
        };
    }, []);

    useEffect(() => {
        if (!Loading) {
            getOffsetTop();
            getPadding();
        }
    }, [Loading]);


    if (SidebarActive) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "visible"
    }

    const fetchData = async () => {
        const queryParams = new URLSearchParams(window.location.search);
        const paramValue = queryParams.get('userId');
        try {
            await new Promise(resolve => setTimeout(resolve, Math.random() * 2000));
            const response = await axios.get(`${API_URL}?userId=${paramValue}`);
            setUserData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error.message);
            setLoading(true);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <AppContext.Provider value={{ AppData, UserData }}>

            <RotatingSquare
                ariaLabel="rotating-square"
                visible={Loading}
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

            {!Loading &&
                <div className="main-container">
                    <div className="container">

                        <div className={AppData.sidebar.active ? 'sidebar open' : 'sidebar'}>
                            <Sidebar />
                        </div>
                        <div className="wrapper">
                            {AppData.breakpoint.xl ? <Header download={getPDF} /> : null}
                            <div className="content" ref={ContentDiv}>
                                {AppData.breakpoint.xl ? null : <Intro isDownload={AppData.isDownload} />}
                                {AppData.breakpoint.sm ? <Intro isDownload={AppData.isDownload} /> : null}
                                <CareerOverview name="career-overview" />
                                <Content />
                            </div>
                            <Declare download={getPDF} />
                            <Footer />
                        </div>
                    </div>
                    <div
                        className={AppData.sidebar.active ? 'overlay active' : 'overlay'}
                        onClick={AppData.sidebar.sidebarToggle}
                    ></div>
                </div>
            }

        </AppContext.Provider>
    );
}
export default App;
