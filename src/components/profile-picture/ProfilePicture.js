import './profile-picture.css';
import React, { useContext } from 'react';
import { AppDataContext } from '../../AppDataProvider';

function ProfilePicture() {
    const { UserDataJSON } = useContext(AppDataContext);
    const PersonalInfo = UserDataJSON.personalInfo;

    return (
        <section className='profile-picture'>
            <div className='picture'>
                <img src={process.env.PUBLIC_URL + PersonalInfo.profilePicture} alt="Profile Pic" />
            </div>
        </section>
    );
}
export default ProfilePicture;