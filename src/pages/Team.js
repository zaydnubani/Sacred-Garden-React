import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'

import Amanda from '../images/team/amanda.png'
import Eli from '../images/team/eli.jpg'
import Jenna from '../images/team/jenna.jpg'

const Team = () => {
    return(
        <div className='col-12 d-flex flex-row flex-wrap justify-content-evenly'>
            <div className="card col-xxl-3 col-xl-3 col-lg-3 col-sm-12 m-3">
                <img src={Amanda} className="card-img-top" alt="..."/>
                <div className="card-body Flora-Font d-flex flex-column justify-content-evenly" style={{backgroundColor: '#FFE0E0', color: '#00544B'}}>
                    <span className="fs-4">Amanda Reiman, PhD MSW</span>
                    <div className='d-flex flex-row'>
                        <span className="fs-5 mb-2 text-muted">Founder & Head of Community</span>
                        <a href="https://twitter.com/AmandaReiman" className="fs-5 ms-auto">
                        <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                        </div>
                    
                    <div className='d-flex flex-row align-items-center justify-content-center p-2 rounded my-2' style={{backgroundColor: '#04F2AF'}}>
                        <span className='fs-5'>BIO</span>
                        <button className="btn ms-auto fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAmanda" aria-expanded="false" aria-controls="collapseAmanda" style={{color: '#00544B'}}>
                        <FontAwesomeIcon icon={faPlus}/>
                        </button>
                    </div>
                    <div class="collapse" id="collapseAmanda">
                        <div class="card card-body">
                            <p className="card-text">Amanda Reiman is a social ethnobotanist and the Founder of Personal Plants, a platform designed to deepen the relationship between people and flora. Dr. Reiman is an internationally recognized cannabis expert and public health researcher. Dubbed “The Brain” by Elle.com, she is a leader in the field of cannabis as a substitute for alcohol and other substances and has presented her research on cannabis dispensaries and the use of cannabis as a substitute for opiates all over the world. She taught courses on substance abuse treatment and drug policy at UC Berkeley for over 10 years. She has written for/been quoted in The Huffington Post, New York Times, Washington Post, Forbes, Rolling Stone and Playboy as well as numerous peer reviewed academic journals and several textbooks. When she isn't working, you can find her in the garden, working out in the metaverse, consuming cannabis and chocolate and being a kickass dog/cat mom.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card col-xxl-3 col-xl-3 col-lg-3 col-sm-12 m-3">
                <img src={Eli} className="card-img-top" alt="..."/>
                <div className="card-body Flora-Font d-flex flex-column justify-content-evenly" style={{backgroundColor: '#FFE0E0', color: '#00544B'}}>
                    <span className="fs-4">Eli Robbins</span>
                    <div className='d-flex flex-row'>
                        <span className="fs-5 mb-2 text-muted">Founder & Head of Design</span>
                        <a href="https://twitter.com/SpaceTimeCowboy" className="fs-5 ms-auto">
                        <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                        </div>
                    
                    <div className='d-flex flex-row align-items-center justify-content-center p-2 rounded my-2' style={{backgroundColor: '#04F2AF'}}>
                        <span className='fs-5'>BIO</span>
                        <button className="btn ms-auto fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEli" aria-expanded="false" aria-controls="collapseEli" style={{color: '#00544B'}}>
                        <FontAwesomeIcon icon={faPlus}/>
                        </button>
                    </div>
                    <div class="collapse" id="collapseEli">
                        <div class="card card-body">
                            <p className="card-text">Eli Robbins is an award winning Experience Designer with his practice CIVIO Studio. His work includes a wide variety of experiences both physical and digital with a strong background in Architecture, UX Design, and Immersive/Interactive Environments. He has experience designing bespoke virtual environments, metaverse spaces including plots in Cryptovoxels, and real physical environments with media architecture and digital interaction. He is well versed in NFT's, Brand Strategy, AR/VR, 3D Scanning, Photogrammetry, 3D modeling, Rendering/Visualization, Graphic Design, and Motion Graphics. When he isn't working, Eli likes to tend to his house plants, make linocut art, shoot film photography, flyfish, make delicious food and chill with his son Emilio and partner Rachel.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card col-xxl-3 col-xl-3 col-lg-3 col-sm-12 m-3">
                <img src={Jenna} className="card-img-top" alt="..."/>
                <div className="card-body Flora-Font d-flex flex-column justify-content-evenly" style={{backgroundColor: '#FFE0E0', color: '#00544B'}}>
                    <span className="fs-4">Jenna Greenfield</span>
                    <div className='d-flex flex-row'>
                        <span className="fs-5 mb-2 text-muted">Founder & Head of Business</span>
                        <a href="https://twitter.com/sagelygreen" className="fs-5 ms-auto">
                        <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                        </div>
                    
                    <div className='d-flex flex-row align-items-center justify-content-center p-2 rounded my-2' style={{backgroundColor: '#04F2AF'}}>
                        <span className='fs-5'>BIO</span>
                        <button className="btn ms-auto fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseJenna" aria-expanded="false" aria-controls="collapseJenna" style={{color: '#00544B'}}>
                        <FontAwesomeIcon icon={faPlus}/>
                        </button>
                    </div>
                    <div class="collapse" id="collapseJenna">
                        <div class="card card-body">
                            <p className="card-text">Jenna Greenfield is a CPA, entrepreneur and early stage enthusiast. She has spent the last decade in Silicon Valley working with tech and cannabis companies to help scale, monetize and build a successful business for the long term. Her experience spans business development, operations and finance. She built Sagely, her own consulting and beta fintech startup for the cannabis industry in 2016 which was acquired in 2020. Since then, she has become fully immersed in NFTs, DAOs and the future of Web3. When she isn’t working, you can find her traveling, kite surfing, enjoying the great outdoors, advocating for her pitbull and cooking local produce from her CSA!</p>
                        </div>
                    </div>
                </div>
            </div>                    
        </div>
    )
}

export default Team