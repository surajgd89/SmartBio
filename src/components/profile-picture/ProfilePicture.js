import './profile-picture.css';
import ProfilePictureImg from '../../images/profile-picture.jpg';


function ProfilePicture() {


    return (
        <section className='profile-picture'>
            <div className='picture'>
                <img src={ProfilePictureImg} alt="Profile Picture" />
            </div>
        </section>
    );
}
export default ProfilePicture;