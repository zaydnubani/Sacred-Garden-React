import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

const Faq = () => {
    return(   
        <div className='col-12'>
            <div className="d-flex flex-column">
                <div className='d-flex flex-row p-3 m-3 rounded' style={{backgroundColor: '#00544B'}}>
                    <span className='Flora-Font fs-1' style={{color: '#FFAC80'}}>How do I make a cryptocurrency wallet?</span>
                    <button className="btn fs-1 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target='#faqOne' aria-expanded="false" aria-controls="faqOne" style={{color: '#FFAC80'}}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                <div className="collapse" id='faqOne'>
                    <div className="card card-body Flora-Font fs-4" style={{color: '#00544B', backgroundColor: '#FFF5B5'}}>
                        <span>
                            First you will need to set up a Coinbase account <a href='https://help.coinbase.com/en/coinbase/getting-started/getting-started-with-coinbase/create-a-coinbase-account'>HERE</a>. After you have set up your Coinbase account, you will need to set up your digital wallet via MetaMask <a href='https://metamask.io/'>HERE</a>. <a href='https://www.youtube.com/watch?v=6esyxExst1U'>Metamask video tutorial: Metamask Tutorial For COMPLETE Beginners</a>.
                        </span>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className='d-flex flex-row p-3 m-3 rounded' style={{backgroundColor: '#00544B'}}>
                    <span className='Flora-Font fs-1' style={{color: '#FFAC80'}}>How do I buy Crypto?</span>
                    <button className="btn fs-1 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target='#faqTwo' aria-expanded="false" aria-controls="faqTwo" style={{color: '#FFAC80'}}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                <div className="collapse" id='faqTwo'>
                    <div className="card card-body Flora-Font fs-4" style={{color: '#00544B', backgroundColor: '#FFF5B5'}}>
                        <span>    
                        Coinbase is the most popular platform to use when purchasing Crypto because you can invest directly using USD. On Coinbase you can purchase Bitcoin, Ethereum, and 30+ other coins and tokens. If you are located in a country that does not support Coinbase, there are many other options.
                        </span>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className='d-flex flex-row p-3 m-3 rounded' style={{backgroundColor: '#00544B'}}>
                    <span className='Flora-Font fs-1' style={{color: '#FFAC80'}}>What is an NFT (Non-Fungible Token)?</span>
                    <button className="btn fs-1 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target='#faqThree' aria-expanded="false" aria-controls="faqThree" style={{color: '#FFAC80'}}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                <div className="collapse" id='faqThree'>
                    <div className="card card-body Flora-Font fs-4" style={{color: '#00544B', backgroundColor: '#FFF5B5'}}>
                        <span>
                        A non-fungible token is a non-interchangeable unit of data stored on a blockchain. It is a unique form of digital ledger that can be sold and traded on Web3. Although sometimes easily reproducible visually, NFT's use blockchain technology to establish a verified and public proof of ownership. Good resource for “What is an NFT”: <a href='https://www.theverge.com/22310188/nft-explainer-what-is-blockchain-crypto-art-faq'>HERE</a>.
                        </span>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className='d-flex flex-row p-3 m-3 rounded' style={{backgroundColor: '#00544B'}}>
                    <span className='Flora-Font fs-1' style={{color: '#FFAC80'}}>What is Blockchain?</span>
                    <button className="btn fs-1 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target='#faqFour' aria-expanded="false" aria-controls="faqFour" style={{color: '#FFAC80'}}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                <div className="collapse" id='faqFour'>
                    <div className="card card-body Flora-Font fs-4" style={{color: '#00544B', backgroundColor: '#FFF5B5'}}>
                        <span>Blockchain is a system of recording information in a way that makes it nearly impossible to change, hack, or cheat the system. A blockchain is essentially a trustless and transparent digital ledger of transactions verified in real-time..</span>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className='d-flex flex-row p-3 m-3 rounded' style={{backgroundColor: '#00544B'}}>
                    <span className='Flora-Font fs-1' style={{color: '#FFAC80'}}>What are gas fees?</span>
                    <button className="btn fs-1 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target='#faqFive' aria-expanded="false" aria-controls="faqFive" style={{color: '#FFAC80'}}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                <div className="collapse" id='faqFive'>
                    <div className="card card-body Flora-Font fs-4" style={{color: '#00544B', backgroundColor: '#FFF5B5'}}>
                        <span>Gas fees are the transaction fees that are paid to miners on a blockchain protocol to have their transaction included in the block. The fees fluctuate based on demand and are required in order to purchase an NFT and have it recorded on the blockchain.</span>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className='d-flex flex-row p-3 m-3 rounded' style={{backgroundColor: '#00544B'}}>
                    <span className='Flora-Font fs-1' style={{color: '#FFAC80'}}>What is Ethereum?</span>
                    <button className="btn fs-1 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target='#faqSix' aria-expanded="false" aria-controls="faqSix" style={{color: '#FFAC80'}}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                <div className="collapse" id='faqSix'>
                    <div className="card card-body Flora-Font fs-4" style={{color: '#00544B', backgroundColor: '#FFF5B5'}}>
                        <span>Ethereum is a decentralized, open-source blockchain with smart contract functionality. ETH is a cryptocurrency that can be used to purchase NFT’s on the Ethereum blockchain. The ΔFLORA NFT collection will be on Ethereum.</span>

                    </div>
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className='d-flex flex-row p-3 m-3 rounded' style={{backgroundColor: '#00544B'}}>
                    <span className='Flora-Font fs-1' style={{color: '#FFAC80'}}>What is Minting?</span>
                    <button className="btn fs-1 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target='#faqSeven' aria-expanded="false" aria-controls="faqSeven" style={{color: '#FFAC80'}}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                <div className="collapse" id='faqSeven'>
                    <div className="card card-body Flora-Font fs-4" style={{color: '#00544B', backgroundColor: '#FFF5B5'}}>
                        <span>Minting is the first time an NFT is recorded on the blockchain. The mint price is set as the same for all NFT's in the ΔFLORA genesis collection.</span>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className='d-flex flex-row p-3 m-3 rounded' style={{backgroundColor: '#00544B'}}>
                    <span className='Flora-Font fs-1' style={{color: '#FFAC80'}}>What is Minting?</span>
                    <button className="btn fs-1 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target='#faqEight' aria-expanded="false" aria-controls="faqEight" style={{color: '#FFAC80'}}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                <div className="collapse" id='faqEight'>
                    <div className="card card-body Flora-Font fs-4" style={{color: '#00544B', backgroundColor: '#FFF5B5'}}>
                        <span>Minting is the first time an NFT is recorded on the blockchain. The mint price is set as the same for all NFT's in the ΔFLORA genesis collection.</span>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className='d-flex flex-row p-3 m-3 rounded' style={{backgroundColor: '#00544B'}}>
                    <span className='Flora-Font fs-1' style={{color: '#FFAC80'}}>What is a greenlist?</span>
                    <button className="btn fs-1 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target='#faqNine' aria-expanded="false" aria-controls="faqNine" style={{color: '#FFAC80'}}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                <div className="collapse" id='faqNine'>
                    <div className="card card-body Flora-Font fs-4" style={{color: '#00544B', backgroundColor: '#FFF5B5'}}>
                        <span>A greenlist (sometimes called an allow list) is a list of people who can mint prior to the public sale. This guarantees the chance to mint an NFT before they sell out, and sometimes at a lower price. Greenlist spots are given via giveaways, contests and active community participation.</span>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className='d-flex flex-row p-3 m-3 rounded' style={{backgroundColor: '#00544B'}}>
                    <span className='Flora-Font fs-1' style={{color: '#FFAC80'}}>When will the ΔFLORA pre-sale take place?</span>
                    <button className="btn fs-1 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target='#faqTen' aria-expanded="false" aria-controls="faqTen" style={{color: '#FFAC80'}}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                <div className="collapse" id='faqTen'>
                    <div className="card card-body Flora-Font fs-4" style={{color: '#00544B', backgroundColor: '#FFF5B5'}}>
                        <span>Our team is currently planting the seeds and tending to your future ΔFLORA NFT. The sale is slated to happen in early summer 2022 but the official date has not yet been determined.</span>
                    
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className='d-flex flex-row p-3 m-3 rounded' style={{backgroundColor: '#00544B'}}>
                    <span className='Flora-Font fs-1' style={{color: '#FFAC80'}}>What is the price to mint a ΔFLORA NFT?</span>
                    <button className="btn fs-1 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target='#faqEleven' aria-expanded="false" aria-controls="faqEleven" style={{color: '#FFAC80'}}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                <div className="collapse" id='faqEleven'>
                    <div className="card card-body Flora-Font fs-4" style={{color: '#00544B', backgroundColor: '#FFF5B5'}}>
                        <span>The official mint price is not yet available. Hang tight seedlings!</span>
                    
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className='d-flex flex-row p-3 m-3 rounded' style={{backgroundColor: '#00544B'}}>
                    <span className='Flora-Font fs-1' style={{color: '#FFAC80'}}>How many ΔFLORA NFTs are there?</span>
                    <button className="btn fs-1 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target='#faqTwelve' aria-expanded="false" aria-controls="faqTwelve" style={{color: '#FFAC80'}}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                <div className="collapse" id='faqTwelve'>
                    <div className="card card-body Flora-Font fs-4" style={{color: '#00544B', backgroundColor: '#FFF5B5'}}>
                        <span>The official number of ΔFLORA NFTs is not yet available. Hang tight seedlings!</span>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className='d-flex flex-row p-3 m-3 rounded' style={{backgroundColor: '#00544B'}}>
                    <span className='Flora-Font fs-1' style={{color: '#FFAC80'}}>Do all of the NFTs in the collection have the same utility?</span>
                    <button className="btn fs-1 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target='#faqThirteen' aria-expanded="false" aria-controls="faqThirteen" style={{color: '#FFAC80'}}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                <div className="collapse" id='faqThirteen'>
                    <div className="card card-body Flora-Font fs-4" style={{color: '#00544B', backgroundColor: '#FFF5B5'}}>
                        <span>Time will tell, frens. Some may be rarer or have traits that provide access into different realms.</span>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className='d-flex flex-row p-3 m-3 rounded' style={{backgroundColor: '#00544B'}}>
                    <span className='Flora-Font fs-1' style={{color: '#FFAC80'}}>How do I mint?</span>
                    <button className="btn fs-1 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target='#faqFourteen' aria-expanded="false" aria-controls="faqFourteen" style={{color: '#FFAC80'}}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                <div className="collapse" id='faqFourteen'>
                    <div className="card card-body Flora-Font fs-4" style={{color: '#00544B', backgroundColor: '#FFF5B5'}}>
                        <span>Minting will take place on our website. If you are minting with a crypto wallet, you will simply connect your MetaMask wallet and select your quantity using the “Mint” button. If you are minting with a credit card and e-mail address, you will follow the steps on the Mint page to checkout.</span>                   
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className='d-flex flex-row p-3 m-3 rounded' style={{backgroundColor: '#00544B'}}>
                    <span className='Flora-Font fs-1' style={{color: '#FFAC80'}}>Can you own more than 1 ΔFLORA NFT?</span>
                    <button className="btn fs-1 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target='#faqFifteen' aria-expanded="false" aria-controls="faqFifteen" style={{color: '#FFAC80'}}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                <div className="collapse" id='faqFifteen'>
                    <div className="card card-body Flora-Font fs-4" style={{color: '#00544B', backgroundColor: '#FFF5B5'}}>
                        <span>Yes. Upon the reveal and evolution, you may find that holding 1 or a certain quantity is of value to you.</span>                    
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className='d-flex flex-row p-3 m-3 rounded' style={{backgroundColor: '#00544B'}}>
                    <span className='Flora-Font fs-1' style={{color: '#FFAC80'}}>How many ΔFLORA NFTs can I mint if I am on the greenlist?</span>
                    <button className="btn fs-1 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target='#faqSixteen' aria-expanded="false" aria-controls="faqSixteen" style={{color: '#FFAC80'}}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                <div className="collapse" id='faqSixteen'>
                    <div className="card card-body Flora-Font fs-4" style={{color: '#00544B', backgroundColor: '#FFF5B5'}}>
                        <span>You will be able to mint up to 4 NFTs per wallet during the pre-sale.</span>                   
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className='d-flex flex-row p-3 m-3 rounded' style={{backgroundColor: '#00544B'}}>
                    <span className='Flora-Font fs-1' style={{color: '#FFAC80'}}>How do I get on the greenlist for access to the pre-sale?</span>
                    <button className="btn fs-1 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target='#faqSeventeen' aria-expanded="false" aria-controls="faqSeventeen" style={{color: '#FFAC80'}}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                <div className="collapse" id='faqSeventeen'>
                    <div className="card card-body Flora-Font fs-4" style={{color: '#00544B', backgroundColor: '#FFF5B5'}}>
                        <span>There will be a variety of opportunities across our media platforms to win a spot on our green list to ensure access to our pre-sale. Early adopters and community engagement will be rewarded. Be sure to enter your email below, join our discord or follow us on twitter to stay updated on greenlist opportunities!</span>                   
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column">
                <div className='d-flex flex-row p-3 m-3 rounded' style={{backgroundColor: '#00544B'}}>
                    <span className='Flora-Font fs-1' style={{color: '#FFAC80'}}>What can I expect from ΔFLORA in terms of giving back?</span>
                    <button className="btn fs-1 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target='#faqEighteen' aria-expanded="false" aria-controls="faqEighteen" style={{color: '#FFAC80'}}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                <div className="collapse" id='faqEighteen'>
                    <div className="card card-body Flora-Font fs-4" style={{color: '#00544B', backgroundColor: '#FFF5B5'}}>
                        <span>We are very excited to share the amazing partnerships, plans and vision that we have for this project around the conservation and therapeutic use of entheogenic plants.. As a group, we are dedicated to giving back in ways that will benefit not only our current generation, but also future generations. A seed has been planted.</span>                  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;