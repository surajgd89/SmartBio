import './Footer.scss';
function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer' >
            &copy; {currentYear}, Designed &amp; Developed by <strong>SmartBio</strong>. All rights reserved.
        </footer>
    );
}
export default Footer;