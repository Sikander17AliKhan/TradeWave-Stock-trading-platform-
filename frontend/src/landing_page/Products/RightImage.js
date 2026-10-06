import React from 'react';

function RightImage({imageURL, productName, productDescription,  learnMore, }) {
    return ( 
        <div className='container p-1 text-center ' >
            <div className='row justify-content-center mb-5 p-1 pt-0'>
                <div className='col-5 text-start mt-5 px-5 pt-5 justify-content-center align-items-center'>
                    <h1 className='fs-3 text-muted'>{productName}</h1>
                    <p className='text-muted'>{productDescription}</p>
                    <div className='justify-content-start'>
                        <a href={learnMore} className='btn btn-outline-primary'>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>                    
                </div>
                <div className='col-7 justify-content-center d-flex align-items-center p-1'>
                    <img src={imageURL} alt={productName} className='img-fluid' />
                </div>
            </div>
            
        </div>
     );
}

export default RightImage;