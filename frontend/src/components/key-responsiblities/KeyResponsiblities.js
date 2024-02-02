import './key-responsiblities.css';
import React, { useContext } from 'react';
import { AppDataContext } from '../../AppDataProvider';
function KeyResponsiblities() {
    const { UserDataJSON } = useContext(AppDataContext);
    const keyResponsiblities = UserDataJSON.keyResponsiblities;
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