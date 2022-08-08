import React from 'react';

import sacrd_gardn_neon from '../images/logos/sacrd_gardn_neon.png'
import rotate_2100 from '../images/frames/rotate_2100.png'

// import one from '../images/300px/1.png'
// import two from '../images/300px/2.png'
// import three from '../images/300px/3.png'
// import four from '../images/300px/4.png'
// import five from '../images/300px/5.png'
// import P1 from '../images/300px/P1.png'
// import P3 from '../images/300px/P3.png'
// import P4 from '../images/300px/P4.png'
// import P5 from '../images/300px/P5.png'
// import P6 from '../images/300px/P6.png'
// import P7 from '../images/300px/P7.png'
// import P8 from '../images/300px/P8.png'
// import P9 from '../images/300px/P9.png'
// import P10 from '../images/300px/P10.png'
// import P11 from '../images/300px/P11.png'
// import P12 from '../images/300px/P12.png'
// import P13 from '../images/300px/P13.png'
// import P14 from '../images/300px/P14.png'
// import P15 from '../images/300px/P15.png'
// import P16 from '../images/300px/P16.png'
// import P17 from '../images/300px/P17.png'
// import P18 from '../images/300px/P18.png'
// import P19 from '../images/300px/P19.png'
// import P21 from '../images/300px/P21.png'
// import P23 from '../images/300px/P23.png'
// import P24 from '../images/300px/P24.png'
// import P25 from '../images/300px/P25.png'

// import Chacruna from '../images/Partner Logos/Chacruna-logo-original.png'
// import GrowMedicine from '../images/Partner Logos/GrowMedicine_High Res Logo.png'
// import ICEERS from '../images/Partner Logos/ICEERS1.png'
// import PsychedelicsToday from '../images/Partner Logos/Psychedlics Today Logo Black Words .png'
// import SistersPsychedelics from '../images/Partner Logos/Sisters in Psychedelics.png'
// import TucsonHerpSociety from '../images/Partner Logos/Tucson Herpetological Society_hires.png'

// import callAction from '../images/TakeAction.png'

// import MOV from '../videos/Aya-tube-cycles-v01-edited.MOV'
// import WEBM from '../videos/Aya-tube-cycles-v01-edited.webm'

