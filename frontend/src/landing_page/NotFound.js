import React from 'react';

function NotFound() {
    return ( 
        <div className='container p-5 mt-5'>
            <div className='row text-center justify-content-center'>
                <h1 className='fs-2 text-muted '>404 Page Not Found</h1> 
                <p className='fs-5 text-muted mb-5'>The page you are looking for does not exist.</p>
            </div>
        </div>
     );
}

export default NotFound;