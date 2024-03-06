import { AppContext } from "./AppContext";
import { FetchUser } from './API';

import { useRef, useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import ScrollToTop from 'react-scroll-to-top';
import './App.scss';


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

import UserNotFound from './components/user-not-found/UserNotFound'
import ProductLanding from './components/product-landing/ProductLanding'


function App() {


    const [user, setUser] = useState({});
    const [Loading, setLoading] = useState(true);
    const [id, setId] = useState('');
    const { certifications, awards, references, followMe, theme } = user;

    const [SidebarActive, setSidebarActive] = useState(false);
    const [HeaderFixed, setHeaderFixed] = useState(false);
    const ContentDiv = useRef();
    const [ContentOffsetTop, setContentOffsetTop] = useState(null);
    const [ContentPadding, setContentPadding] = useState(null);
    const [isDownload, setisDownload] = useState(false);

    const [XL, setXL] = useState(false);
    const [SM, setSM] = useState(false);



    const getPDF = () => {
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
                let fullname = user.personalInfo.name.first + user.personalInfo.name.last;
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

    const sidebarToggle = () => {
        setSidebarActive(!SidebarActive);
    };

    const getDimensions = () => {
        const WindowWidth = window.innerWidth;
        setXL(WindowWidth < 1200);
        setSM(WindowWidth < 576);
    };

    const getOffsetTop = () => {
        setContentOffsetTop(ContentDiv.current.offsetTop);
    };

    const getPadding = () => {
        const padding = window.getComputedStyle(ContentDiv.current).getPropertyValue('padding-top');
        setContentPadding(padding);
    };

    useEffect(() => {
        if (ContentDiv.current) {
            getOffsetTop();
            getPadding();
        }
    }, [user]);

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


    useEffect(() => {
        if (SidebarActive) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "visible"
        }
    }, [SidebarActive])


    useEffect(() => {
        const getSearchParams = () => {
            const searchParams = new URLSearchParams(window.location.search);
            const idParam = searchParams.get('id');
            setId(idParam);
        };
        getSearchParams();
        const handlePopState = () => {
            getSearchParams();
        };
        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    useEffect(() => {
        //console.log(window.location.search)
        if (id) {
            FetchUser(id, setUser, setLoading);
        }
    }, [id]);


    if (user.error === "User not found") {
        return <UserNotFound />
    }

    if (id === '' || id === null) {
        return <ProductLanding />
    }

    if (Loading) {
        return <div className="loader"></div>
    }

    return (
        <AppContext.Provider value={{ user }}>
            {user &&
                <>
                    <ScrollToTop
                        height="20"
                        width="20"
                        smooth={true}
                        component=""
                        className="scroll-to-top"
                    />
                    <div className="main-container" style={{
                        '--primary': theme.primary,
                        '--primary-half': colorShade(theme.primary, 110),
                        '--primary-light': colorShade(theme.primary, 210),
                        '--border': colorShade(theme.primary, 190),
                        '--secondary': theme.secondary,
                        '--secondary-half': colorShade(theme.secondary, 110),
                        '--secondary-light': colorShade(theme.secondary, 210),
                    }}>
                        <div className="container">
                            <div className={SidebarActive ? 'sidebar open' : 'sidebar'}>
                                {XL ?
                                    <Navigation sidebarToggle={sidebarToggle} ContentOffsetTop={ContentOffsetTop}
                                        ContentPadding={ContentPadding} />
                                    :
                                    <>
                                        <ProfilePicture />
                                        <AboutMe />
                                        <PersonalInfo />
                                        {(user.awards != null) ? <Awards /> : null}
                                        {(user.followMe != null) ? <FollowMe /> : null}
                                        {(user.references != null) ? <References /> : null}
                                    </>
                                }
                            </div>
                            <div className="wrapper">
                                {XL && <Header download={getPDF} XL={XL} SM={SM} HeaderFixed={HeaderFixed} sidebarToggle={sidebarToggle} />}
                                <div className="content" ref={ContentDiv}>
                                    {!XL && <Intro isDownload={isDownload} />}
                                    {SM && <Intro isDownload={isDownload} />}
                                    <CareerOverview name="career-overview" />
                                    {XL ?
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
                                <Declare download={getPDF} XL={XL} />
                                <Footer />
                            </div>
                        </div>
                        <div className={SidebarActive ? 'overlay active' : 'overlay'}
                            onClick={sidebarToggle}></div>
                    </div>
                </>
            }
        </AppContext.Provider>
    );
}

export default App;
