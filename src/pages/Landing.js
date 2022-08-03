import React from 'react';

import sacrd_gardn_neon from '../images/logos/sacrd_gardn_neon.png'
import rotate_2100 from '../images/frames/rotate_2100.png'

const Landing = () => {
    return (   

        <div className="relative container align-center justify-center of-hidden" style={{height: `${window.innerHeight *.6}px`, width: `100vw`}}>
            
            <div className='container align-center justify-center w-100 rotating'> 
                
                <img className='img landing-bg' src={rotate_2100} alt="rotate" />
            
            </div>
            
            <img className='absolute img m-auto landing-logo' src={sacrd_gardn_neon} alt="logo center page" />
        
        </div>

    );
};

export default Landing;