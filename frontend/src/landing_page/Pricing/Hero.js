import React from 'react';

function Hero() {
    return ( 
        <div className='container '>
            <div className='row justify-content-center text-center mt-3 pt-5'>
                <h1 className='text-muted '>Charges</h1>
                <p className='text-muted fs-5'>List of all charges and taxes.</p>
            </div>
            <div className='row justify-content-center text-center p-5'>
                <div className='col-4'>
                    <img src='/media/images/pricingEquity.svg' alt='equity'></img>
                    <br></br>
                    <h1 className='text-muted fs-5'>Free equity delivery</h1>
                    <p className='text-muted fs-6'>All equity investments (NSE,BSE), <br/> are absolutely free ₹ 0 brokerage.</p>
                </div>
                <div className='col-4'>
                    <img src='/media/images/intradayTrades.svg' alt='equity'></img>
                    <br></br>
                    <h1 className='text-muted fs-5'>Intraday and F&O trades</h1>
                    <p className='text-muted fs-6'>Flat Rs. 20 or 0.03% (whichever is lower)<br></br> per executed order on intraday trades<br></br>across equity, currency, and commodity <br></br>trades.</p>
                </div>
                <div className='col-4'>
                    <img src='/media/images/pricingEquity.svg' alt='equity'></img>
                    <br></br>
                    <h1 className='text-muted fs-5'>Free direct MF</h1>
                    <p className='text-muted fs-6'>All direct mutual fund investments are<br/>absolutely free ₹ 0 commisions & DP <br></br>charges.</p>
                </div>                
            </div>
            <hr className='text-muted m-5 p-5'></hr>
        </div>
        
     );
}

export default Hero;