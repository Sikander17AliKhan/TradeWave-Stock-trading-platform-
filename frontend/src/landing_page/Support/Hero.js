import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='supporthero'>
            <div className='p-5 mt-2 mb-2' id='supportwrapper'>
                    <h5>Support Portal</h5>
                    <p><a href=''>Track tickets</a></p>
  
            </div>
            <div className='row p-2 mt-2 mb-2'>
                <div className='col-6 mb-5 ml-2'>
                    <h1 className='text-start fs-6 mb-2'>Search for an answer or browse help topics <br/> to create a ticket</h1>
                    <input type='searchbox' placeholder='Eg: how do i activate F&O, why order getting rejected...' style={{width:'70%', height:'35%', borderRadius:'5%'}} className='mb-2'></input><br/>
                    <div  id='atags'>
                        <a href=''>Track account opening </a>
                        <a href=''> Track segment activation </a>
                        <a href=''>Intraday </a><br/>
                    </div>
                    <div id='atags'>
                        <a href=''>Margins </a>
                        <a href=''>Kite user manual </a>
                        <a href=''></a>
                    </div>
                </div>
                <div className='col-6 mb-5'>
                    <h1 className='text-start fs-5 mb-2'>Featured</h1><br/>
                    <ol>
                        <li><a href=''>Current Takeovers and Delisting - January 2024</a></li><br/>
                        <li><a href=''>Latest Intraday leverages - MS & CO</a></li>
                    </ol>
                </div>

            </div>
            
        </section>
     );
}

export default Hero;