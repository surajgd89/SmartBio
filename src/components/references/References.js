import './references.css';
import React, { useContext } from 'react';
import { AppData } from '../../App';
function References() {
    const { UserData } = useContext(AppData);
    const references = UserData.references;
    
    return (
        <section className='references'>
            <h2 className='heading'>References</h2>
            <div className='list'>
                {
                    references.map((item, index) => {
                        return (
                            <div className='item' key={index}>
                                <div className='info'>
                                    <h4 className='name'>{item.name}</h4>
                                    <div className='designation'>
                                        {item.designation}
                                    </div>
                                </div>
                                <div className='data-list'>
                                    <div className='data-item'>
                                        <h5>Email</h5>
                                        <div><a href={`mailto:${item.email}`}>{item.email}</a></div>
                                    </div>
                                    <div className='data-item'>
                                        <h5>Mobile</h5>
                                        <div><a href={`tel:${item.mobile}`}>{item.mobile}</a></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}
export default References;