import './profile-picture.scss';
import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';

function ProfilePicture() {

    const { UserData } = useContext(AppContext);
    const { personalInfo } = UserData;

    return (
        <section className='profile-picture'>
            <div className='picture'>
                <img src={process.env.PUBLIC_URL + personalInfo.profilePicture} alt="Profile Pic" />
            </div>
        </section>
    );
}
export default ProfilePicture;