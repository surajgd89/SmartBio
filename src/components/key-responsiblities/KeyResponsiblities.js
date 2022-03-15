import './key-responsiblities.css';
import React, { useContext } from 'react';
import { AppData } from '../../App';
function KeyResponsiblities() {
    const { UserData } = useContext(AppData);
    const keyResponsiblities = UserData.keyResponsiblities;
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