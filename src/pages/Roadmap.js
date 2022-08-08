import React from 'react';

const Roadmap = () => {

    const milestones = [
        {
            title: "COMMUNITY", 
            info: "Twitter, Instagram, YouTube, Discord & Strategic Partnerships launched.", 
            order: 1
        }, 
        {
            title: "SHOP", 
            info: "Members will have access to exclusive and discounted psychedelic plant merchandise, partner experiences, planters and growing tools custom designed by artists.", 
            order: 3
        }, 
        {
            title: "∆FLORA DROPS & PLANT MARKETPLACE", 
            info: "Exclusive ∆FLORA drops of rare physical plant cuttings and a decentralized marketplace for plants with our farmer and garden members.", 
            order: 4
        }, 
        {
            title: "PLANT CULTIVATION SIMULATION", 
            info: "We support growing IRL & in the FLORAVERSE.  SUN, WATER and SOIL will be needed to make your plant grow.  Play to learn regardless of the prohibition status.", 
            order: 5
        }, 
        {
            title: "MASTERCLASS", 
            info: "Expand your mind and your gardening prowess on our platform with the help of world-class experts. Explore the virtual plant library, garden and experiences!", 
            order: 6
        }, 
        {
            title: "THE EVOLUTION", 
            info: "SACRΞD GARDΞN will bridge the physical and virtual from dirt to digital using IRL plants and web3 tools.  We will grow the biggest decentralized garden of sacred plants.", 
            order: 7
        }
    ];

    function expansionPack (event){

        let state = event.target.value;

        if (state === 'expand') {

            event.target.textContent = '-';

            event.target.value = 'contract';

            console.log(event.target.parentNode.parentNode.children[1].children[0]);

            event.target.parentNode.parentNode.children[1].style = `visibility: visible; opacity: 1; padding: 1%; height: ${event.target.parentNode.parentNode.children[1].children[0].clientHeight}px;`;

        } else if (state === 'contract') {

            event.target.textContent = '+';

            event.target.value = 'expand';

            event.target.parentNode.parentNode.children[1].style = `visibility: hidden; opacity: 0; height: 0px; padding: 0;`;

        }
    }

    function dlc (event){

        let state = event.target.value;

        console.log(event.target.value);

       if (state === 'expand'){

            localStorage.setItem('child', event.target.parentNode.parentNode.clientHeight);

            event.target.textContent = '-';

            event.target.value = 'contract';

            event.target.parentNode.parentNode.parentNode.parentNode.style = `height: ${event.target.parentNode.parentNode.parentNode.clientHeight + event.target.parentNode.parentNode.clientHeight + event.target.parentNode.parentNode.children[1].children[0].clientHeight}px; padding: 1%;`;

            event.target.parentNode.parentNode.children[1].style = `visibility: visible; opacity: 1; height: ${ event.target.parentNode.parentNode.children[1].children[0].clientHeight}px;`   

       } else if (state === 'contract'){

            event.target.textContent = '+';

            event.target.value = 'expand';

            event.target.parentNode.parentNode.parentNode.parentNode.style  = `height: ${event.target.parentNode.parentNode.parentNode.clientHeight - (event.target.parentNode.parentNode.clientHeight - localStorage.getItem("child"))}px; padding: 1%;`;

            event.target.parentNode.parentNode.children[1].style = `visibility: hidden; opacity: 0; height: 0px;`;
       } 
       
    }

    return(
        <div className='container direct-col w-90 transition-2s'>

            {milestones.map((stone) => {return(
                <div className="container direct-col align-center h-auto p-2 m-tb-2 transition-2 text br-5 solid-red" key={stone.title} style={{order: stone.order}}>
                    <div className="container direct-col justify-center align-center w-100 br-5 transition-2">
                        <div className="relative container align-center direct-row space-between w-100 transition-2 br-5">
                            <span className='white road-title'>{stone.title}</span>
                            <button className="btn trans-white fs-5 text-center" value="expand" 
                            onClick={expansionPack}>+</button>
                        </div>
                        <div className="container justify-center align-center direct-col h-0 w-100 br-5 transition-2 solid-white" style={{visibility: "hidden"}}>
                            <div className="container w-100 br-5 direct-col justify-center align-center transition-2 p-1">
                                <p className='road-description'>Members will have access to exclusive and discounted psychedelic plant merchandise, partner experiences, planters and growing tools custom designed by artists.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )})}

            <div className="container direct-col align-center h-auto p-2 m-tb-2 transition-2 text br-5 solid-red" style={{order: 2}}>
                <div className="container direct-col justify-center align-center w-100 br-5 transition-2">
                    <div className="relative container direct-row align-center space-between w-100 transition-2 br-5">

                        <span className='white road-title'>∆FLORA NFT</span>
                        <button className="btn trans-white text-center road-button fs-5" value="expand" onClick={expansionPack}>+</button>

                    </div>
                    <div className="container justify-center align-center direct-col h-0 w-100 br-5 transition-2 solid-white" style={{visibility: "hidden"}}>
                        <div className="container direct-col w-90 br-5 transition-2">
                            
                            <div className="container direct-col w-100 br-5 transition-2 solid-red p-1 m-tb-1">
                                <div className="relative container align-center direct-row space-between w-100 transition-2 br-5">

                                    <span className='white road-second-title'>CLAIM</span>
                                    <button className="btn trans-white fs-3" value="expand" onClick={dlc}>+</button>

                                </div>
                                <div className="container justify-center direct-col align-center h-0 w-100 br-5 transition-2 solid-white" style={{visibility: "hidden"}}>
                                    <p className='p-1 road-second-description'>1 free claim from our SHOP or PLANT MARKETPLACE per NFT</p>                    
                                </div>
                            </div>

                            <div className="container direct-col w-100 br-5 transition-2 solid-red p-1 m-tb-1">
                                <div className="relative container align-center direct-row space-between w-100 transition-2 br-5">

                                    <span className='white road-second-title'>DONATION</span>
                                    <button className="btn trans-white fs-3" value="expand" onClick={dlc}>+</button>

                                </div>
                                <div className="container justify-center direct-col align-center h-0 w-100 br-5 transition-2 solid-white" style={{visibility: "hidden"}}>

                                    <p className='p-1 road-second-description'>10% of initial sale is donated to non-profit partners Chacruna Institute, ICEERS, Grow Medicine to support entheogen plant and indigenous community conservation</p>
                                
                                </div>
                            </div>

                            <div className="container direct-col w-100 br-5 transition-2 solid-red p-1 m-tb-1">
                                <div className="relative container align-center direct-row space-between w-100 transition-2 br-5">

                                    <span className='white road-second-title'>REFORESTATION</span>
                                    <button className="btn trans-white fs-3" value="expand" onClick={dlc}>+</button>

                                </div>
                                <div className="container justify-center direct-col align-center h-0 w-100 br-5 transition-2 solid-white" style={{visibility: "hidden"}}>

                                    <p className='p-1 road-second-description'>We will offset our carbon footprint and donate to a reforestation project in the Amazon to have a carbon negative impact</p>
                                
                                </div>
                            </div>

                            <div className="container direct-col w-100 br-5 transition-2 solid-red p-1 m-tb-1">
                                <div className="relative container align-center direct-row space-between w-100 transition-2 br-5">

                                    <span className='white road-second-title'>MEMBERSHIP</span>
                                    <button className="btn trans-white fs-3" value="expand" onClick={dlc}>+</button>

                                </div>
                                <div className="container justify-center direct-col align-center h-0 w-100 br-5 transition-2 solid-white" style={{visibility: "hidden"}}>

                                    <p className='p-1 road-second-description'>global community with exclusive chats, first access to future drops and integration with our partner network of psychedelic pioneers</p>
                                
                                </div>
                            </div>

                            <div className="container direct-col w-100 br-5 transition-2 solid-red p-1 m-tb-1">
                                <div className="relative container align-center direct-row space-between w-100 transition-2 br-5">

                                    <span className='white road-second-title'>EXPERIENCES</span>
                                    <button className="btn trans-white fs-3" value="expand" onClick={dlc}>+</button>

                                </div>
                                <div className="container justify-center direct-col align-center h-0 w-100 br-5 transition-2 solid-white" style={{visibility: "hidden"}}>

                                    <p className='p-1 road-second-description'>access to education and experiences IRL and in the floraverse</p>
                                
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
             </div>
        </div>        
    )
};

export default Roadmap