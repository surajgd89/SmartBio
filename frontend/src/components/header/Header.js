import './Header.scss';
import ProfilePicture from '../../components/profile-picture/ProfilePicture';
import Intro from '../../components/intro/Intro';

function Header({ download, XL, SM, HeaderFixed, sidebarToggle }) {


    return (
        <header className={HeaderFixed ? 'header fixed' : 'header'} >
            <div data-html2canvas-ignore="true" className='toggle' onClick={sidebarToggle}><i className='fal fa-bars'></i></div>
            <ProfilePicture />
            {!XL && <Intro />}
            {!SM && <Intro />}
            <div className='action' >
                <a href="mailto:suraj.gd89@gmail.com">
                    <i className='fal fa-envelope'></i>
                    <span>Email</span>
                </a>
                <a href="tel:919594415153">
                    <i className='fal fa-phone-alt'></i>
                    <span>Call</span>
                </a>
                {!HeaderFixed ? <button type='button' onClick={download} data-html2canvas-ignore="true">
                    <i className='fal fa-arrow-to-bottom'></i>
                    <span>PDF</span>
                </button> : null}

            </div>
        </header>
    );
}
export default Header;