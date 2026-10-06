import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='fs-2 mb-3 text-muted'>Unbeatable Pricing</h1>
                    <p className='text-muted mt-3'>We pioneered the concept of discount broking and pice transparency in India. Flat fees and no hidden charges.</p>
                    <div>
                         <a href='' style={{textDecoration: 'none'}}>See pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col text-center border p-2'>
                            <h1 className='mb-3 text-muted'>₹0</h1>
                            <p className='text-muted text-center'>Free equity delivery and<br></br> direct mutual funds</p>                            
                        </div>
                        <div className='col text-center border p-2'>
                            <h1 className='mb-3 text-muted'>₹20</h1>
                            <p className='text-muted text-center'>Intraday and F&O trades</p> 
                        </div>
                    </div>  
                </div>
            </div>
        </div>
     );
}

export default Pricing;