import React from 'react';

function Brokerage() {
    return ( 
        <div className='container mb-5'>
            <div className='row m-5 p-2 mt-0'>
                <div className='col-8'>
                   <a href='' style={{textDecoration:'none'}}><h1 className='fs-5 text-center'>Brokerage Calculator</h1></a> 
                    <br/>
                    <ul>
                        <li><p className='text-muted fs-15'style={{textAlign:'left'}}>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</p></li>
                        <li><p className='text-muted fs-15'style={{textAlign:'left'}}>Digital contract notes will be sent via e-mail.</p></li>
                        <li><p className='text-muted fs-15'style={{textAlign:'left'}}>Fro NRI account (non-PIS), 0.5% or ₹100 per executed order for equity(whichever is lower).</p></li>
                        <li><p className='text-muted fs-15'style={{textAlign:'left'}}>For NRI (PIS), 0.5% or ₹200 per executed order for equity(whichever is lower).</p></li>
                        <li><p className='text-muted fs-15'style={{textAlign:'left'}}>if the account in debit balance, any order placed will be charged ₹40 per executed order of ₹20 per executed order.</p></li>
                        <li><p className='text-muted fs-15'style={{textAlign:'left'}}>Call & Trade and RMS auto-squareoff:: Additional charges of ₹50 + GST per order.</p></li>
                    </ul>

                </div>
                <div className='col-4'>
                    <a href='' style={{textDecoration:'none'}}><h1 className='fs-5 text-center'>List of charges</h1></a>
                </div>
            </div>            
        </div>
     );
}

export default Brokerage;