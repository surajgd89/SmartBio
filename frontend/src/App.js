import './App.css';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { AppDataContext } from './AppDataProvider';
import { RotatingSquare } from 'react-loader-spinner';
import ScrollToTop from 'react-scroll-to-top';
//import SmartBio from './SmartBio';



function App() {


    const { ApplicationData, UserDataJSON } = useContext(AppDataContext);

    useEffect(() => {
        console.log(ApplicationData)
    }, [])


    return (
        <>
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


            {/* <SmartBio /> */}

        </>
    );
}
export default App;
