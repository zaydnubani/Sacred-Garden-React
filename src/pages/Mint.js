import React, { useEffect, useState } from 'react'

import mint_2100 from '../images/frames/mint_2100.png'
import logo_1 from '../images/gifs/Logo_1.gif'
import web from '../images/gifs/web.gif'

import { useConnectWallet } from '@web3-onboard/react';
import initWeb3Onboard from '../services';
import { DeltaFloraGenesis__factory } from '../ethers-contracts';
import { ethers } from 'ethers';
import toast, { Toaster } from 'react-hot-toast';
// for greenList mint
// import { TESTNET_LEAVES_DATA } from '../emarald/SG_leaves.js';
// import MerkleTree from 'merkletreejs';
// import keccak256 from 'keccak256';
import { WinterCheckout } from '@usewinter/checkout'

const MAINNET_CONTRACT_ADDRESS = "0x21374d22f169849cfd680241f3f37cd61ac2eea5";

// const TESTNET_CONTRACT_ADDRESS = '0x3D938ece3C0D8F83c6964b462Dfcd42a612DaF86'

const Mint = () => {

  // this is used to set the quantity to be minted
  const [quantity, setQuantity] = useState(1);

  // this is used to hold the initialized waller
  const [web3Onboard, setWeb3Onboard] = useState();

  // this is used to clarify if a wallet is present and to connect/disconnect from a wallet
  const [{ wallet, connecting }, connect] = useConnectWallet()  

  // this sets the connected wallet's providers and references their addresses to be used during transactions
  const [provider, setProvider] = useState();

  // this sets the mint price, or cost to mint, so that it may be referenced as a static variable elsewhere
  const [price, setPrice] = useState();

  // this sets no. of NFTs minted, so that it may be references as a static variable elsewhere
  const [minted, setMinted] = useState();

  // this sets current minting stage, so that it may be referenced as a static variable elsewhere
  const [stage, setStage] = useState();

  const [complete, setComplete] = useState();

  const [nftID, setNFTIDs] = useState();

  const [winterMint, setWinter] = useState();

  // const previouslyConnectedWallets = JSON.parse(
  //   window.localStorage.getItem('connectedWallets')
  // );
  

  useEffect(() => {
    // This initializes bloclknative so that wallets can be connected given custom parameters from '../service' 
    console.log('wallet is approaching')
    setWeb3Onboard(initWeb3Onboard)
  }, []);

  useEffect(() => {
   // Asks IF there ISN'T a wallet connected or a provider then...
    if (wallet) {
      // throws a func that sets the provider given their ETH information to be used in a static state
      setProvider(new ethers.providers.Web3Provider(wallet.provider, 'any'))
      console.log('wallet is in the building')
    } else {
      return
    }
  }, [wallet]);

  useEffect(() => {
    // This retrieves the totalSupply of NFTs minted given the specific contract using wallet provider information
    const getMinted = async (provider ) => {
      // This connects the contract to the wallet provider to initialize communication and pass information
      const sacrdgardn = DeltaFloraGenesis__factory.connect(MAINNET_CONTRACT_ADDRESS, provider);
      // Returns a promise to await a response from the contract to send it's totalSupply
      return (await sacrdgardn.totalSupply()).toString();
    }
    // sets a variable to call func getMinted given the var provider which points to the wallet provider
    // The provider is requesting the contract to respond with the supply
    const promise = getMinted(provider) 
    // Once the promise has been fulfilled the response is returned in a readable string
    promise.then((result) => {
      setMinted(result)
      console.log(`Total Supplied : ${result}`)
    })
  }, [ provider ])

  useEffect(() => {
     // This retrieves the minting price of NFTs minted given the specific contract using wallet provider information
     const getPrice = async (provider ) => {
      // This connects the contract to the wallet provider to initialize communication and pass information
      const sacrdgardn = DeltaFloraGenesis__factory.connect(MAINNET_CONTRACT_ADDRESS, provider);
      // Returns a promise to await a response from the contract to send it's mintPrice
      const stage = await sacrdgardn.currentStage();
      return (await sacrdgardn.stages(stage));
    }
    // sets a variable to call func getPrice given the var provider which points to the wallet provider
    // The provider is requesting the contract to respond with the supply
    const promise = getPrice(provider) 
    // Once the promise has been fulfilled the response is returned in a readable string
    promise.then((result) => {
      setPrice(result)
      console.log(`Current Minting Price : ${result}`)
    })
  }, [ provider ])

  useEffect(() => {
    // This retrieves the minting stage of NFTs minted given the specific contract using wallet provider information
    const getStage = async (provider ) => {
     // This connects the contract to the wallet provider to initialize communication and pass information
     const sacrdgardn = DeltaFloraGenesis__factory.connect(MAINNET_CONTRACT_ADDRESS, provider);
     // Returns a promise to await a response from the contract to send it's currentStage
     return (await sacrdgardn.currentStage()).toString();
   }
   // sets a variable to call func getStage given the var provider which points to the wallet provider
   // The provider is requesting the contract to respond with the supply
   const promise = getStage(provider) 
   // Once the promise has been fulfilled the response is returned in a readable string
   promise.then((result) => {
    setStage(result)
     console.log(`Current Minting Stage : ${result}`)
   })
  }, [ provider ])

  // This is the body that handles the purchase between the wallet provider and the contract
  const handleMint = (amount) => {
    // This sets a variable that refers to the func sendMint
    // sendMint(amount)
    const promise = sendMint(amount);
    // This uses toast, a notification api, that sends notifications depending on the status of comms between the provider and contract following a transaction initiation
    toast.promise(promise, {
      loading: "Please confirm the transaction.",
      success: () => {
        console.log(`${web3Onboard}, ${price}, ${stage}, ${setNFTIDs}`)
        setComplete(true)
        return "Mint initiated."
      },
      error: (msg) => msg ? msg.message : "An unexpected error was encountered during your transaction."
    })
  }

  // const sendMint = async (amount) => {
  //   function hash(account) {
  //     return Buffer.from(
  //       ethers.utils.solidityKeccak256(
  //         ['address'],
  //         [account]
  //       ).slice(2), 'hex');
  //   }
    
  //   // retrieves the wallet providers address
  //   const address = wallet.accounts[0].address;
  //   if (provider && wallet?.accounts[0]){
  //     try { 
  //       console.log('Trying to transact')
  //       // This connects the contract to the wallet provider to initialize communication and pass information
  //       const sacrdgardn = DeltaFloraGenesis__factory.connect(MAINNET_CONTRACT_ADDRESS, provider.getSigner());
  //       // Returns a promise to await a response from the contract to send it's mintPrice
  //       const stage = await sacrdgardn.currentStage();
  //       const pricePer = (await sacrdgardn.stages(stage))[2];

  //       const leaves = MerkleTree.unmarshalLeaves(TESTNET_LEAVES_DATA);
  //       const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
  //       const proof = tree.getHexProof(hash(address));
  //       console.log("PROOF", proof);
  //       console.log('quanity', amount);
  //       console.log('address', address);
  //       console.log('price', (pricePer.mul(amount)).toString())

  //       await sacrdgardn.allowlistMint(
  //         address,
  //         amount,
  //         proof,
  //           // proof, *** proof is to verify if they are on greenlist
  //         { value: pricePer.mul(amount) }
  //       ).then((event) => {
  //         console.log(event)
          
  //       });
  //     } catch (err) {
  //         // console.log(err)
  //         throw new Error("Transaction failed to initiate.");
      
  //       }
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }

  const sendMint = async (amount) => {
    // retrieves the wallet providers address
    const address = wallet.accounts[0].address;
    if (provider && wallet?.accounts[0]){
      try { 
        console.log('Trying to transact')
        // This connects the contract to the wallet provider to initialize communication and pass information
        const sacrdgardn = DeltaFloraGenesis__factory.connect(MAINNET_CONTRACT_ADDRESS, provider.getSigner());
        // Returns a promise to await a response from the contract to send it's mintPrice
        const stage = await sacrdgardn.currentStage();
        const pricePer = (await sacrdgardn.stages(stage))[2];

        console.log('quanity', amount);
        console.log('address', address);
        console.log('price', (pricePer.mul(amount)).toString())

        await sacrdgardn.publicMint(
          address,
          amount,
          { value: pricePer.mul(amount) }
        ).then((event) => {
          console.log(event)
          
        });
      } catch (err) {
          // console.log(err)
          throw new Error("Transaction failed to initiate.");
      
        }
      return true;
      }
      else {
      return false;
    }
  }

  const inc = () => {
    if (3> quantity & quantity >= 1){
      setQuantity((prev) => prev + 1);

    }
  }

  const dec = () => {
    // Cannot go to 0
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  }

  const GoQuantity = () => {
    return (
      <div className='container align-center space-evenly direct-row w-50'>
        <button className='text btn trans-red fs-5 text-center w-25' onClick={()=> { dec()}}>-</button>
          <div>
              <span className='text-center text fs-5'>
                {quantity}
              </span>
          </div>
        <button className='text btn trans-red fs-5 text-center w-25' onClick={()=> { inc()}}>+</button>
      </div>
    )
  }

  
  const PrePurchase = () => {

    const [showModal, setModal] = useState();

    useEffect(()=>{
      const winter = document.getElementById('winter')
      winter.addEventListener('click', () =>{setModal(true)})
      return window.removeEventListener('click', () =>{setModal(true)})
    },[])

    function handleWindowEvent(event) {
      if (event.data === "closeWinterCheckoutModal") {
          // properly close the winter modal so it can be opened again
          setModal(false)
      } else if (event.data.name === 'successfulWinterCheckout') {
      // Successfully checked out. This event contains information 
      // you can use to continue the flow: 
      console.log(event.data.transactionhash) // do what you need with the txhash here! 
      console.log(event.data.email) // email that the user bought an NFT with
      setComplete(true)
      setWinter(true)
      }
    }

    useEffect(() => {
        window.addEventListener("message", handleWindowEvent)
        return () => window.removeEventListener("message", handleWindowEvent)
    }, [])


    return (
      <div className='container direct-col space-evenly align-center w-100 bg-p-bot bg-s-100 bg-norepeat p-5' style={{backgroundImage: `url('${mint_2100}')`}}>
        <Toaster />
        <div className='container justify-center w-100'>
            <img className='img mint-animation' src={logo_1} alt=""/>
        </div>

        <div className='container direct-col w-75 m-2'>
            <span className='text text-center mint-minted m-1 red'>Mint ΔFLORA NFT</span>
            <span className='text text-center mint-mint red'>
              {minted}/5,555 Minted
            </span>
        </div>

        <div className='container w-50 m-2'>
          <div className='container w-50 justify-center align-center text red fs-2'>
            <span>Pre-sale: </span>
            <span className='p-lr-1'>.055 ETH </span>
          </div>
          <div className='container w-50 justify-center text red fs-2'>
            <span>Public sale:</span>
            <span className='p-lr-1'>.088 ETH </span>
          </div>   
        </div>

        <div className='container direct-col space-evenly align-center w-50'>
          <div className='container align-center space-evenly direct-row w-50'>
          {wallet ? <GoQuantity /> : null }
          </div>
          <button className='btn text solid-red p-1 m-2 mint-button br-5 w-75' 
          onClick={() => (wallet? handleMint(quantity) : connect())}
          // onClick={() => (wallet? null : connect())}
          >
            {connecting ? 'CONNECTING' : wallet ? 'MINT FLORA' : 'CONNECT WALLET'}
          </button>
        </div>
        <div className='container direct-col space-evenly align-center w-50'>
          <button id='winter' className='btn text solid-red p-1 m-2 mint-button br-5 w-75'>MINT WITH CARD</button>
        </div>
        <WinterCheckout 
            projectId={6858} 
            production={true} 
            showModal={showModal} 
            // Extra mint params are params besides 'address, amount, proof'
            // The key needs to exactly match the name of the param provided to Winter
            // The value will be passed in as the param
            extraMintParams={{a: 1, b: 2}}
        />
      </div>
    )
  }
  
  const GetIDs = () => {
    
    const SeedMinted = () => {
      return(<span className='text red web3-planted'>
      {minted} Seeds Minted
      </span>
      )
    }

    const MintedWinter = () => {
      return(<span className='text red web3-planted'>
      Check your email for confirmation! It might be in your spam folder!
      </span>)
    }
  
    return (
      <div className='container direct-row justify-center m-2 w-75'>
          <div className='w-50 text-center'>
              {winterMint ? <MintedWinter /> : <SeedMinted />}
          </div>
          <div className='w-50'>
              <ul className='m-0 p-0 web3-planted' style={{listStyle:'none'}}>
                  <li className='text red'>#<span className='text' style={{color: 'rgb(240, 206, 65)'}}>202</span> / 5,555</li>
                  <li className='text red'>#<span className='text' style={{color: 'rgb(240, 206, 65)'}}>203</span> / 5,555</li>
                  <li className='text red'>#<span className='text' style={{color: 'rgb(240, 206, 65)'}}>203</span> / 5,555</li>
              </ul>
          </div> 
      </div>
    )
  }

  const NoIDs = () => {
    return(
      <div className='container direct-row justify-center m-2 w-75'>
        <div className='w-100 text-center'>
            
        </div>
      </div>
    )
  }

  const PostPurchase = () => {
    
    return(
      <div className='container direct-col space-evenly align-center w-100 bg-p-bot bg-s-100 bg-norepeat p-2' style={{backgroundImage: `url('${mint_2100}')`}}>
          
          <div className='text-center m-1'>
              <span className='text red web3-congrats'>CONGRATS!</span>
          </div>

          <div className='container justify-center align-center w-75'>
              <img className='img web3-animation br-10' src={web} alt=''>
              </img>
          </div>

          {nftID ? <GetIDs /> : <NoIDs />}

          <div className='container align-center justify-center text-center w-50 m-1'>
              <a href="https://opensea.io/collection/deltaflora" className='link solid-red p-2 web3-open text w-50 br-5'>VIEW ON OPENSEA</a>
          </div>

          <div className='text-center w-25 m-1'>
              <span className='text red web3-reveal w-100'>REVEAL WILL OCCUR ON AUGUST 11TH</span>
          </div>

      </div>
    )
  }

  return ( 
    <div className='container direct-col space-evenly align-center w-100 bg-p-bot bg-s-100 bg-norepeat p-3' style={{backgroundImage: `url('${mint_2100}')`}}>
      { complete ? <PostPurchase /> : <PrePurchase /> }
    </div>
  )
}


export default Mint;





  



  

