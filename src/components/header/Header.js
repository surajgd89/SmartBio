import './header.css';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { GlobalInfo } from '../../App'
import ResumeFile from '../../Resume.pdf';
import ProfilePicture from '../../components/profile-picture/ProfilePicture';
import Intro from '../../components/intro/Intro';

function Header(props) {

    const IsbreakpointXL = props.breakpoint.XL;
    const IsbreakpointSM = props.breakpoint.SM;
    const sidebarToggle = props.sidebarFlag;
    const fixed = props.fixed;
    const header = useRef();
    const [height, setHeight] = useState(null);
    const { getHeaderHt } = useContext(GlobalInfo);
    const getHeight = () => {
        const currentheight = header.current.clientHeight;
        setHeight(currentheight);
    };

    useEffect(() => {
        getHeight();
        getHeaderHt(height)
    });

    return (
        <header className={fixed ? 'header fixed' : 'header'} ref={header}>
            <div className='toggle' onClick={sidebarToggle}><i className='fal fa-bars'></i></div>
            <ProfilePicture />
            {IsbreakpointXL ? null : <Intro />}
            {IsbreakpointSM ? null : <Intro />}
            <div className='action'>
                <a href="mailto:suraj.gd89@gmail.com">
                    <i className='fal fa-envelope'></i>
                    <span>Email</span>
                </a>
                <a href="tel:919594415153">
                    <i className='fal fa-phone-alt'></i>
                    <span>Call</span>
                </a>
                <a href={ResumeFile} download={true}>
                    <i className='fal fa-arrow-to-bottom'></i>
                    <span>PDF</span>
                </a>
            </div>
        </header>
    );
}
export default Header;