import React, { useState, useEffect, createContext } from 'react';
import { fetchData } from './services/api';

const AppDataContext = createContext();

const AppDataProvider = ({ children }) => {

    const [UserDataJSON, setUserDataJSON] = useState([]);
    
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

    useEffect(() => {
        const handleResize = () => {
            getDimensions();
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', () => {
            setHeaderFixed(window.scrollY > 80);
        });

        getDimensions();

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', () => {
                setHeaderFixed(window.scrollY > 80);
            });
        };
    }, []);

    useEffect(() => {
        const initData = async () => {
            try {
                const data = await fetchData();
                console.log(data[0]);
                setUserDataJSON(data[0]);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            } finally {
                setLoading(false);
            }
        };

        initData();
    }, [Loading]);

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

    return (
        <AppDataContext.Provider value={{ ApplicationData, UserDataJSON }}>
            {children}
        </AppDataContext.Provider>
    );
};

export { AppDataContext, AppDataProvider };
