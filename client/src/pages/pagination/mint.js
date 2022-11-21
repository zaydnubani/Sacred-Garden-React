import React, { useEffect, useState } from 'react'

import mint_2100 from '../images/frames/mint_2100.png'
import logo_1 from '../images/gifs/Logo_1.gif'
// import web from '../images/gifs/web.gif'
import bouncingSeed from '../images/bouncing-seed.mp4'

import { useConnectWallet } from '@web3-onboard/react';
import initWeb3Onboard from '../../services';
import { DeltaFloraGenesis__factory } from '../../ethers-contracts';
import { ethers } from 'ethers';
import toast, { Toaster } from 'react-hot-toast';
// for greenList & whitelist mint
// import { GREENLIST_LEAVES_DATA } from '../emarald/SG_leaves.js';
// import { WHITELIST_LEAVES_DATA } from '../emarald/White_Leaves.js';
// import MerkleTree from 'merkletreejs';
// import keccak256 from 'keccak256';
// import { WinterCheckout } from '@usewinter/checkout'
import ReactPlayer from 'react-player'
import axios from 'axios'

const MAINNET_CONTRACT_ADDRESS = "0x21374d22f169849cfd680241f3f37cd61ac2eea5";

// const TESTNET_CONTRACT_ADDRESS = '0x3D938ece3C0D8F83c6964b462Dfcd42a612DaF86'

