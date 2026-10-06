import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container p-5 mt-5'>
            <div className='row text-center justify-content-center'>
                <h1 className='fs-2 text-muted '>Open a Tradewave Account</h1> 
                <p className='fs-5 text-muted mb-5'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <a href='/Signup'><button className='p-2 btn btn-primary fs-5' style={{width:'20%', margin:'0 auto', }}>Signup for free </button></a>                 
            </div>
        </div>
     );
}

export default OpenAccount;