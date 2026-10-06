import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center justify-content-center'>
                    <img src='media/images/homeHero.png' alt='hero-img' className='mb-5' style={{ width: '70%', height: 'auto' }} />
                    <h1 className='fs-2 text-muted '>Invest in everything</h1> 
                    <p className='fs-5 text-muted mb-5'>online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds and more</p>
                    <a href='/Signup'><button className='p-2 btn btn-primary fs-5' style={{width:'20%', margin:'0 auto', }}>Signup now </button> </a>                
            </div>
        </div>
     );
}

export default Hero;