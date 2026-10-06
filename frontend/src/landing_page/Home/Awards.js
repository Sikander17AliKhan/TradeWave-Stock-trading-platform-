import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-2'>
                    <img src='media/images/largestBroker.svg' alt='largest-broker'></img>
                </div>
                <div className='col-6 p-2 mt-3'>
                    <h1 className='text-muted'>Largest stock broker in India</h1>
                    <p className='mb-5 text-muted'>2+ million Tradewave clients contribute to over 15% of the ratail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>   
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' alt='press-logos' style={{ width: '90%' }} className='mt-3 mb-5'></img>
                </div>
            </div>
        </div>
     );
}

export default Awards;