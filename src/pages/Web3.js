import React from 'react';

import mint_2100 from '../images/frames/mint_2100.png'
import web from '../images/gifs/web.gif'
import Looping_into_v01 from '../images/Looping_into_v01.mp4'

const Web3 = () => {
    
    const minted = window.localStorage.getItem('minted');

    return(
        <div className='container direct-col space-evenly align-center w-100 bg-p-bot bg-s-100 bg-norepeat p-2' style={{backgroundImage: `url('${mint_2100}')`}}>
            
            <div className='text-center m-1'>
                <span className='text red web3-congrats'>CONGRATS!</span>
            </div>

            <div className='container justify-center align-center w-75'>
                <img className='img web3-animation br-10' src={web} alt=''>
                </img>
            </div>

            <div className='container direct-row justify-center m-2 w-75'>
                <div className='w-50 text-center'>
                    <span className='text red web3-planted'>
                        {/* {minted} Seeds Minted */}
                        </span>
                </div>
                <div className='w-50'>
                    <ul className='m-0 p-0 web3-planted' style={{listStyle:'none'}}>
                        <li className='text red'>#<span className='text' style={{color: 'rgb(240, 206, 65)'}}>202</span> / 5,555</li>
                        <li className='text red'>#<span className='text' style={{color: 'rgb(240, 206, 65)'}}>203</span> / 5,555</li>
                        <li className='text red'>#<span className='text' style={{color: 'rgb(240, 206, 65)'}}>203</span> / 5,555</li>
                    </ul>
                </div> 
            </div>

            <div className='container align-center justify-center text-center w-50 m-1'>
                <a href="#" className='link solid-red p-2 web3-open text w-50 br-5'>VIEW ON OPENSEA</a>
            </div>

            <div className='text-center w-25 m-1'>
                <span className='text red web3-reveal w-100'>REVEAL WILL OCCUR ON AUGUST 11TH</span>
            </div>

        </div>
    )
}

export default Web3