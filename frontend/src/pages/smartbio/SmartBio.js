import { useRef, useEffect, useState, useContext } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import { RotatingSquare } from 'react-loader-spinner';
import ScrollToTop from 'react-scroll-to-top';

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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

import { FetchUser } from './api';
import { AppContext } from "./AppContext";

function SmartBio() {

   const navigate = useNavigate();

   const { user, setUser, Loading, setLoading } = useContext(AppContext);
   const { certifications, awards, references, followMe, theme } = user;

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


   let { id } = useParams();


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
      setLG(WindowWidth < 992);
      setMD(WindowWidth < 768);
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
      if (!Loading) {
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
   }, [user, theme, Loading]);


   useEffect(() => {
      if (id !== 'undefined') {
         FetchUser(id, setUser, setLoading);
      } else {
         navigate('/error');
      }
   }, [id]);


   useEffect(() => {
      if (user.error === "User not found") {
         navigate('/error');
      }
   }, [user]);


   useEffect(() => {
      if (SidebarActive) {
         document.body.style.overflow = "hidden"
      } else {
         document.body.style.overflow = "visible"
      }
   }, [SidebarActive])




   return (
      <>
         {Loading ?
            <RotatingSquare
               ariaLabel="rotating-square"
               visible={Loading}
               height="70"
               width="70"
               wrapperClass="loader"
               strokeWidth="5"
            />
            :
            <>
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
      </>
   )




}

export default SmartBio;

