import './profile-picture.css';
import React, { useContext } from 'react';
import { AppData } from '../../App';



function ProfilePicture() {
    const { UserData } = useContext(AppData);
    const PersonalInfo = UserData.personalInfo;

    return (
        <section className='profile-picture'>
            <div className='picture'>
                <img src={process.env.PUBLIC_URL + PersonalInfo.profilePicture} alt="Profile Picture" />
            </div>
        </section>
    );
}
export default ProfilePicture;