const Landing = () => {

    // const NFT = [ 
    //     one, two, three, four, five, P1, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17, P18, P19, P21, P23, P24, P25
    // ]

    // const partners = [
    //     Chacruna, PsychedelicsToday, GrowMedicine, ICEERS, SistersPsychedelics, TucsonHerpSociety
    // ]
    
    // non bootstrap start
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
    // non bootstrap end
    
    // bootstrap landing start 
        // <div className='row g-2'>

        //         <div className="col-12 d-flex flex-row overflow-scroll justify-content-center rounded p-3">
        //             {NFT.map((value) => { return(
        //                 <img src={value} alt={value} className="" key={value}/>
        //             )})}
        //         </div>

        //         <div className="accordion accordion-flush col-4" id="roadmap">
        //             <div className="accordion-item m-1 rounded">
        //                 <h2 className="accordion-header" id="flora-header">
        //                     <button className="accordion-button collapsed fs-4 Flora-Font rounded" type="button" data-bs-toggle="collapse" data-bs-target="#flora-collapse" aria-expanded="false" aria-controls="flora-collapse" style={{backgroundColor: '#FFC4E8', color: '#00544B'}}>
        //                     COMMUNITY
        //                     </button>
        //                 </h2>
        //                 <div id="flora-collapse" className="accordion-collapse collapse Flora-Font fs-5" aria-labelledby="flora-header" data-bs-parent="#roadmap" style={{backgroundColor: '#FFF5B5', color: '#00544B'}}>
        //                     <div className="accordion-body rounded">
        //                     Twitter, Instagram, YouTube, Discord & Strategic Partnerships launched.
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="accordion-item rounded m-1">
        //                 <h2 class="accordion-header" id="com-head">
        //                     <button class="accordion-button collapsed rounded Flora-Font fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#com-collapse" aria-expanded="false" aria-controls="com-collapse" style={{backgroundColor: '#04F2AF', color: '#00544B'}}>
        //                     ∆FLORA NFT
        //                     </button>
        //                 </h2>
        //                 <div id="com-collapse" class="accordion-collapse collapse" aria-labelledby="com-head" data-bs-parent="#roadmap" style={{backgroundColor: '#FFF5B5', color: '#00544B'}}>
        //                     <div class="accordion accordion-body accordion-flush" id="floraNFT">
        //                         <div class="accordion-item rounded m-1">
        //                             <h2 class="accordion-header" id="claim-head">
        //                                 <button class="accordion-button collapsed rounded fs-5 Flora-Font" type="button" data-bs-toggle="collapse" data-bs-target="#claim-collapse" aria-expanded="false" aria-controls="claim-collapse" style={{backgroundColor: '#04F2AF', color: '#00544B'}}>
        //                                     CLAIM
        //                                 </button>
        //                             </h2>
        //                             <div id="claim-collapse" class="accordion-collapse collapse rounded fs-5 Flora-Font" aria-labelledby="claim-head" data-bs-parent="#floraNFT" style={{backgroundColor: '#04F2AF', color: '#00544B'}}>
        //                                 <div class="accordion-body">
        //                                     1 free claim from our SHOP or PLANT MARKETPLACE per NFT
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div class="accordion-item rounded m-1">
        //                             <h2 class="accordion-header" id="don-head">
        //                                 <button class="accordion-button collapsed fs-5 Flora-Font rounded" type="button" data-bs-toggle="collapse" data-bs-target="#don-collapse" aria-expanded="false" aria-controls="don-collapse" style={{backgroundColor: '#04F2AF', color: '#00544B'}}>
        //                                     DONATION
        //                                 </button>
        //                             </h2>
        //                             <div id="don-collapse" class="accordion-collapse collapse Flora-Font fs-5 rounded" aria-labelledby="don-head" data-bs-parent="#floraNFT" style={{backgroundColor: '#04F2AF', color: '#00544B'}}>
        //                                 <div class="accordion-body">
        //                                     10% of initial sale is donated to non-profit partners Chacruna Institute, ICEERS, Grow Medicine to support entheogen plant and indigenous community conservation
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div class="accordion-item rounded m-1">
        //                             <h2 class="accordion-header" id="ref-head">
        //                                 <button class="accordion-button collapsed rounded fs-5 Flora-Font" type="button" data-bs-toggle="collapse" data-bs-target="#ref-collapse" aria-expanded="false" aria-controls="ref-collapse" style={{backgroundColor: '#04F2AF', color: '#00544B'}}>
        //                                     REFORESTATION
        //                                 </button>
        //                             </h2>
        //                             <div id="ref-collapse" class="accordion-collapse collapse rounded fs-5 Flora-Font" aria-labelledby="ref-head" data-bs-parent="#floraNFT" style={{backgroundColor: '#04F2AF', color: '#00544B'}}>
        //                                 <div class="accordion-body">
        //                                     We will offset our carbon footprint and donate to a reforestation project in the Amazon to have a carbon negative impact
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div class="accordion-item rounded m-1">
        //                             <h2 class="accordion-header" id="mem-head">
        //                                 <button class="accordion-button collapsed Flora-Font fs-5 rounded" type="button" data-bs-toggle="collapse" data-bs-target="#mem-collapse" aria-expanded="false" aria-controls="mem-collapse" style={{backgroundColor: '#04F2AF', color: '#00544B'}}>
        //                                     MEMBERSHIP
        //                                 </button>
        //                             </h2>
        //                             <div id="mem-collapse" class="accordion-collapse collapse Flora-Font fs-5 rounded" aria-labelledby="mem-head" data-bs-parent="#floraNFT" style={{backgroundColor: '#04F2AF', color: '#00544B'}}>
        //                                 <div class="accordion-body">
        //                                     global community with exclusive chats, first access to future drops and integration with our partner network of psychedelic pioneers
        //                                 </div>
        //                             </div>
        //                         </div>   
        //                         <div class="accordion-item rounded m-1">
        //                             <h2 class="accordion-header" id="exp-head">
        //                                 <button class="accordion-button collapsed Flora-Font fs-5 rounded" type="button" data-bs-toggle="collapse" data-bs-target="#exp-collapse" aria-expanded="false" aria-controls="exp-collapse" style={{backgroundColor: '#04F2AF', color: '#00544B'}}>
        //                                     EXPERIENCES
        //                                 </button>
        //                             </h2>
        //                             <div id="exp-collapse" class="accordion-collapse collapse Flora-Font fs-5 rounded" aria-labelledby="exp-head" data-bs-parent="#floraNFT" style={{backgroundColor: '#04F2AF', color: '#00544B'}}>
        //                                 <div class="accordion-body">
        //                                     access to education and experiences IRL and in the floraverse
        //                                 </div>
        //                             </div>
        //                         </div>                                     
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="accordion-item rounded m-1">
        //                 <h2 class="accordion-header" id="flush-headingThree">
        //                     <button class="accordion-button collapsed rounded Flora-Font fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{backgroundColor: '#FFAC80', color: '#00544B'}}>
        //                         SHOP
        //                     </button>
        //                 </h2>
        //                 <div id="flush-collapseThree" class="accordion-collapse collapse Flora-Font fs-5 rounded" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample" style={{backgroundColor: '#FFF5B5', color: '#00544B'}}>
        //                     <div class="accordion-body">
        //                         Members will have access to exclusive and discounted psychedelic plant merchandise, partner experiences, planters and growing tools custom designed by artists.
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="accordion-item rounded m-1">
        //                 <h2 class="accordion-header" id="market-head">
        //                     <button class="accordion-button collapsed rounded Flora-Font fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#market-collapse" aria-expanded="false" aria-controls="market-collapse" style={{backgroundColor: '#FFF5B5', color: '#00544B'}}>
        //                     ∆FLORA DROPS & PLANT MARKETPLACE
        //                     </button>
        //                 </h2>
        //                 <div id="market-collapse" class="accordion-collapse collapse rounded Flora-Font fs-5" aria-labelledby="market-head" data-bs-parent="#roadmap" style={{backgroundColor: '#FFF5B5', color: '#00544B'}}>
        //                     <div class="accordion-body">
        //                     Exclusive ∆FLORA drops of rare physical plant cuttings and a decentralized marketplace for plants with our farmer and garden members.
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="accordion-item rounded m-1">
        //                 <h2 class="accordion-header" id="master-head">
        //                     <button class="accordion-button collapsed Flora-Font rounded fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#master-collapse" aria-expanded="false" aria-controls="master-collapse" style={{backgroundColor: '#FFE0E0', color: '#00544B'}}>
        //                     MASTERCLASS
        //                     </button>
        //                 </h2>
        //                 <div id="master-collapse" class="accordion-collapse collapse Flora-Font rounded fs-5" aria-labelledby="master-head" data-bs-parent="#roadmap" style={{backgroundColor: '#FFF5B5', color: '#00544B'}}>
        //                     <div class="accordion-body">
        //                     Expand your mind and your gardening prowess on our platform with the help of world-class experts. Explore the virtual plant library, garden and experiences!
        //                     </div>
        //                 </div>
        //             </div>
        //             <div class="accordion-item rounded m-1">
        //                 <h2 class="accordion-header" id="evo-head">
        //                     <button class="accordion-button collapsed Flora-Font rounded fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#evo-collapse" aria-expanded="false" aria-controls="evo-collapse" style={{backgroundColor: '#FFC4E8', color: '#00544B'}}>
        //                     THE EVOLUTION
        //                     </button>
        //                 </h2>
        //                 <div id="evo-collapse" class="accordion-collapse collapse Flora-Font rounded fs-5" aria-labelledby="master-evo" data-bs-parent="#roadmap" style={{backgroundColor: '#FFF5B5', color: '#00544B'}}>
        //                     <div class="accordion-body">
        //                     SACRΞD GARDΞN will bridge the physical and virtual from dirt to digital using IRL plants and web3 tools.  We will grow the biggest decentralized garden of sacred plants.
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className='col-xxl-4 col-xl-4 col-sm-12 Flora-Font text-center d-flex flex-column align-items-center'>
        //             <div className="d-flex flex-column align-items-center justify-content-evenly p-2 rounded w-100 flex-fill" style={{backgroundColor: '#04F2AF', color: 'cornsilk'}}>
        //                 <p className="fs-4" >
        //                     Sacred Garden is a real and virtual 
        //                     <br />
        //                     psychedelic plant community with
        //                     <br />
        //                     a focus on conservation, cultivation 
        //                     <br />
        //                     and education. Our ΔFLORA NFT 
        //                     <br />
        //                     is your membership token.
        //                 </p>
        //                 <a  href="/Mint" className="p-3 rounded fs-2 text-decoration-none text-uppercase w-75" style={{backgroundColor: '#43D3EE', color: 'cornsilk'}}>
        //                     <span className="">Plant a Seed</span>
        //                 </a> 
        //             </div>
        //         </div>

        //         <div className="col-xxl-4 col-xl-4 Flora-Font d-flex text-center flex-wrap flex-row align-items-center justify-content-evenly">
        //                 <div className="text-decoration-none flex-fill w-100">
        //                     <div className="p-3 m-1 rounded text-center" style={{color: 'cornsilk',backgroundColor: '#FFC4E8'}}><span className="text-uppercase Flora-Font fs-4">IRL Plants</span></div>
        //                 </div>
        //                 <div className="text-decoration-none flex-fill">
        //                     <div className="p-3 m-1 rounded text-center" style={{color: 'cornsilk', backgroundColor: "#43D3EE",}}><span className="text-uppercase Flora-Font fs-4">Plant Merch</span></div>
        //                 </div>
        //                 <div className="text-decoration-none flex-fill">
        //                     <div className="p-3 m-1 rounded text-center" style={{color: 'cornsilk',backgroundColor: '#00544B'}}><span className="text-uppercase Flora-Font fs-4">Partner Experiences & Education</span></div>
        //                 </div>
        //                 <div className="text-decoration-none flex-fill">
        //                     <div className="p-3 m-1 rounded text-center" style={{color: 'cornsilk',backgroundColor: '#04F2AF'}}><span className="text-uppercase Flora-Font fs-4">Hold for Plant Simulator</span></div>
        //                 </div>
        //                 <div className="text-decoration-none flex-fill">
        //                     <div className="p-3 m-1 rounded text-center" style={{color: 'cornsilk',backgroundColor: '#FFAC80'}}><span className="text-uppercase Flora-Font fs-4">10% of proceeds go to non-profit partners</span></div>
        //                 </div>
        //         </div>

        //         <div className="col-4">
        //             <a href='https://opensea.io/collection/gardenconservation'>
        //                 <img src={callAction} alt='call to action' className="img-fluid rounded"/>
        //             </a>
        //         </div>

        //         <div className="col-4">
        //             <a href='/mint'>
        //                 <img src={callAction} alt='call to action' className="img-fluid rounded"/>
        //             </a>
        //         </div>

        //         <div className="col-4">
        //             <a href='https://my.matterport.com/show/?m=mvHce8tduYB&brand=0&play=1&wh=0'>
        //                 <img src={callAction} alt='call to action' className="img-fluid rounded"/>
        //             </a>
        //         </div>
        // </div>
        // bootstrap landing end 
};

export default Landing;