import React from 'react';

import one from '../images/300px/1.png'
import two from '../images/300px/2.png'
import three from '../images/300px/3.png'
import four from '../images/300px/4.png'
import five from '../images/300px/5.png'
import P1 from '../images/300px/P1.png'
import P3 from '../images/300px/P3.png'
import P4 from '../images/300px/P4.png'
import P5 from '../images/300px/P5.png'
import P6 from '../images/300px/P6.png'
import P7 from '../images/300px/P7.png'
import P8 from '../images/300px/P8.png'
import P9 from '../images/300px/P9.png'
import P10 from '../images/300px/P10.png'
import P11 from '../images/300px/P11.png'
import P12 from '../images/300px/P12.png'
import P13 from '../images/300px/P13.png'
import P14 from '../images/300px/P14.png'
import P15 from '../images/300px/P15.png'
import P16 from '../images/300px/P16.png'
import P17 from '../images/300px/P17.png'
import P18 from '../images/300px/P18.png'
import P19 from '../images/300px/P19.png'
import P21 from '../images/300px/P21.png'
import P23 from '../images/300px/P23.png'
import P24 from '../images/300px/P24.png'
import P25 from '../images/300px/P25.png'


const Flora = () => {

    const NFT = [ 
        one, two, three, four, five, P1, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P21, P23, P24, P25
    ]

    return (

    // {{!-- container --}}
    <div className='relative container direct-row align-center wrap space-evenly w-90 h-auto'>

        <div className="container direct-col align-center justify-center text red flora-container nft membership" style={{opacity: "1", order: `${Math.floor(Math.random() * 4)}`}}>

            <span className='m-tb-1 flora-member'>
                ∆FLORA membership NFT
            </span>

            <div className='container justify-center direct-row wrap align-center'>
                <div className='grow-2 p-2 m-1 white text br-5 text-center flora-perk' style={{backgroundColor: "rgb(90, 29, 87)"}}>IRL Plants</div>
                <div className='grow-2 p-2 m-1 white text br-5 text-center flora-perk' style={{backgroundColor: "rgb(255, 90, 0)"}}>Plant Merch</div>
                <div className='grow-2 p-2 m-1 white text br-5 text-center flora-perk' style={{backgroundColor: "rgb(225, 0, 68)"}}>Partner Experiences & Education</div>
                <div className='grow-2 p-2 m-1 white text br-5 text-center flora-perk' style={{backgroundColor: "rgb(167, 0, 76)"}}>Hold for Plant Simulator</div>
                <div className='grow-2 p-2 m-1 white text br-5 text-center flora-perk' style={{backgroundColor: "rgb(240, 206, 65)"}}>10% of proceeds go to non-profit partners</div>
            </div>

        </div>

        {NFT.map((value) => { return(
            <div className="nft img" key={value} style={{opacity: '1', order: `${Math.floor(Math.random() * NFT.length)}`}}>
                <img src={value} alt={value} />
            </div>
        )})}

    </div>
    )
        
}

export default Flora