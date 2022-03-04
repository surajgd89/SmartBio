import './App.css';
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect, createContext } from 'react';
import { RotatingSquare } from 'react-loader-spinner';
import ScrollToTop from 'react-scroll-to-top';
import useScrollBlock from './vendor/useScrollBlock/useScrollBlock';
import Home from './Home';
import SmartBio from './SmartBio';
import CreateSmartBio from './CreateSmartBio';
import DeleteSmartBio from './DeleteSmartBio';
import PageNotFound from './PageNotFound';
import UserData from './data.json';
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



    const getDimensions = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
        WindowWidth < 1200 ? setXL(true) : setXL(false);
        WindowWidth < 992 ? setLG(true) : setLG(false);
        WindowWidth < 768 ? setMD(true) : setMD(false);
        WindowWidth < 576 ? setSM(true) : setSM(false);
    };

    const ApplicationData = {
        loading: Loading,
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
        scroll: {
            blockScroll: blockScroll(),
            allowScroll: allowScroll(),
        },
        header: {
            fixed: HeaderFixed,
        },
    };

    function sidebarToggle() {
        setSidebarActive(!SidebarActive);
    }



    useEffect(() => {
        window.addEventListener('resize', getDimensions);
        window.addEventListener('scroll', () => {
            setHeaderFixed(window.scrollY > 80);
        });
        getDimensions();
        setLoading(false);


    });

    // console.log(UserData);







    return (

        <AppData.Provider value={{ ApplicationData, UserData }}>

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

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="SmartBio" element={<Home />} />
                <Route path="create" element={<CreateSmartBio />} />
                <Route path="delete" element={<DeleteSmartBio />} />
                <Route path={"SmartBio/:passkey"} element={<SmartBio />} />
                <Route path="SmartBio/*" element={<PageNotFound />} />
            </Routes>
        </AppData.Provider>
    );
}

export default App;
