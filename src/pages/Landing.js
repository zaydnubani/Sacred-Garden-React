import React from 'react';
import Marquee from "react-fast-marquee";
// import toast, { Toaster } from 'react-hot-toast';

// import sacrd_gardn_neon from '../images/logos/sacrd_gardn_neon.png'
// import rotate_2100 from '../images/frames/rotate_2100.png'

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

import ActionShop from '../images/ActionShop.png'
import ActionNFT from '../images/ActionNFT.png'
import ActionVG from '../images/ActionVG.png'


const Landing = () => {

    const NFT = [ 
        one, two, three, four, five, P1, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P21, P23, P24, P25
    ]
   
    return(
        <div className='row g-5 d-flex'>

            {/* <Toaster /> */}

            <div className='col-12 overflow-hidden'>
                <Marquee gradientWidth={25}  className='rounded'>
                    {NFT.map((value) => { return(
                    <img src={value} alt={value} className="" key={value}/>
                    )})}
                </Marquee>
            </div>
            
            <div className="order-2 col-sm-12 col-md-6 col-xxl-4 Flora-Font d-flex text-center flex-column align-items-center justify-content-evenly">
                
                <div className="m-3">
                    <a href='https://opensea.io/collection/deltaflora'>
                        <img src={ActionNFT} alt='call to action' className="img-fluid rounded"/>
                    </a>
                    {/* <div onClick={()=>{
                        toast.error('This feature is not currently available.')
                    }}>
                        <img src={ActionNFT} alt='call to action' className="img-fluid rounded"/>
                    </div> */}
                </div>
                <div className="m-3">
                    <a href='https://my.matterport.com/show/?m=mvHce8tduYB&brand=0&play=1&wh=0'>
                        <img src={ActionVG} alt='call to action' className="img-fluid rounded"/>
                    </a>
                </div>
                <div className="m-3">
                    <a href='/shop'>
                        <img src={ActionShop} alt='call to action' className="img-fluid rounded"/>
                    </a>
                    {/* <div onClick={()=>{
                        toast.error('This feature is not currently available.')
                    }}>
                        <img src={ActionShop} alt='call to action' className="img-fluid rounded"/>
                    </div> */}
                </div>
            </div>

            <div className='order-1 order-xxl-3  col-sm-12 col-md-6 col-xxl-4 Flora-Font text-center d-flex flex-column align-items-center'>
                <div className="d-flex flex-column align-items-center justify-content-evenly p-3 rounded flex-fill" style={{backgroundColor: '#04F2AF', color: '#00544B'}}>
                    <p className="fs-2 p-3" >
                        Sacred Garden is a real and virtual  
                        psychedelic plant community with
                        a focus on conservation, cultivation 
                        and education. ΔFLORA
                        is your membership token.
                    </p>
                    <a  href="https://opensea.io/collection/deltaflora" className="py-4 rounded fs-2 text-decoration-none text-uppercase w-75" style={{backgroundColor: '#43D3EE', color: '#00544B'}}>
                        <span className="">join our community</span>
                    </a> 
                    {/* <button className="btn py-4 rounded fs-2 text-decoration-none text-uppercase w-75" onClick={()=>{
                        toast.error('This feature is not currently available.')
                    }} style={{backgroundColor: '#43D3EE', color: '#00544B'}}>
                        <span className="Flora-Font">join our community</span>
                    </button>  */}
                </div>
            </div>

            <div className="order-2 order-sm-2 order-md-4 order-xxl-4  col-sm-12 col-md-12 col-xxl-4 accordion accordion-flush d-flex flex-column justify-content-evenly" id="roadmap">
                {/* <div className="accordion-item m-2 rounded">
                    <h2 className="accordion-header" id="com-head">
                        <button className="accordion-button collapsed rounded Flora-Font fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#com-collapse" aria-expanded="false" aria-controls="com-collapse" style={{backgroundColor: '#04F2AF', color: '#00544B'}}>
                        ∆FLORA MEMBERSHIP TOKEN
                        </button>
                    </h2>
                    <div id="com-collapse" className="accordion-collapse collapse" aria-labelledby="com-head" data-bs-parent="#roadmap" style={{backgroundColor: '#FFF5B5', color: '#00544B'}}>
                        <div className="accordion accordion-body accordion-flush" id="floraNFT">
                            <div className="accordion-item rounded m-1">
                                <h2 className="accordion-header" id="claim-head">
                                    <button className="accordion-button collapsed rounded fs-5 Flora-Font" type="button" data-bs-toggle="collapse" data-bs-target="#claim-collapse" aria-expanded="false" aria-controls="claim-collapse" style={{backgroundColor: '#FFAC80', color: '#00544B'}}>
                                        CLAIM
                                    </button>
                                </h2>
                                <div id="claim-collapse" className="accordion-collapse collapse rounded fs-5 Flora-Font" aria-labelledby="claim-head" data-bs-parent="#floraNFT" style={{backgroundColor: '#FFE0E0', color: '#00544B'}}>
                                    <div className="accordion-body">
                                        1 free claim from our SHOP or PLANT MARKETPLACE per token.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item rounded m-1">
                                <h2 className="accordion-header" id="don-head">
                                    <button className="accordion-button collapsed fs-5 Flora-Font rounded" type="button" data-bs-toggle="collapse" data-bs-target="#don-collapse" aria-expanded="false" aria-controls="don-collapse" style={{backgroundColor: '#04F2AF', color: '#00544B'}}>
                                        DONATION
                                    </button>
                                </h2>
                                <div id="don-collapse" className="accordion-collapse collapse Flora-Font fs-5 rounded" aria-labelledby="don-head" data-bs-parent="#floraNFT" style={{backgroundColor: '#FFE0E0', color: '#00544B'}}>
                                    <div className="accordion-body">
                                        10% of token sales are donated to non-profit partners Chacruna Institute, ICEERS, Grow Medicine to support entheogen plant and indigenous community conservation
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item rounded m-1">
                                <h2 className="accordion-header" id="ref-head">
                                    <button className="accordion-button collapsed rounded fs-5 Flora-Font" type="button" data-bs-toggle="collapse" data-bs-target="#ref-collapse" aria-expanded="false" aria-controls="ref-collapse" style={{backgroundColor: '#FFC4E8', color: '#00544B'}}>
                                        REFORESTATION
                                    </button>
                                </h2>
                                <div id="ref-collapse" className="accordion-collapse collapse rounded fs-5 Flora-Font" aria-labelledby="ref-head" data-bs-parent="#floraNFT" style={{backgroundColor: '#FFE0E0', color: '#00544B'}}>
                                    <div className="accordion-body">
                                        We will offset our carbon footprint and donate to a reforestation project in the Amazon to have a carbon negative impact.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item rounded m-1">
                                <h2 className="accordion-header" id="mem-head">
                                    <button className="accordion-button collapsed Flora-Font fs-5 rounded" type="button" data-bs-toggle="collapse" data-bs-target="#mem-collapse" aria-expanded="false" aria-controls="mem-collapse" style={{backgroundColor: '#43D3EE', color: '#00544B'}}>
                                        COMMUNITY
                                    </button>
                                </h2>
                                <div id="mem-collapse" className="accordion-collapse collapse Flora-Font fs-5 rounded" aria-labelledby="mem-head" data-bs-parent="#floraNFT" style={{backgroundColor: '#FFE0E0', color: '#00544B'}}>
                                    <div className="accordion-body">
                                        Global network with exclusive content from plant experts and members only access virtual and IRL events.                                    
                                    </div>
                                </div>
                            </div>   
                            <div className="accordion-item rounded m-1">
                                <h2 className="accordion-header" id="exp-head">
                                    <button className="accordion-button collapsed Flora-Font fs-5 rounded" type="button" data-bs-toggle="collapse" data-bs-target="#exp-collapse" aria-expanded="false" aria-controls="exp-collapse" style={{backgroundColor: '#FFE0E0', color: '#00544B'}}>
                                        EXPERIENCES
                                    </button>
                                </h2>
                                <div id="exp-collapse" className="accordion-collapse collapse Flora-Font fs-5 rounded" aria-labelledby="exp-head" data-bs-parent="#floraNFT" style={{backgroundColor: '#FFE0E0', color: '#00544B'}}>
                                    <div className="accordion-body">
                                        access to education and experiences IRL and in the floraverse
                                    </div>
                                </div>
                            </div>                                     
                        </div>
                    </div>
                </div> */}
                <div className="accordion-item m-2 rounded">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed rounded Flora-Font fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{backgroundColor: '#FFAC80', color: '#00544B'}}>
                            SHOP
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse Flora-Font fs-5 rounded" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample" style={{backgroundColor: '#FFF5B5', color: '#00544B'}}>
                        <div className="accordion-body">
                            A decentralized global marketplace where small entheogenic gardeners offer seeds and cuttings of sacred plants.                        
                        </div>
                    </div>
                </div>
                <div className="accordion-item m-2 rounded">
                    <h2 className="accordion-header" id="master-head">
                        <button className="accordion-button collapsed Flora-Font rounded fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#master-collapse" aria-expanded="false" aria-controls="master-collapse" style={{backgroundColor: '#FFE0E0', color: '#00544B'}}>
                        LEARN
                        </button>
                    </h2>
                    <div id="master-collapse" className="accordion-collapse collapse Flora-Font rounded fs-5" aria-labelledby="master-head" data-bs-parent="#roadmap" style={{backgroundColor: '#FFF5B5', color: '#00544B'}}>
                        <div className="accordion-body">
                        Expand your mind and your gardening prowess on our platform with the help of world-class experts. Explore the virtual plant library, garden and experiences!
                        </div>
                    </div>
                </div>
                <div className="accordion-item m-2 rounded">
                    <h2 className="accordion-header" id="evo-head">
                        <button className="accordion-button collapsed Flora-Font rounded fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#evo-collapse" aria-expanded="false" aria-controls="evo-collapse" style={{backgroundColor: '#FFC4E8', color: '#00544B'}}>
                        GET PHYGITAL
                        </button>
                    </h2>
                    <div id="evo-collapse" className="accordion-collapse collapse Flora-Font rounded fs-5" aria-labelledby="master-evo" data-bs-parent="#roadmap" style={{backgroundColor: '#FFF5B5', color: '#00544B'}}>
                        <div className="accordion-body">
                            SACRΞD GARDΞN will bridge the physical and virtual from dirt to digital using IRL plants and web3 tools. Virtual plant library, growth simulator and the creation of the biggest decentralized garden of sacred plants.
                        </div>
                    </div>
                </div>
            </div>

            <div className="order-5 order-sm-5 order-xxl-5 col-12 Flora-Font d-flex text-center flex-row overflow-hidden align-items-center justify-content-evenly">
                    <Marquee gradientWidth={25} className='rounded'>
                        <div className="p-3 m-2 rounded text-center" style={{color: '#00544B'}}><span className="text-uppercase Flora-Font fs-2">IRL Plants</span></div>
                        <div className="p-3 m-2 rounded text-center" style={{color: '#00544B'}}><span className="text-uppercase Flora-Font fs-2">|</span></div>
                        <div className="p-3 m-2 rounded text-center" style={{color: '#00544B'}}><span className="text-uppercase Flora-Font fs-2">Plant Merch</span></div>
                        <div className="p-3 m-2 rounded text-center" style={{color: '#00544B'}}><span className="text-uppercase Flora-Font fs-2">|</span></div>
                        <div className="p-3 m-2 rounded text-center" style={{color: '#00544B'}}><span className="text-uppercase Flora-Font fs-2">Partner Experiences & Education</span></div>
                        <div className="p-3 m-2 rounded text-center" style={{color: '#00544B'}}><span className="text-uppercase Flora-Font fs-2">|</span></div>
                        <div className="p-3 m-2 rounded text-center" style={{color: '#00544B'}}><span className="text-uppercase Flora-Font fs-2">Plant Simulator</span></div>
                        <div className="p-3 m-2 rounded text-center" style={{color: '#00544B'}}><span className="text-uppercase Flora-Font fs-2">|</span></div>
                        <div className="p-3 m-2 rounded text-center" style={{color: '#00544B'}}><span className="text-uppercase Flora-Font fs-2">10% of proceeds go to non-profit partners</span></div>
                        <div className="p-3 m-2 rounded text-center" style={{color: '#00544B'}}><span className="text-uppercase Flora-Font fs-2">|</span></div>
                    </Marquee>
            </div>

        </div>
    );
    // bootstrap landing end 
};

export default Landing;