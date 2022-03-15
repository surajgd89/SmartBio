import './awards.css';
import React, { useContext } from 'react';
import { AppData } from '../../App';
function Awards() {
    const { UserData } = useContext(AppData);
    const Awards = UserData.awards;


    return (
        <section className='awards'>
            <h2 className='heading'>Awards</h2>
            {/* <div className='data-list'>
                {
                    Awards.map((item, index) => {
                        return (
                            <div className='data-item' key={index}>
                                <h5>{item.name}</h5>
                                <div>{item.desc}</div>
                            </div>
                        );
                    })
                }
            </div> */}
        </section>
    );
}
export default Awards;