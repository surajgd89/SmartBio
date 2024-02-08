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

    // function LightenDarkenColor(color, percentage) {

    //     var num = parseInt(mycolor[1], 16);
    //     var r = (num >> 16) + percentage;
    //     var b = ((num >> 8) & 0x00FF) + percentage;
    //     var g = (num & 0x0000FF) + percentage;
    //     var newColor = g | (b << 8) | (r << 16);
    //     console.log(`#${newColor.toString(16)}`)
    //     return `#${newColor.toString(16)}`;
    // }


    // function shadeColor(color, percent) {

    //     var mycolor = color.split("#");

    //     var R = parseInt(mycolor[1].substring(1, 3), 16);
    //     var G = parseInt(mycolor[1].substring(3, 5), 16);
    //     var B = parseInt(mycolor[1].substring(5, 7), 16);

    //     R = parseInt(R * (100 + percent) / 100);
    //     G = parseInt(G * (100 + percent) / 100);
    //     B = parseInt(B * (100 + percent) / 100);

    //     R = (R < 255) ? R : 255;
    //     G = (G < 255) ? G : 255;
    //     B = (B < 255) ? B : 255;

    //     R = Math.round(R)
    //     G = Math.round(G)
    //     B = Math.round(B)

    //     var RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
    //     var GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
    //     var BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

    //     return "#" + RR + GG + BB;
    // }


    const colorShade = (col, amt) => {
        col = col.replace(/^#/, '')
        if (col.length === 3) col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2]

        let [r, g, b] = col.match(/.{2}/g);
        ([r, g, b] = [parseInt(r, 16) + amt, parseInt(g, 16) + amt, parseInt(b, 16) + amt])

        r = Math.max(Math.min(255, r), 0).toString(16)
        g = Math.max(Math.min(255, g), 0).toString(16)
        b = Math.max(Math.min(255, b), 0).toString(16)

        const rr = (r.length < 2 ? '0' : '') + r
        const gg = (g.length < 2 ? '0' : '') + g
        const bb = (b.length < 2 ? '0' : '') + b

        return `#${rr}${gg}${bb}`
    }







    useEffect(() => {
        if (!Loading) {
            getOffsetTop();
            getPadding();

            document.documentElement.style.setProperty('--primary', theme.primary);
            document.documentElement.style.setProperty('--primary-half', colorShade(theme.primary, 120));
            document.documentElement.style.setProperty('--primary-light', colorShade(theme.primary, 210));

            document.documentElement.style.setProperty('--secondary', theme.secondary);
            document.documentElement.style.setProperty('--secondary-half', colorShade(theme.secondary, 120));
            document.documentElement.style.setProperty('--secondary-light', colorShade(theme.secondary, 210));

        }
    }, [Loading]);

    if (SidebarActive) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "visible"
    }

    const fetchData = async () => {

        const queryParams = new URLSearchParams(window.location.search);
        let paramValue = queryParams.get('userId');

        if (window.location.search == "" || paramValue == null || paramValue == "") {
            paramValue = "demo"
        }

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
                    <div
                        className={sidebar.active ? 'overlay active' : 'overlay'}
                        onClick={sidebar.sidebarToggle}
                    ></div>
                </div>
            }

        </AppContext.Provider>
    );
}
export default App;
