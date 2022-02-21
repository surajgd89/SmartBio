import TypeAnimation from 'react-type-animation';
import './intro.css';
function Intro() {
    return (
        <section className='intro'>
            <h1 className='name'>Suraj <span>Patil</span></h1>
            <h2 className='designation' >
                <TypeAnimation
                    cursor={false}
                    className="type"
                    sequence={[
                        'Front End Developer',
                        3000,
                        'MERN Developer',
                        3000,
                    ]}
                    wrapper="div"
                    repeat={Infinity}
                />
            </h2>
            <div className='yr-experience'>8 Year's of Experience</div>
        </section>
    );
}
export default Intro;