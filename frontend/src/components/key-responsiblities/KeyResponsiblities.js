import './key-responsiblities.scss';
import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
function KeyResponsiblities() {
    const { UserData } = useContext(AppContext);
    const { keyResponsiblities } = UserData;
    return (
        <section className='key-responsiblities'>
            <h2 className='heading'>Key Responsiblities</h2>
            <ul className='list'>
                {
                    keyResponsiblities.map((item, index) => {
                        return <li className='item' key={index}>{item}</li>;
                    })
                }

            </ul>
        </section>
    );
}
export default KeyResponsiblities;