import './follow-me.css';
import React, { useContext } from 'react';
import { AppData } from '../../App';
function FollowMe() {
    const { UserData } = useContext(AppData);
    const followMe = UserData.followMe;
    return (
        <section className='follow-me'>
            <h2 className='heading'>Follow Me</h2>

            <div className='data-list'>
                {
                    followMe.map((item, index) => {
                        return (
                            <div className='data-item' key={index}>
                                <h5>{item.name}</h5>
                                <div><a href={item.url} target="_blank">{item.url}</a></div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}
export default FollowMe;