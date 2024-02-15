import './awards.scss';
import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
function Awards() {
    const { user } = useContext(AppContext);
    const { awards } = user;


    return (
        <section className='awards'>
            <h2 className='heading'>Awards</h2>
            <div className='data-list'>
                {
                    awards.map((item, index) => {
                        return (
                            <div className='data-item' key={index}>
                                <h5>{item.name}</h5>
                                <div>{item.desc}</div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}
export default Awards;