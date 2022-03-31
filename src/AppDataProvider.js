
import UserDataJSON from './UserDataJSON.json';
import React, { useState, useEffect, createContext } from 'react';
export const AppDataContext = createContext();

const AppDataProvider = ({ children }) => {

    const [Loading, setLoading] = useState(true);
    const [WindowWidth, setWindowWidth] = useState(window.innerWidth);
    const [WindowHeight, setWindowHeight] = useState(window.innerHeight);

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
        setTimeout(() => {
            setLoading(false);
        }, 2500);

    });


    return (
        <AppDataContext.Provider value={{ ApplicationData, UserDataJSON }}>
            {children}
        </AppDataContext.Provider>
    );
}

export default AppDataProvider;