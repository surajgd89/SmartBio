import './follow-me.css';
import React, { useContext } from 'react';
import { AppDataContext } from '../../AppDataProvider';
function FollowMe() {
    const { UserDataJSON } = useContext(AppDataContext);
    const followMe = UserDataJSON.followMe;
    return (
        <section className='follow-me'>
            <h2 className='heading'>Follow Me</h2>

            <div className='data-list'>
                {
                    followMe.map((item, index) => {
                        return (
                            <div className='data-item' key={index}>
                                <h5>{item.name}</h5>
                                <div><a href={item.url} target="_blank" rel="noreferrer">{item.url.replace("https://", "")}</a></div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}
export default FollowMe;