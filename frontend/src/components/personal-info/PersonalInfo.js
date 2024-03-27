import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import './PersonalInfo.scss';
function PersonalInfo() {
    const { user } = useContext(AppContext);
    const { personalInfo } = user;
    const {
        name,
        email,
        mobile,
        gender,
        languages,
        hobbies,
        maritalStatus,
        dob,
        address,
    } = personalInfo;
    const fullName = `${name.first} ${name.middle} ${name.last}`;

    let birthmonth;
    switch (new Date(dob).getMonth() + 1) {
        case 1:
            birthmonth = 'January';
            break;
        case 2:
            birthmonth = 'February';
            break;
        case 3:
            birthmonth = 'March';
            break;
        case 4:
            birthmonth = 'April';
            break;
        case 5:
            birthmonth = 'May';
            break;
        case 6:
            birthmonth = 'June';
            break;
        case 7:
            birthmonth = 'July';
            break;
        case 8:
            birthmonth = 'August';
            break;
        case 9:
            birthmonth = 'September';
            break;
        case 10:
            birthmonth = 'October';
            break;
        case 11:
            birthmonth = 'November';
            break;
        case 12:
            birthmonth = 'December';
            break;
        default:
            birthmonth = null;
    }
    function ordinal(n) {
        var s = ['th', 'st', 'nd', 'rd'];
        var v = n % 100;
        return s[(v - 20) % 10] || s[v] || s[0];
    }

    return (
        <section className="personal-info">
            <h2 className="heading">Personal Info</h2>
            <div className="data-list">
                <div className="data-item">
                    <h5>Full Name</h5>
                    <div>{fullName}</div>
                </div>

                <div className="data-item">
                    <h5>Email</h5>
                    <div>
                        <a href={`mailto:${email}`}>{email}</a>
                    </div>
                </div>

                <div className="data-item">
                    <h5>Mobile</h5>
                    <div>
                        <a href={`tel:${mobile}`}>{mobile}</a>
                    </div>
                </div>

                <div className="data-item">
                    <h5>DOB</h5>
                    <div>
                        {new Date(dob).getDate()}
                        <sup>{ordinal(new Date(dob).getDate())}</sup>{' '}
                        {birthmonth}, {new Date(dob).getFullYear()}
                    </div>
                </div>

                <div className="data-item">
                    <h5>Gender</h5>
                    <div>{gender}</div>
                </div>

                <div className="data-item">
                    <h5>Marital Status</h5>
                    <div>{maritalStatus}</div>
                </div>

                {languages != null ? (
                    <div className="data-item">
                        <h5>Languages</h5>
                        <div>{languages.join(', ')}</div>
                    </div>
                ) : null}

                {hobbies != null ? (
                    <div className="data-item">
                        <h5>Hobbies</h5>
                        <div> {hobbies.join(', ')}</div>
                    </div>
                ) : null}

                <div className="data-item full-item">
                    <h5>Address</h5>
                    <div>{address}</div>
                </div>
            </div>
        </section>
    );
}
export default PersonalInfo;
