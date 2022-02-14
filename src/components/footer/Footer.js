import './footer.css';
function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer' >
            &copy; {currentYear}, Designed &amp; Developed by <strong>Suraj Patil</strong>. All rights reserved.
        </footer>
    );
}
export default Footer;