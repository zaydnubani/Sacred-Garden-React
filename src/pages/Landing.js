import React from 'react';

import sacrd_gardn_neon from '../images/logos/sacrd_gardn_neon.png'
import rotate_2100 from '../images/frames/rotate_2100.png'

const Landing = () => {

    // let fit;

    // if (window.localStorage.getItem('popped') === 'true'){
    //     console.log('true');
    //     fit = {top: '-150%', left: '50%', transform: 'translate(-50%, -50%)', backgroundImage: "url('/images/backgrounds/body/B6.png')"}
    // } else {
    //     console.log('false')
    //     fit = {top: '50%', left: '50%', transform: 'translate(-50%, -50%)',backgroundImage: "url('/images/backgrounds/body/B6.png')"}
    // }

    return (   

        <div className="relative container align-center justify-center of-hidden" style={{height: `${window.innerHeight *.6}px`, width: `100vw`}}>
            
            <div className='container align-center justify-center w-100 rotating'> 
                
                <img className='img landing-bg' src={rotate_2100} alt="rotate" />
            
            </div>
            
            <img className='absolute img m-auto landing-logo' src={sacrd_gardn_neon} alt="logo center page" />

        
            <div className='popup absolute z-2 container align-center direct-col br-5 p-1 transition-2' style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)',backgroundImage: "url('/images/backgrounds/body/B6.png')"}}>
                <div className="container">
                    <span className="text  text-center red live-pop">△FLORA NFT mint is live!</span>
                </div>
                <p className="text text-center red message-p">
                    Sacred Garden is a real and virtual psychedelic plant community with a focus on conservation, cultivation and education. Our ΔFLORA NFT is your membership token.
                </p>
                <a  href="/Mint" onClick={window.localStorage.setItem('popped', 'true')} className="container justify-center btn link solid-red br-5 w-75">
                    <span className="text mint-p p-2">Plant a Seed</span>
                </a> 
            </div>
        </div>
    );
};

export default Landing;