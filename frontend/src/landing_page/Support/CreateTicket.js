import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container p-5 m-5' style={{alignItems:'center', justifyContent:'center'}}>
            <h1 className='text-muted fs-4 mb-5 '>To create a ticket, select a relevant topic</h1>
            <div className='row align-item-center justify-content-center'>
                <div className='col-4 text-muted fs-10'>
                    <h5 className='fs-10 mb-4'><i class="fa-solid fa-circle-plus fa-xs"></i>Account Opening</h5>
                        <a className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Online Account Opening</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Offline Account Opening</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Company, Partnership and HUF Account<br/> Opening</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>NRI Account Opening</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Charges at TradeWave</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>TradeWave IDFC First Bank 3-in-1 Account</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Getting started</a><br/>                    
                </div>
                <div className='col-4 text-muted fs-10'>
                    <h5 className='fs-10 mb-4'><i class="fa-solid fa-user fa-xs"></i>Your TradeWave Account</h5>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Login Credentials</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Account Modification and Segment Addition</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>DP ID and bank details</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Your Profile</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Transfer</a>  <br/>
                </div>
                <div className='col-4 text-muted fs-10'>
                    <h5 className='fs-10 mb-4'><i class="fa-regular fa-chart-bar fa-rotate-270 fa-xs"></i>Your TradeWave Account</h5>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Margin/leverage, Product and Order types</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Kite Web and Mobile</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Trading FAQs</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Corporate Actions</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Sentinel</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Kite API</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Pi and other platforms</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Stockreports+</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>GTT</a><br/>                      
                </div>
            </div>
            <div className='row align-item-center justify-content-center mt-5'>
                <div className='col-4 text-muted fs-10'>
                    <h5 className='fs-10 mb-4'><i class="fa-solid fa-credit-card fa-xs"></i>Funds</h5>
                        <a className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Adding Funds</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Fund Withdrawl</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>eMandates</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Adding Bank Accounts</a><br/>                          
                </div>
                <div className='col-4 text-muted fs-10'>
                    <h5 className='fs-10 mb-4'><i class="fa-solid fa-circle-notch fa-xs"></i>Console</h5>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Repots</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Ledger</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Portfolio</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>60 Day Challenge</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>IPO</a>  <br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Refferal Program</a>  <br/>
                </div>
                <div className='col-4 text-muted fs-10'>
                    <h5 className='fs-10 mb-4'><i class="fa-regular fa-circle fa-xs"></i>Coin</h5>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Understaning Mutual Funds</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>About Coin</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Buying and Selling Through Coin</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Starting an SIP</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Managing your Portfoio</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Coin APP</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Moving to Coin</a><br/>
                        <a  className='mb-3' href="" style={{textDecoration:'none', lineHeight:'2'}}>Government Securities</a><br/>             
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;