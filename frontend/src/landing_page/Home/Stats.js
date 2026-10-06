import React from 'react';

function Stats() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-5 mt-5  jsutify-content-end'>
                   <h1 className='mb-5 fs-2 text-muted'>Trust with confidence</h1>

                   <h2 className='fs-4 text-muted'>Customer-first always</h2>
                   <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                   
                   <h2 className='fs-4 text-muted'>No spam or gimmicks</h2>
                   <p className='text-muted'>No gimmicks, spam, "gammification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                   
                   <h2 className='fs-4 text-muted'>The Tradewave Universe</h2>
                   <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>                
                   
                   <h2 className='fs-4 text-muted'>Do better with money</h2>
                   <p className='text-muted mb-5'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-7 text-center'>
                    <img src='media/images/ecosystem.png' alt='ecosystem' style={{ width: '80%' }} className='mt-5'></img>
                    <div className='text-center mt-3'>
                        <a href=''className='mx-5'style={{textDecoration: 'none'}}>Explore the Tradewave Universe <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href='' style={{textDecoration: 'none'}}>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;