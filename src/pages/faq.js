import React from 'react';

const Faq = () => {
    const faqs = [
        {
            question: "How do I make a cryptocurrency wallet?"
            , 
            answer:"First you will need to set up a Coinbase account HERE . After you have set up your Coinbase account, you will need to set up your digital wallet via MetaMask HERE . Metamask video tutorial: Metamask Tutorial For COMPLETE Beginners."
        }
        , 
        {
            question: "How do I buy Crypto?"
            ,
            answer: "Coinbase is the most popular platform to use when purchasing Crypto because you can invest directly using USD. On Coinbase you can purchase Bitcoin, Ethereum, and 30+ other coins and tokens. If you are located in a country that does not support Coinbase, there are many other options."
        }
        ,
        {
            question: "What is an NFT (Non-Fungible Token)?"
            , 
            answer: "A non-fungible token is a non-interchangeable unit of data stored on a blockchain. It is a unique form of digital ledger that can be sold and traded on Web3. Although sometimes easily reproducible visually, NFT's use blockchain technology to establish a verified and public proof of ownership. Good resource for “What is an NFT”: HERE."
        }
        ,
        {
            question: "What is Blockchain?"
            , 
            answer: "Blockchain is a system of recording information in a way that makes it nearly impossible to change, hack, or cheat the system. A blockchain is essentially a trustless and transparent digital ledger of transactions verified in real-time."
        }
        ,
        {
            question: "What are gas fees?"
            , 
            answer: "Gas fees are the transaction fees that are paid to miners on a blockchain protocol to have their transaction included in the block. The fees fluctuate based on demand and are required in order to purchase an NFT and have it recorded on the blockchain."
        }
        ,
        {
            question: "What is Ethereum?"
            , 
            answer: "Ethereum is a decentralized, open-source blockchain with smart contract functionality. ETH is a cryptocurrency that can be used to purchase NFT’s on the Ethereum blockchain. The ΔFLORA NFT collection will be on Ethereum."
        }
        ,
        {
                question: "What is Minting?"
                , 
                answer: "Minting is the first time an NFT is recorded on the blockchain. The mint price is set as the same for all NFT's in the ΔFLORA genesis collection."
        }
        ,
        {
            question: "What is a greenlist?"
            , 
            answer: "A greenlist (sometimes called an allow list) is a list of people who can mint prior to the public sale. This guarantees the chance to mint an NFT before they sell out, and sometimes at a lower price. Greenlist spots are given via giveaways, contests and active community participation."
        }
        ,
        {
            question: "When will the ΔFLORA pre-sale take place?"
            ,
            answer: "Our team is currently planting the seeds and tending to your future ΔFLORA NFT. The sale is slated to happen in early summer 2022 but the official date has not yet been determined."
        }
        ,
        {
            question: "What is the price to mint a ΔFLORA NFT?"
            , 
            answer: "The official mint price is not yet available. Hang tight seedlings!"
        }
        ,
        {
            question: "How many ΔFLORA NFTs are there?"
            , 
            answer: "The official number of ΔFLORA NFTs is not yet available. Hang tight seedlings!"
        }
        ,
        {
            question: "Do all of the NFTs in the collection have the same utility?"
            , 
            answer: "Time will tell, frens. Some may be rarer or have traits that provide access into different realms."
        }
        ,
        {
            question: "How do I mint?"
            , 
            answer: 'Minting will take place on our website. If you are minting with a crypto wallet, you will simply connect your MetaMask wallet and select your quantity using the “Mint” button. If you are minting with a credit card and e-mail address, you will follow the steps on the Mint page to checkout.'
        }
        ,
        {
            question: "Can you own more than 1 ΔFLORA NFT?"
            ,
            answer: "Yes. Upon the reveal and evolution, you may find that holding 1 or a certain quantity is of value to you."
        }
        ,
        {
            question: "How many ΔFLORA NFTs can I mint if I am on the greenlist?"
            , 
            answer: "You will be able to mint up to 4 NFTs per wallet during the pre-sale."
        }
        ,
        {
            question: "How do I get on the greenlist for access to the pre-sale?"
            , 
            answer: "There will be a variety of opportunities across our media platforms to win a spot on our green list to ensure access to our pre-sale. Early adopters and community engagement will be rewarded. Be sure to enter your email below, join our discord or follow us on twitter to stay updated on greenlist opportunities!"}
        , 
        {
            question: "What can I expect from ΔFLORA in terms of giving back?"
            , 
            answer: "We are very excited to share the amazing partnerships, plans and vision that we have for this project around the conservation and therapeutic use of entheogenic plants.. As a group, we are dedicated to giving back in ways that will benefit not only our current generation, but also future generations. A seed has been planted."
        }
    ];
    
    return(   
        <div className='container align-center direct-col w-90'>
            {faqs.map((value) => {
                return(
                    <div className="relative container direct-row w-100" key={value.question}>
                        <div className="container direct-row space-between w-100 br-5 m-tb-1 p-1">
                            <div className='container justify-center align-center'>
                                <span className='text red br-10 m-0 faq-question'>
                                    {value.question}
                                </span>
                            </div>   
                            <div>
                                <button className="btn trans-red fs-3" onClick={
                                    function(event){
                                        
                                        console.log(window.getComputedStyle(event.target.parentNode.parentNode, null).marginTop);

                                        event.target.parentNode.parentNode.parentNode.children[1].style=`visibility: visibile; width:100%;
                                        height: ${event.target.parentNode.parentNode.clientHeight}px; top: ${window.getComputedStyle(event.target.parentNode.parentNode, null).marginTop};`;
                                    }}>+</button>
                            </div>    
                        </div>
                        <div className="absolute container direct-row space-between w-0 br-5 w-0 solid-red of-hidden transition-2 r-0" style={{visibility:"hidden", zIndex: 1}}>
                            <p className='p-1 m-0 text text-left faq-answer' style={{overflowY: "scroll"}}>
                                {value.answer}
                            </p>
                            <button className="btn trans-white fs-3" onClick={
                                function(event){
                                    event.target.parentNode.style=`visibility: hidden; width:0%; height: ${event.target.parentNode.parentNode.clientHeight}px; top: ${window.getComputedStyle(event.target.parentNode.parentNode, null).marginTop};`;
                                }}>-</button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Faq;