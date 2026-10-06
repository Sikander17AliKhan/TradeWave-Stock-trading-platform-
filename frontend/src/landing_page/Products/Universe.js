import React from 'react';

function Universe() {
    return ( 
        <div className='container mt-5 p-3 text-center mb-5' >
            <div className='row mb-5 mt-5'>
                <div className='col-12 text-center'>
                    <h1 className='fs-3 text-muted'>The TradeWave Universe</h1>
                    <p className='text-muted'>Extend your trading and investment experience even further with our partner platforms</p>
                </div>
            </div>
            <div className='row p-3'>
                <div className='col-4 text-center'>
                    <img src='/media/images/smallcaseLogo.png' alt='smallcase' className='img-fluid p-2 mb-2'  />
                    <p className='text-muted ' style={{ fontSize: '14px' }}>Thematic investing platform<br />that helps you invest in diversified <br />baskets of stocks on ETFs.<br /></p>
                </div>
                <div className='col-4 text-center'>
                    <img src='/media/images/streakLogo.png' alt='Streak' className='img-fluid p-2 mb-2' style={{ Width: '50%', height: '40%' }} />
                    <p className='text-muted ' style={{ fontSize: '14px' }}>Systematic trading platform <br />that allows you to create and backtest  <br />strategies without coding.<br /></p>
                </div>
                <div className='col-4 text-center'>
                    <img src='/media/images/sensibullLogo.svg' alt='Sensibull' className='img-fluid p-2 mb-2' style={{ Width: '30%', height: '30%' }} />
                    <p className='text-muted ' style={{ fontSize: '14px' }}>Options trading platform that lets you <br />create strategies, analyze positions, and examine <br />data points like open interest, FII/DII, and more.<br /></p>
                </div>
            </div>
            <div className='row p-2'>
                <div className='col-4 text-center'>
                    <img src='/media/images/Tradewave-logo.png' alt='Tradewave' className='img-fluid p-2 mb-2' style={{ Width: '30%', height: '30%' }} />
                    <p className='text-muted ' style={{ fontSize: '14px' }}>Our asset management venture <br />that is creating simple and transparent index  <br />funds to help you save for your goals.</p>
                </div>
                <div className='col-4 text-center'>
                    <img src='/media/images/goldenpiLogo.png' alt='GoldenPi' className='img-fluid p-2 mb-2' style={{ Width: '35%', height: '35%' }} />
                    <p className='text-muted ' style={{ fontSize: '14px' }}>Bonds trading platform </p>
                </div>
                <div className='col-4 text-center'>
                    <img src='/media/images/dittoLogo.png' alt='Ditto' className='img-fluid p-2 mb-2' style={{ Width: '25%', height: '25%' }} />
                    <p className='text-muted ' style={{ fontSize: '14px' }}>Personalized advice on life <br />and health insurance. No spam <br />and no mis-selling.</p>
                </div>
                <a href='/Signup'><button className='mt-0 p-2 btn btn-primary fs-5' style={{width:'20%', margin:'0 auto', }}>Signup now </button></a>                 
            </div>
        </div>
     );
}

export default Universe;