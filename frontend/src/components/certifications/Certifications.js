import './certifications.scss';
import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';

function Certifications() {
    const { UserData } = useContext(AppContext);
    const { Certifications } = UserData;
    return (
        <section className='certifications'>
            <h2 className='heading'>Certifications</h2>
            <ul className='list'>
                {
                    Certifications.map((item, index) => {
                        return (<li className='item' key={index}>
                            <h4>{item.name}</h4>
                            <ul className='sublist'>
                                {item.url.map((subitem, subindex) => {
                                    return (
                                        <li className='subitem' key={subindex}>
                                            <a href={subitem}>{subitem}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>);
                    })
                }
            </ul>
        </section>
    );
};

export default Certifications;