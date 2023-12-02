import React from 'react'

import banner from '../images/banner.png'

function HomeBanner() {
    return (
        <>
            <div className="homeBanner w-100  d-flex align-items-center" >
                <div className="container">
                    <div className="row align-items-center" >
                        <div className="col-md-6">
                            <h1 className='text-light'>Lorem ipsum dolor sit amet.</h1>
                            <p className='text-light mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ratione, laborum incidunt autem eum sit voluptatibus! Nulla nemo voluptatibus magnam!</p>
                            <div className="d-flex gap-3">
                                <a href="" className='btn btn-primary'>Read More</a>
                                <a href="" className='btn btn-danger'>Read More</a>
                            </div>
                        </div>
                        <div className="col-md-6 d-none d-md-block">
                            <img src={banner} className='w-100' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner