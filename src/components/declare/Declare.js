import './declare.css';
import ResumeFile from '../../Resume.pdf';
function Declare(props) {
    const breakpointXL = props.breakpoint;
    return (
        <section className='declare'>
            <div className='description'>
                I announce that the information and details shared in this resume are correct and inclusive. I take full liability for the correctness of the information.
            </div>
            <h3 className='name'>
                Suraj Ananda Patil
            </h3>
            {breakpointXL ? null : <div className='action-sec'><a href={ResumeFile} className='download-btn' download={true}>
                <i className='fal fa-arrow-to-bottom'></i>
                <span>Download PDF</span>
            </a></div>}
        </section>
    );
}
export default Declare;