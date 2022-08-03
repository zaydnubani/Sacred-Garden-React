import React from 'react';

import Amanda from '../images/team/amanda.png'
import Eli from '../images/team/eli.jpg'
import Jenna from '../images/team/jenna.jpg'
import Twitter from '../images/logos/twitter.png'

const Team = () => {
    const members = [
        {
            headshot: `${Amanda}`,
            name: 'Amanda Reiman, PhD MSW',
            title: 'Founder & Head of Community',
            bio: "Amanda Reiman is a social ethnobotanist and the Founder of Personal Plants, a platform designed to deepen the relationship between people and flora. Dr. Reiman is an internationally recognized cannabis expert and public health researcher. Dubbed “The Brain” by Elle.com, she is a leader in the field of cannabis as a substitute for alcohol and other substances and has presented her research on cannabis dispensaries and the use of cannabis as a substitute for opiates all over the world. She taught courses on substance abuse treatment and drug policy at UC Berkeley for over 10 years. She has written for/been quoted in The Huffington Post, New York Times, Washington Post, Forbes, Rolling Stone and Playboy as well as numerous peer reviewed academic journals and several textbooks. When she isn't working, you can find her in the garden, working out in the metaverse, consuming cannabis and chocolate and being a kickass dog/cat mom.",
            twitter: "https://twitter.com/AmandaReiman"
        },
        {
            headshot: `${Eli}`,
            name: "Eli Robbins",
            title: "Founder & Head of Design",
            bio: "Eli Robbins is an award winning Experience Designer with his practice CIVIO Studio. His work includes a wide variety of experiences both physical and digital with a strong background in Architecture, UX Design, and Immersive/Interactive Environments. He has experience designing bespoke virtual environments, metaverse spaces including plots in Cryptovoxels, and real physical environments with media architecture and digital interaction. He is well versed in NFT's, Brand Strategy, AR/VR, 3D Scanning, Photogrammetry, 3D modeling, Rendering/Visualization, Graphic Design, and Motion Graphics. When he isn't working, Eli likes to tend to his house plants, make linocut art, shoot film photography, flyfish, make delicious food and chill with his son Emilio and partner Rachel.",
            twitter: "https://twitter.com/SpaceTimeCowboy"
        },
        {
            headshot: `${Jenna}`, 
            name: "Jenna Greenfield",
            title: "Founder & Head of Business",
            bio: "Jenna Greenfield is a CPA, entrepreneur and early stage enthusiast. She has spent the last decade in Silicon Valley working with tech and cannabis companies to help scale, monetize and build a successful business for the long term. Her experience spans business development, operations and finance. She built Sagely, her own consulting and beta fintech startup for the cannabis industry in 2016 which was acquired in 2020. Since then, she has become fully immersed in NFTs, DAOs and the future of Web3. When she isn’t working, you can find her traveling, kite surfing, enjoying the great outdoors, advocating for her pitbull and cooking local produce from her CSA!",
            twitter: "https://twitter.com/sagelygreen"
        }
    ];

    return(
        <div className='relative container justify-center align-center direct-col w-90'>
            {members.map((member) => {
                return(
                    <div className='relative container direct-row h-auto w-100 br-10 m-5' key={member.name}>
                        <div className='container direct-row p-3 w-100 br-10 bg-p-bot' style={{backgroundImage: "url('/images/backgrounds/body/B26.png')"}}>
                            <div className='img-30'>
                                <img className="img img-100 br-10" src={member.headshot} alt={member.name}/>
                            </div>
                            <div className='container direct-col space-evenly grow-2 p-1 align-start text red'>
                                <div className='title-team wrap'>
                                    {member.name}
                                </div>
                                <div className='subTitle-team'>
                                    {member.title}
                                </div>
                            </div>
                        </div>
                        <div className='absolute r-0 container space-evenly direct-col h-50 w-10 text-center justify-center align-center t-0 transition-2 red text bg-p-center fs-3' style={{backgroundImage: "url('/images/backgrounds/body/B21.png')", borderRadius: '0 10px 0 0' }} onClick={function(event){
                                event.target.children[0].style = 'display: block;';
                                event.target.children[1].style = 'display: block;';
                                if(window.screen.width >= 1400){
                                    event.target.style = `width:${event.target.parentNode.offsetWidth}px; height:${event.target.parentNode.offsetHeight}px; font-size:2vw; overflow-y:scroll; z-index:1; padding: 5%; border-radius: 10px; background-image: url("/images/backgrounds/body/B21.png");`;
                                } else if(window.screen.width >= 1200) {
                                    event.target.style = `width:${event.target.parentNode.offsetWidth}px; height:${event.target.parentNode.offsetHeight}px; font-size:1.75vw; overflow-y:scroll; z-index:1; padding: 1% 0; border-radius: 10px; background-image: url("/images/backgrounds/body/B21.png");`;
                                }  else if(window.screen.width >= 992) {
                                    event.target.style = `width:${event.target.parentNode.offsetWidth}px; height:${event.target.parentNode.offsetHeight}px; font-size:1.5vw; overflow-y:scroll; z-index:1; padding: 2% 0; border-radius: 10px; background-image: url("/images/backgrounds/body/B21.png");`;
                                } else if(window.screen.width >= 768) {
                                    event.target.style = `width:${event.target.parentNode.offsetWidth}px; height:${event.target.parentNode.offsetHeight}px; font-size:1.25vw; overflow-y:scroll; z-index:1; padding: 2% 0; border-radius: 10px; background-image: url("/images/backgrounds/body/B21.png");`;
                                } else if(window.screen.width >= 576) {
                                    event.target.style =`width:${event.target.parentNode.offsetWidth}px; height:${event.target.parentNode.offsetHeight}px; font-size:1vw; overflow-y:scroll; z-index:1; padding: 2% 0; border-radius: 10px; background-image: url("/images/backgrounds/body/B21.png");`;
                                } else if(window.screen.width >= 360) {
                                    event.target.style = `width:${event.target.parentNode.offsetWidth}px; height:${event.target.parentNode.offsetHeight}px; font-size:0.75vw; overflow-y:scroll; z-index:1; padding: 2% 0; border-radius: 10px; background-image: url("/images/backgrounds/body/B21.png");`;
                                }
                            }}>
                            <button className='container align-center absolute z-2 t-0 r-0 p-1 br-10 btn trans-red fs-3' style={{display: "none"}} onClick={function(event){
                                event.target.style = 'display: none;';
                                event.target.parentNode.children[1].style='display: none;';
                                event.target.parentNode.style= 'border-radius: 0 10px 0 0; background-image: url("/images/backgrounds/body/B21.png")';
                            }}>&times;</button>
                            BIO
                            <p className="text-center h-100 w-90 " style={{display: "none", alignSelf: 'center',}}>
                                {member.bio}
                            </p>
                        </div>
                        <a className='absolute r-0 container space-evenly direct-col h-50 w-10 text-center align-center b-0 transition-2 bg-p-top' style={{backgroundImage: "url('/images/backgrounds/body/B26.png')", borderRadius: '0 0 10px 0'}} href={member.twitter}>
                            <img className='img img-30' src={Twitter} alt="Twitter Logo"/>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export default Team