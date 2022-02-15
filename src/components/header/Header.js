import './header.css';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { AppData } from '../../App';
import ResumeFile from '../../Resume.pdf';
import ProfilePicture from '../../components/profile-picture/ProfilePicture';
import Intro from '../../components/intro/Intro';

function Header() {
    const { ApplicationData } = useContext(AppData);
    return (
        <header className={ApplicationData.header.fixed ? 'header fixed' : 'header'} >
            <div className='toggle' onClick={ApplicationData.sidebar.sidebarToggle}><i className='fal fa-bars'></i></div>
            <ProfilePicture />
            {ApplicationData.breakpoint.xl ? null : <Intro />}
            {ApplicationData.breakpoint.sm ? null : <Intro />}
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