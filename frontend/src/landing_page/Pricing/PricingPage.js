import React from 'react';

import Hero from './Hero';
import OpenAccount from '../OpenAccount';
import Brokerage from './Brokerage';


function PricingPage() {
    return ( 
        <>
            <Hero />
            <OpenAccount />
            <hr className='text-muted m-5 p-5'/> 
            <Brokerage />
        </>
     );
}

export default PricingPage;