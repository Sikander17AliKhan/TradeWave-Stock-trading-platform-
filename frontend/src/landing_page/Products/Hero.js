import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mt-5 text-center pb-0' >
            <div className='row justify-content-center mb-5 p-5 pt-0'>
                <h1 className='fs-2 text-muted '>TradeWave Products</h1>
                <p className='text-muted fs-5'>Sleek, modern, and intuitive trading platforms</p>
                <p className='text-muted fs-5'>Checkout our <a href='/products' className='text-decoration-none '>investment solutions <i class="fa-solid fa-arrow-right-long"></i></a></p>
            </div>
            <hr className='text-muted mt-5 p-1' ></hr>
       
        </div>

     );
}

export default Hero;