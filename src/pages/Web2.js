import React from 'react';

import mint_2100 from '../images/frames/mint_2100.png'
import web from '../images/gifs/web.gif'

const Web2 = () => {
    
    return(
        <div className='container direct-col space-evenly align-center w-100 bg-p-bot bg-s-100 bg-norepeat p-2' style={{backgroundImage: `url('${mint_2100}')`}}>
            
            <div className='text-center m-1'>
                <span className='text red fs-4'>CONGRATS!</span>
            </div>

            <div className='container justify-center align-center w-25'>
                <img className='img img-100 br-10' src={web} alt=''>
                </img>
            </div>

            <div className='container direct-row align-start space-evenly m-2 w-25'>
                <div className='w-50 text-center'>
                    <span className='text red fs-1'>You planted seeds: </span>
                </div>
                <div className='w-50 text-center'>
                    <ul className='m-0 p-0' style={{listStyle:'none'}}>
                        <li className='text red fs-1'>#<span className='text' style={{color: 'rgb(240, 206, 65)'}}>203</span> / 5,555</li>
                        <li className='text red fs-1'>#<span className='text' style={{color: 'rgb(240, 206, 65)'}}>203</span> / 5,555</li>
                        <li className='text red fs-1'>#<span className='text' style={{color: 'rgb(240, 206, 65)'}}>203</span> / 5,555</li>
                    </ul>
                </div>
            </div>

            <div className='container align-center justify-center text-center w-50 m-1'>
                {/* <a href="#" className='link solid-red p-2 fs-1 text w-50 br-5'>VIEW ON WINTER</a> */}
            </div>

            <div className='text-center w-25 m-1'>
                <span className='text red fs-2 w-100'>REVEAL WILL OCCUR ON AUGUST 11TH</span>
            </div>

        </div>
    )
}

export default Web2