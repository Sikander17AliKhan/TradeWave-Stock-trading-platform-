import React from 'react';

function LeftImage({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container p-1 text-center mb-3' >
            <div className='row justify-content-center mb-5 p-1 pt-0'>
                <div className='col-7 justify-content-center d-flex align-items-center p-3'>
                    <img src={imageURL} alt={productName} className='img-fluid' />
                </div>
                <div className='col-5 text-start mt-5 px-5 pt-2'>
                    <h1 className='fs-3 text-muted'>{productName}</h1>
                    <p className='text-muted'>{productDescription}</p>
                    <div className='d-flex justify-content-center gap-3'>
                        <a href={tryDemo} className='btn btn-primary'>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href={learnMore} className='btn btn-outline-primary'>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <br></br>
                    <div className='d-flex justify-content-center gap-3 mt-3'>
                        <a href={googlePlay} ><img src='/media/images/googlePlayBadge.svg' alt='Google Play' className='img-fluid' /></a>
                        <a href={appStore} ><img src='/media/images/appStoreBadge.svg' alt='App Store' className='img-fluid' /></a>
                    </div>
                </div>
            </div>
            
        </div>
     );
}

export default LeftImage;