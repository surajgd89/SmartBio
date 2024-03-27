import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import './ProfilePicture.scss';
function ProfilePicture() {
    const { user } = useContext(AppContext);
    const { personalInfo } = user;

    return (
        <section className="profile-picture">
            <div className="picture">
                <img
                    src={process.env.PUBLIC_URL + personalInfo.profilePicture}
                    alt="Profile Pic"
                />
            </div>
        </section>
    );
}
export default ProfilePicture;
