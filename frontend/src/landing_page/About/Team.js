import React from 'react';

function Team() {
    return ( 
        <div>
            <div className='container p-2 mt-2 mb-5' >
                <div className='row text-center justify-content-center p-2 mb-2'>
                    <h1 className='fs-3 text-muted '>Founder & CEO</h1> 
                </div>
                <div className='row justify-content  mb-5 p-2 ' style={{width: '100%'}}  >
                    <div className='col-6 justify-content-center text-center '>
                        <img src='/media/images/founder-img.jpeg' alt='Founder' style={{width: '55%', height:'auto', borderRadius:'40%'}}></img>
                        <h3 className='fs-5 text-muted mt-3'>Sikander Ali Khan</h3>
                    </div>
                    <div className='col-6 justify-content-center align-items-center pt-5 mt-5'>
                        <p className='text-muted fs-6'>TradeWave was founded by Sikander Ali Khan, a self-taught trader and investor,and a young entrepreneur. With the vision of making trading and investing accessible to everyone in India.</p>
                        <p className='text-muted fs-6'>The team at TradeWave is made up of passionate individuals who are committed to providing the best trading experience</p>
                        <p className='text-muted fs-6' style={{fontWeight: 'bold'}}>“Profit is the result. Discipline is the strategy.”</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Team;