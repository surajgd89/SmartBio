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
import UsersListing from './components/users-listing/UsersListing';

function App() {

    const API_URL = `${process.env.REACT_APP_API_URL}/SmartBio/users`;

    const [Loading, setLoading] = useState(true);
    const [UserData, setUserData] = useState([]);
    const [AllUserData, setAllUserData] = useState([]);
    const [SidebarActive, setSidebarActive] = useState(false);
    const [HeaderFixed, setHeaderFixed] = useState(false);
    const ContentDiv = useRef('null');
    const [ContentOffsetTop, setContentOffsetTop] = useState(null);
    const [ContentPadding, setContentPadding] = useState(null);
    const [isDownload, setisDownload] = useState(false);


    const [XL, setXL] = useState(false);
    const [LG, setLG] = useState(false);
    const [MD, setMD] = useState(false);
    const [SM, setSM] = useState(false);

    const ContentObj = {
        offsetTop: ContentOffsetTop,
        padding: ContentPadding,
    }



    const getDimensions = () => {
        const WindowWidth = window.innerWidth;
        setXL(WindowWidth < 1200);
        setLG(WindowWidth < 992);
        setMD(WindowWidth < 768);
        setSM(WindowWidth < 576);
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

    const colorShade = (hexColor, magnitude) => {
        hexColor = hexColor.replace(`#`, ``);
        if (hexColor.length === 6) {
            const decimalColor = parseInt(hexColor, 16);
            let r = (decimalColor >> 16) + magnitude;
            r > 255 && (r = 255);
            r < 0 && (r = 0);
            let g = (decimalColor & 0x0000ff) + magnitude;
            g > 255 && (g = 255);
            g < 0 && (g = 0);
            let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
            b > 255 && (b = 255);
            b < 0 && (b = 0);
            return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
        } else {
            return hexColor;
        }
    };

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
        header: {
            fixed: HeaderFixed,
        },
        content: ContentObj,
        isDownload: isDownload,

    };

    const { sidebar, breakpoint } = AppData;
    const { certifications, awards, references, followMe, theme } = UserData;

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

            if (!AllUserData.length) {
                getOffsetTop();
                getPadding();
                document.documentElement.style.setProperty('--primary', theme.primary);
                document.documentElement.style.setProperty('--primary-half', colorShade(theme.primary, 110));
                document.documentElement.style.setProperty('--primary-light', colorShade(theme.primary, 210));
                document.documentElement.style.setProperty('--border', colorShade(theme.primary, 190));
                document.documentElement.style.setProperty('--secondary', theme.secondary);
                document.documentElement.style.setProperty('--secondary-half', colorShade(theme.secondary, 110));
                document.documentElement.style.setProperty('--secondary-light', colorShade(theme.secondary, 210));
            }

        }
    }, [Loading, AllUserData.length]);

    useEffect(() => {
        const fetchData = async () => {

            const queryParams = new URLSearchParams(window.location.search);
            let paramValue = queryParams.get('user');

            if (window.location.search === "" || paramValue === null || paramValue === "") {

                try {
                    await new Promise(resolve => setTimeout(resolve, Math.random() * 2000));
                    const response = await axios.get(`${API_URL}`);
                    setAllUserData(response.data);
                } catch (error) {
                    console.error('Error fetching All user data:', error.message);
                    setLoading(true);
                    throw error;
                } finally {
                    setLoading(false);
                }

            } else {

                try {
                    await new Promise(resolve => setTimeout(resolve, Math.random() * 2000));
                    const response = await axios.get(`${API_URL}?user=${paramValue}`);
                    setUserData(response.data);
                } catch (error) {
                    console.error('Error fetching user data:', error.message);
                    setLoading(true);
                    throw error;
                } finally {
                    setLoading(false);
                }

            }

        };
        fetchData();
    }, []);



    if (SidebarActive) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "visible"
    }

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
                <>
                    {AllUserData.length ?
                        <UsersListing AllUserData={AllUserData} />
                        :
                        <div className="main-container">
                            <div className="container">
                                <div className={sidebar.active ? 'sidebar open' : 'sidebar'}>
                                    <Sidebar />
                                </div>
                                <div className="wrapper">
                                    {breakpoint.xl && <Header download={getPDF} />}
                                    <div className="content" ref={ContentDiv}>
                                        {!breakpoint.xl && <Intro isDownload={isDownload} />}
                                        {breakpoint.sm && <Intro isDownload={isDownload} />}
                                        <CareerOverview name="career-overview" />
                                        {breakpoint.xl ?
                                            <>
                                                <AboutMe name="about-me" />
                                                <Experience name="experience" />
                                                <Skills name="skills" />
                                                {certifications !== null && <Certifications name="certifications" />}
                                                <KeyResponsiblities name="key-responsiblities" />
                                                <Projects name="projects" />
                                                {awards !== null && <Awards name="awards" />}
                                                <Education name="education" />
                                                <PersonalInfo name="personal-info" />
                                                {references !== null && <References name="references" />}
                                                {followMe !== null && <FollowMe name="follow-Me" />}
                                            </>
                                            :
                                            <>
                                                <Experience />
                                                <Skills />
                                                {certifications !== null && <Certifications />}
                                                <KeyResponsiblities />
                                                <Projects />
                                                <Education />
                                            </>
                                        }
                                    </div>
                                    <Declare download={getPDF} />
                                    <Footer />
                                </div>
                            </div>
                            <div className={sidebar.active ? 'overlay active' : 'overlay'}
                                onClick={sidebar.sidebarToggle}></div>

                        </div>
                    }
                </>
            }

        </AppContext.Provider >
    );
}
export default App;