// const GOERLI_CONTRACT_ADDRESS = '0xfe1aeef8335f1444c25c979a6d20149dd23b4a92'

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

  const [winterMint, setWinter] = useState();

  const [tokens, setTokens] = useState([])

  // const WhiteOut = false

  

  useEffect(() => {
    // This initializes bloclknative so that wallets can be connected given custom parameters from '../service' 
    // console.log('wallet is approaching')
    setWeb3Onboard(initWeb3Onboard)
  }, []);

  useEffect(() => {
   // Asks IF there ISN'T a wallet connected or a provider then...
    if (wallet) {
      // throws a func that sets the provider given their ETH information to be used in a static state
      setProvider(new ethers.providers.Web3Provider(wallet.provider, 'any'))
      // console.log('wallet is in the building')
    } else {
      return
    }
  }, [wallet]);

  // useEffect(() => {
  //   // This retrieves the totalSupply of NFTs minted given the specific contract using wallet provider information
  //   const getMinted = async (provider ) => {
  //     // This connects the contract to the wallet provider to initialize communication and pass information
  //     const sacrdgardn = DeltaFloraGenesis__factory.connect(MAINNET_CONTRACT_ADDRESS, provider);
  //     // Returns a promise to await a response from the contract to send it's totalSupply
  //     return (await sacrdgardn.totalSupply()).toString();
  //   }
  //   // sets a variable to call func getMinted given the var provider which points to the wallet provider
  //   // The provider is requesting the contract to respond with the supply
  //   const promise = getMinted(provider) 
  //   // Once the promise has been fulfilled the response is returned in a readable string
  //   promise.then((result) => {
  //     setMinted(result)
  //     console.log(`Total Supplied : ${result}`)
  //   })
  // }, [ provider ])

  useEffect(()=>{

    const api = axios.create()

    api.get(`https://api.nftport.xyz/v0/nfts/0x21374D22F169849cFD680241F3f37cD61AC2eea5`, {
        params: {
            chain: 'ethereum',
            contract_address: '0x21374D22F169849cFD680241F3f37cD61AC2eea5'
        }, 
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'b556fb67-bb92-4e82-85cc-643f02174e3a'
        }
    }).then((res)=>{
      setMinted(res.data.total)
        // return res.data.nfts.map((ret)=>{
        //     return setTokens(old=>[...old, {tokenId:ret.token_id, smartContract:ret.contract_address.toUpperCase()}])
        // })
    }).catch(function (error) {
        console.error(error);
    });
    
  },[])

  useEffect(()=>{
    const getNFTs = (wallet) =>{  
      const api = axios.create()
      api.get(`https://api.nftport.xyz/v0/accounts/${wallet}`, {
        params: {
            chain: 'ethereum',
            contract_address: '0x21374D22F169849cFD680241F3f37cD61AC2eea5'
        }, 
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'b556fb67-bb92-4e82-85cc-643f02174e3a'
        }
      }).then((res)=>{
        return res.data.nfts.map((ret)=>{
          return setTokens(old=>[...old, ret.token_id])
        })
      }).catch(function (error) {
        console.error(error); 
      });
    }
    
    if(wallet){
      return getNFTs(wallet.accounts[0].address)
    }
    
  }, [wallet])

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
      // console.log(`Current Minting Price : ${result}`)
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
    //  console.log(`Current Minting Stage : ${result}`)
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
        console.log(`${web3Onboard}, ${price}, ${stage}`)
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

  //       const leaves = MerkleTree.unmarshalLeaves(WHITELIST_LEAVES_DATA);
  //       const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
  //       const proof = tree.getHexProof(hash(address));
  //       // console.log("PROOF", proof);
  //       // console.log('quanity', amount);
  //       // console.log('address', address);
  //       // console.log('price', (pricePer.mul(amount)).toString())

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

  const GoQuantity = () => {

    const inc = () => {
      if (2> quantity & quantity >= 1){
        setQuantity((prev) => prev + 1);
  
      }
    }
  
    const dec = () => {
      // Cannot go to 0
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    }

    return (
      <div className='d-flex flex-row align-items-center Flora-Font'>
        <button className='fs-1 m-1 btn Flora-Font' onClick={()=> { dec()}} style={{color: '#00544B'}}>-</button>
        <div>
            <span className='text-center text fs-1 m-1' style={{color: '#00544B'}}>
              {quantity}
            </span>
        </div>
        <button className='fs-1 btn m-1 Flora-Font' onClick={()=> { inc()}} style={{color: '#00544B'}}>+</button>
      </div>
    )
  }


  const WalletCheckout = () =>{
    return(
      <div className='d-flex flex-column' style={{'display':'none'}}>
        <div className='Flora-Font d-flex flex-row align-items-center justify-content-center' >
        {wallet ? <GoQuantity /> : null }
        </div>
        <button className='btn Flora-Font fs-2 p-3 m-3 rounded' 
        onClick={() => {
          (wallet? handleMint(quantity) : connect())
        }}
        style={{backgroundColor: '#04F2AF', color: '#00544B'}}>
          {connecting ? 'CONNECTING' : wallet ? 'MINT FLORA' : 'CONNECT WALLET'}
        </button>   
        {/* <button id='winter' className='btn Flora-Font p-3 fs-2 text-capitalize m-3 rounded' style={{backgroundColor: '#43D3EE', color: '#00544B', display:'none'}}>PAY W/ CARD</button>  */}
      </div>
    )
  }
  
  const PrePurchase = () => {

    // const [showModal, setModal] = useState();

    // useEffect(()=>{
    //   const winter = document.getElementById('winter')
    //   winter.addEventListener('click', () =>{setModal(true)})
    //   return window.removeEventListener('click', () =>{setModal(true)})
    // },[])

    function handleWindowEvent(event) {
      if (event.data === "closeWinterCheckoutModal") {
          // properly close the winter modal so it can be opened again
          // setModal(false)
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
      <div className='col-12 d-flex flex-column justify-content-evenly align-items-center'>
        
        <Toaster />

        <div className='d-flex align-items-center justify-content-center w-50'>
            <img className='img-fluid w-auto' src={logo_1} alt=""/>
        </div>

        <div className='d-flex flex-column Flora-Font text-center m-2' style={{color: '#00544B'}}>
            <span className='fs-1'>Mint ΔFLORA NFT</span>
            <span className='fs-3'>
              {minted}/5,555 Minted
            </span>
        </div>

        <div className='Flora-Font text-center'>
          <span className='fs-4 text-uppercase' style={{color: '#00544B'}}> Free + GAS </span>
        </div>

        <WalletCheckout/>

        {/* <GetWeb2/> */}
        {/* <WinterCheckout 
          projectId={6858} 
          production={true} 
          showModal={showModal} 
          // Extra mint params are params besides 'address, amount, proof'
          // The key needs to exactly match the name of the param provided to Winter
          // The value will be passed in as the param
          // extraMintParams={{a: 1, b: 2}}
          extraMintParams={{proof: []}}
        /> */}
      </div>
    )
  }

  const PostPurchase = () => {

    const popup = () => {
      const popers = document.getElementById('popers')
      popers.style = 'display: none; visibility: hidden; position: fixed;'
    }

    const SeedMinted = () => {
      return(
      <span className='Flora-Font text-uppercase fs-2 m-3' style={{color: '#00544B'}}>
      {minted} Seeds Minted
      </span>
      )
    }

    const MintedWinter = () => {
      return(
        <span className='fs-3 m-2 px-1 py-2 Flora-Font rounded' style={{backgroundColor: '#FFAC80', color: '#00544B'}}>
          Check your email for a message from 
          orders@usewinter.com
          It might go to spam or promotions.
        </span>
      )
    }

    const GetIDs = () => {
      return (
        <div className='d-flex flex-row m-3'>
          <div className='px-2' style={{color: '#00544B'}}>
            <span className='Flora-Font fs-4 text-uppercase'>Seeds Planted: </span>
          </div>
          <div className='d-flex flex-column text-center Flora-Font px-2' style={{color: '#00544B'}}>
            {
              tokens.map((res)=>{
                return(
                  <span className='fs-4' key={tokens.indexOf(res)} style={{color: ''}}>{res} / 5,555</span>
                )
              })
            }
          </div>
        </div>
      )
    }
    
    return(
      
      <div className='col-12 d-flex flex-column text-center align-items-center justify-content-evently py-3'>

        <div id='popers' className='d-flex flex-column p-3 m-1 Flora-Font text-center rounded w-75'
        style={{backgroundColor: '#00544B', color: '#FFAC80', position: 'fixed'}}>

          <button onClick={() => {popup()}} className="btn align-self-end" style={{backgroundColor: '#00544B', color: '#FFAC80'}}>
            <span className='Flora-Font fs-5'>X</span> 
          </button> 
          
          <span className="text-uppercase fs-1">Welcome to the floraverse!</span>

          <span className="fs-3 rounded m-2 px-1 py-2" style={{backgroundColor: '#FFAC80', color: '#00544B'}}>
            This is your first step into the garden. Let's grow and conserve psychedelic plants! 
          </span>


          {
          winterMint ? 
            <MintedWinter /> 
            : 
            null 
          }
          
        </div>

        <span className='Flora-Font fs-1 m-3' style={{color: '#00544B'}}>THE SEEDS HAVE SPROUTED!</span>

        <div className='w-75 m-3 d-flex justify-content-center'>
          <ReactPlayer playing={true} loop={true} muted={true} url={bouncingSeed} className='img-fluid'/>
          {/* <img className='img-fluid rounded' src={web} alt=''/>  */}
        </div>

        { minted ?  <SeedMinted /> : null }

        { tokens.length >= 1 ?  <GetIDs /> : null }

        <a href="https://opensea.io/collection/deltaflora" className='Flora-Font p-3 fs-3 text-decoration-none btn rounded m-3' style={{color: '#00544B', backgroundColor: '#43D3EE' }}>VIEW ON OPENSEA</a>

      </div>
    )
  }

  return ( 
    <div className='row py-5' style={{backgroundImage: `url('${mint_2100}')`, backgroundSize: '100%', backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat'}}
    >
      {
        complete ?
        <PostPurchase /> 
       : 
        <PrePurchase />
      } 
    </div>
  )
}


export default Mint;





  



  

