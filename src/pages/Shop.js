import React, { useEffect, useState } from "react";
import { useConnectWallet } from '@web3-onboard/react';
import initWeb3Onboard from '../services';
import toast, { Toaster } from 'react-hot-toast';
import { q, client } from "../config/fauna.js";
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'

import one from '../images/300px/1.png'
import cactus from '../images/shop/cactus.jpeg'
import crestedhua from '../images/shop/CrestedHua.PNG'
import psychedelictoday from '../images/shop/psychedelicToday.png'
import seeds from '../images/shop/seeds.png'

const Shop = () => {

    const MAINNET_CONTRACT_ADDRESS = "0X21374D22F169849CFD680241F3F37CD61AC2EEA5";

    const [web3Onboard, setWeb3Onboard] = useState();
    const [{ wallet, connecting }, connect, disconnect ] = useConnectWallet()
    const [ address, setAddress ] = useState(null);

    const [ cartQuant, setCartQuant ] = useState()
    const [ filter, setFilter ] = useState()
    const [ type, setType ] = useState([])
    const [ cart, setCart ] = useState([])
    const [ tokens, setTokens ] = useState([])
    const [ claimTokens, setClaimTokens ] = useState([])
    const [ cardPurch, setCardPurch ] = useState(false)
    const [ checkout, setCheckout ] = useState(false)
    const [ orderSuccess, setOrderSucceeded ] = useState(false)
    const [ addressRequired, setAddressRequired ] = useState(false)
    const [ order, setOrder ] = useState(null)
    const [ finalOrder, setFinalOrder ] = useState(null)
    const [ email, setEmail ] = useState(null)
    

    // // this perpetuates the connection to blocknative
    useEffect(() => {
        // This initializes bloclknative so that wallets can be connected given custom parameters from '../service'
        setWeb3Onboard(initWeb3Onboard)
    }, []);

    // // when a wallet is present, i.e. coinbase, metamask, etc., useState will perpetuate the wallet's address
    useEffect(() => {
    // Asks IF there ISN'T a wallet connected or a provider then...
        if (wallet != null) {
        // throws a func that sets the provider given their ETH information to be used in a static state
            return setAddress(wallet.accounts[0].address)
        } else {
            // if wallet is == null then tokens, checkout, and address will be set to null so that NFT Port is not called and final cart will not set
            setCheckout(false)
            setTokens([])
            setClaimTokens([])
            setOrder(null)
            return setAddress(null)
        }
    }, [ wallet ]);

    // // when an email is submitted in checkout, usewinter.com will return tokens being held by that address and if any match to FloraGensis
    useEffect(()=>{
        const api = axios.create({baseURL:'https://winter-api.usewinter.com'})
        const getWinterTokens = (email) => {
            api.get(`/getNFTs?email=${email}`).then((res) => {
                res.data.map((ret)=>{
                    return setTokens(old=>[...old, {tokenId: ret.token_id, smartContract: ret.smart_contract_address.toUpperCase()}])             
                })
            }).catch(function (error) {
                console.error(error);
            });
        }

        if(email != null){
            return getWinterTokens(email)
        }
        else{
            // if email is == null then tokens will be set to null, checkout will be set to false, and user will have to reconnect with servers to make a claim
            setCheckout(false)
            setTokens([])
            setOrder(null)
            return setClaimTokens([])
        }
    }, [email])

    // // If a wallet is connected NFTPort will retrieve NFTs held by that wallet's address and filter by FloraGensis
    useEffect(()=>{

        const api = axios.create()

        const getWalletTokens = (address) => {
            api.get(`https://api.nftport.xyz/v0/accounts/${address}`, {
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
                    return setTokens(old=>[...old, {tokenId:ret.token_id, smartContract:ret.contract_address.toUpperCase()}])
                })
            }).catch(function (error) {
                console.error(error);
            });
        }

        if(address !== null){
            return getWalletTokens(address)
        } else {
            return
        }

    }, [ address ])

    // // Validates if the NFTs retrieve match the Mainnet Contract and returns those that do, then validate if a token has been used for a claim
    useEffect(()=>{

        if(tokens.length >= 1){
            tokens.map((ret)=>{
                if(ret.smartContract === MAINNET_CONTRACT_ADDRESS){
                    client.query(q.Paginate(q.Match(q.Index("Tokens"), ret.tokenId))).then((ref)=>{
                        if( ref.data.length >= 1 ){
                            return console.log(`ERC${ret.tokenId} has been used already.`)
                        } else {
                            setClaimTokens(old=>[...old, ret])
                        }
                    }).catch((err) => console.error(
                        'Error: [%s] %s: %s',
                        err.name,
                        err.message,
                        err.errors()[0].description,
                    ))
                }else{
                    return toast.error('Unable to token gate.')
                }
                return null
            })
        }
        else{
            return        
        }
    },[ tokens ])

    // // if the quanitity of an item in the cart is less than 0 then it is removed
    useEffect(()=>{
        // resets the paramater that renders the information form on checkout
        if (cart.length <= 1){
            setAddressRequired(false)
        }
        cart.forEach((res)=>{
            // if the item type matches then the user will need to fill-out the information form given that the item needs to be shipped
            if(res.type !== 'course'){
                setAddressRequired(true)
            }
            if(res.quantity===0){
                const filteredCart = cart.filter(ret=>ret.quantity!==0)
                setCart(filteredCart)
            }
            return
        })
    }, [ cart ])

    // // calculates the number of items in the cart based on the quanity of unique items
    useEffect(()=>{
        const quant = []
        cart.forEach((res)=>{
            quant.push(res.quantity)
        })
        setCartQuant(quant.reduce((partialSum, a) => partialSum + a, 0))
    }, [ cart ])

    // // If there arent any items in the cart disconnects wallet/sets email to null and subsequently sets all tokens to null and user has to restart process
    useEffect(()=>{
        if(cartQuant <= 0 && wallet != null && orderSuccess === false){
            disconnect(wallet)
        } else if (cartQuant <= 0 && email != null && orderSuccess === false){
            return setEmail(null)
        }
    }, [ cart, cartQuant, disconnect, wallet, email, orderSuccess ])

    // // Creates an order in the database that can be referred to
    useEffect(()=>{
        const createOrder = (finalOrder) => {client.query(
            q.Create(
              q.Collection('Orders'),
              {
                data:{
                    Wallet: address,
                    Items: finalOrder.Items,
                    Tokens: finalOrder.Tokens,
                    Email: finalOrder.Email,
                    Address: finalOrder.Address,
                    Apartment: finalOrder.Apartment,
                    City: finalOrder.City,
                    State: finalOrder.State,
                    ZIP: finalOrder.ZIP
                },
              },
            )
          )
          .then(() => {
            setOrderSucceeded(true)
            setCart([])
            return
            })
          .catch((err) => console.error(
            'Error: [%s] %s: %s',
            err.name,
            err.message,
            err.errors()[0].description,
          ))
        }
        if(finalOrder != null){
            console.log('creating order in fauna')
            createOrder(finalOrder)
            return setFinalOrder(null)
        } else {
            return 
        }
    }, [finalOrder, address])

    // // if cart is open and wallet is connected, or email is set, and the user clicks anywhere that isnt the cart the wallet is disconnected, or the email is set to null.
    useEffect(()=>{
        window.addEventListener('click', (e)=>{
            if (e.target.className === 'offcanvas-backdrop fade' && wallet != null){
                setOrderSucceeded(false)
                return disconnect(wallet)
            } else if (e.target.className === 'offcanvas-backdrop fade' && email != null){
                return setEmail(null)
            } 
        })
    })
    
    // // render for all filter
    const Merch = () => {

        const [ merchData, setMerchData ] = useState([])

        useEffect(() => {
            client.query(q.Paginate(q.Match(q.Index('All'))))
            .then((ret) => {
                ret.data.map( async (ref) => {
                    await client.query(q.Get(q.Ref(q.Collection('Merchandise'), ref.value.id))).then((oth) => { 
                        setMerchData(old => [...old, oth.data]) 
                    })
                    return 
                })
            }).catch((err) => console.error(
                'Error: [%s] %s: %s',
                err.name,
                err.message,
                err.errors()[0].description,
                web3Onboard
            ))
        }, [])

        return(
            <>
            {
                merchData.map((ret)=>{
                    
                    const duplicate = (ret) => {

                        let bool = false;

                        cart.forEach((res)=>{
                            if(ret.item===res.item){
                                console.log(true)
                                const filteredCart = cart.filter(retrn=>retrn.item!==ret.item)
                                filteredCart.push({item: ret.item, src: ret.src, type: ret.type, description: ret.description, quantity: res.quantity + 1})
                                setCart(filteredCart)
                                return bool = true
                            }else{
                                return console.log(false)
                            }
                        });

                        if (bool === false ){
                            setCart(old => [...old, {item: ret.item, src: ret.src, type: ret.type, description: ret.description, quantity: 1}]);
                        } 

                        return

                    }

                    return( 
                        <div key={ret.item} className="m-3 card Flora-Font" style={{width:'18rem'}}>
                            {
                                ret.src === 'seeds'?
                                <img src={seeds} alt={ret.src}/>
                                :
                                    ret.src === 'cactus'?
                                    <img src={cactus} alt={ret.src}/>
                                    :
                                        ret.src === 'crestedhua'?
                                        <img src={crestedhua} alt={ret.src}/>
                                        :
                                            ret.src === 'psychedelictoday'?
                                            <img src={psychedelictoday} alt={ret.src}/>
                                            :
                                            null
                            
                            }
                            <div className="card-body d-flex flex-column">
                                <span>{ret.item}</span>
                                <button className="btn d-flex align-items-left w-100" data-bs-toggle="collapse" data-bs-target={`#${ret.src}`} aria-expanded="false" aria-controls={ret.src}>
                                    <span>details</span>
                                </button>
                                <div className="collapse" id={ret.src}>
                                    <div className="card card-body">
                                        <div className="d-flex flex-column">
                                            <label>Description: </label>
                                            <span>{ret.description}</span>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <label>retail value:</label>
                                            <span>${ret.retail}</span>
                                        </div>
                                        {
                                            ret.type === 'seeds' | ret.type === 'plants' ?
                                            <div className="d-flex flex-column">
                                                <label>Farmer:</label>
                                                <span>{ret.farmer}</span>
                                            </div>
                                            :
                                            null
                                        }
                                    </div>
                                </div>
                                { 
                                    ret.type === 'clothes'?
                                    <select>
                                        {ret.size.map((res)=>{
                                            return <option key={res} value={res} className="flora-font">{res}</option>
                                        })}
                                    </select>
                                    :
                                    null
                                }
                                <button className="btn btn-primary text-uppercase" onClick={(e)=>{
                                    if(ret.type === 'clothes'){
                                        if(cart.length >= 1){
                                            duplicate(ret)
                                        }else{
                                            setCart(old => [...old, {item: ret.item, type: ret.type, description: ret.description, size: e.target.parentNode.children[0].value, quantity: 1}]);
                                        }
                                    }else{
                                        if(cart.length >= 1){
                                            duplicate(ret)
                                        }else{
                                            setCart(old => [...old, {item: ret.item, type: ret.type, description: ret.description, quantity: 1}]);
                                        }
                                    }
                                }}>add to cart</button>
                            </div>
                        </div>
                    )
                })
            }
            </>
        )
    }

    // // render for unique filter(s)
    const Type = () => {
        const [ typeData, setTypeData ] = useState([])
        useEffect(() => {
            client.query(q.Paginate(q.Match(q.Index("types"), type)))
            .then((ret)=>{
                ret.data.map( async (ref) => {
                    await client.query(q.Get(q.Ref(q.Collection('Merchandise'), ref.value.id))).then((oth) => { 
                        setTypeData(old => [...old, oth.data]) 
                    })
                    return 
                })
            }).catch((err) => console.error(
                'Error: [%s] %s: %s',
                err.name,
                err.message,
                err.errors()[0].description,
            ))
        }, [])

        return(
            <>
            {
                typeData.map((ret)=>{

                    const duplicate = (ret) => {
                        let bool = false;
                        cart.forEach((res)=>{
                            if(ret.item===res.item){
                                const filteredCart = cart.filter(retrn=>retrn.item!==ret.item)
                                filteredCart.push({item: ret.item, src: ret.src, tags: ret.tags, type: ret.type, description: ret.description, quantity: res.quantity + 1})
                                setCart(filteredCart)
                                return bool = true
                            }else{
                                return
                            }
                        });
                        if (bool === false ){
                            console.log('bool is false');
                            setCart(old => [...old, {item: ret.item, src: ret.src, tags: ret.tags, type: ret.type, description: ret.description, quantity: 1}]);
                        } else{
                            console.log('bool is true');
                        }
                    }

                    return( 
                        <div key={ret.item} className="m-3 card Flora-Font" style={{width:'18rem'}}>
                            <img src={one} className="card-img-top" alt=' '/>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title text-uppercase fs-5">{ret.item}</h5>
                                <p className="card-text text-uppercase">{ret.description}</p>
                                <button className="btn btn-primary text-uppercase" onClick={()=>{
                                    if(cart.length >= 1){
                                        duplicate(ret)
                                    }else{
                                        setCart(old => [...old, {item: ret.item, src: ret.src, tags: ret.tags, type: ret.type, description: ret.description, quantity: 1}]);
                                    }}
                                }>Add to cart</button>
                            </div>
                        </div>
                    )
                })
            }
            </>
        )
    }

    const CartBeg = () => {
        return (
            <div className="container">
                <div className="row g-2">
                    <div className="col-12 text-center">
                        <a href="/" className="text-decoration-none">
                            <img className="img-fluid" src="\images\logos\gardn_logo.png" alt="logo"/>
                        </a>
                    </div>
                    <div className="col-12 d-flex flex-column">
                        {cart.length >= 1 ?
                        <div className="d-flex flex-column">
                            <div className="d-flex flex-row w-100">
                                <span className="Flora-Font fs-4 text-uppercase">
                                    cart
                                </span>
                            </div>
                            {
                            cart.map((ret)=>{
                                const cartQuant = (val, ret) => {
                                    if(val === 'add'){
                                        cart.forEach((res)=>{
                                            if(ret.item===res.item){
                                                const filteredCart = cart.filter(retrn=>retrn.item!==ret.item)
                                                filteredCart.splice(cart.indexOf(res), 0, {item: ret.item, src: ret.src, tags: ret.tags, type: ret.type, description: ret.description, quantity: res.quantity + 1})
                                                setCart(filteredCart)
                                                return
                                            } else{
                                                return
                                            }
                                        });
                                    } else {
                                        cart.forEach((res)=>{
                                            if(ret.item===res.item){
                                                const filteredCart = cart.filter(retrn=>retrn.item!==ret.item)
                                                filteredCart.splice(cart.indexOf(res), 0, {item: ret.item, src: ret.src, tags: ret.tags, type: ret.type, description: ret.description, quantity: res.quantity - 1})
                                                setCart(filteredCart)
                                                return
                                            }else{
                                                return  
                                            }
                                        });
                                    }
                                }
                            return <div key={ret.item} className='d-flex flex-row align-items-center justify-content-evenly m-1'>
                                <span className="Flora-Font fs-5">{ret.item}</span>
                                <div className="d-flex flex-row align-items-center fs-5 ms-auto">
                                    <button className="btn Flora-Font" value='sub' onClick={(e)=>cartQuant(e.target.value, ret)}>-</button>
                                    <span className="Flora-Font">{ret.quantity}</span>
                                    <button className="btn Flora-Font" value='add' onClick={(e)=>cartQuant(e.target.value, ret)}>+</button>
                                </div>
                                </div>
                            })}
                            <div className="border"></div>
                            <div className="d-flex flex-row w-100 m-1">
                                <span className="Flora-Font fs-5">
                                    Total
                                </span>
                                <span className="Flora-Font fs-5 ms-auto">
                                    x{cartQuant}
                                </span>
                            </div>
                            {
                                cardPurch !== false ?
                                <div className="d-flex flex-column">
                                    <div className="d-flex flex-row p-3 my-2">
                                        <input className='Flora-Font fs-5 text-uppercase rounded w-75 mx-1' type={'email'} placeholder='Email Address'/>
                                        <button className="Flora-Font fs-2 btn btn-primary text-uppercase mx-1 p-3" 
                                        onClick={(e)=>{setEmail(e.target.parentNode.children[0].value)}}>
                                            submit
                                        </button>
                                    </div>
                                    <button className='btn fs-5 Flora-Font' onClick={()=>{
                                        setCardPurch(false)}}>
                                        <span>Purchased a Membership with a Wallet?</span>
                                    </button>
                                </div> 
                                :
                                <div className="d-flex flex-column justify-content-evenly align-items-center">
                                    <button className='btn Flora-Font fs-2 p-3 my-3 rounded' 
                                    onClick={async () => (connect())}
                                    style={{backgroundColor: '#04F2AF', color: '#00544B'}}>
                                        {connecting ? 'CONNECTING' : wallet ? 'CONNECTED' : 'CONNECT WALLET'}
                                    </button>
                                    <button className='btn fs-5 Flora-Font' onClick={()=>{
                                        setCardPurch(true)}}>
                                        <span>Purchased a Membership with a Credit or Debit Card?</span>
                                    </button>
                                </div>
                            }
                        </div>
                        :
                        <button className="btn d-flex flex-row align-items-center justify-content-evenly" data-bs-dismiss="offcanvas">
                            <span className="Flora-Font fs-1">+</span>
                            <span className="text-uppercase fs-2 Flora-Font">Add items to your cart</span>
                        </button>
                        }
                    </div>
                </div>
            </div>
        )
    }

    const CartMid = () => {
        return (
            <div className="container">
                        <div className="row g-2">
                            <div className="col-12 text-center">
                                <a href="/" className="text-decoration-none">
                                    <img className="img-fluid" src="\images\logos\gardn_logo.png" alt="logo"/>
                                </a>
                            </div>
                            <div className="col-12 d-flex flex-column">
                                {cart.length >= 1 ?
                                <div className="d-flex flex-column">
                                    <div className="d-flex flex-row w-100">
                                        <span className="Flora-Font fs-4 text-uppercase">
                                            cart
                                        </span>
                                    </div>
                                    {
                                    cart.map((ret)=>{
                                        const cartQuant = (val, ret) => {
                                            if(val === 'add'){
                                                cart.forEach((res)=>{
                                                    if(ret.item===res.item){
                                                        const filteredCart = cart.filter(retrn=>retrn.item!==ret.item)
                                                        filteredCart.splice(cart.indexOf(res), 0, {item: ret.item, src: ret.src, tags: ret.tags, type: ret.type, description: ret.description, quantity: res.quantity + 1})
                                                        setCart(filteredCart)
                                                        return
                                                    } else{
                                                        return
                                                    }
                                                });
                                            } else {
                                                cart.forEach((res)=>{
                                                    if(ret.item===res.item){
                                                        const filteredCart = cart.filter(retrn=>retrn.item!==ret.item)
                                                        filteredCart.splice(cart.indexOf(res), 0, {item: ret.item, src: ret.src, tags: ret.tags, type: ret.type, description: ret.description, quantity: res.quantity - 1})
                                                        setCart(filteredCart)
                                                        return
                                                    }else{
                                                      return  
                                                    }
                                                });
                                            }
                                        }
                                    return <div key={ret.item} className='d-flex flex-row align-items-center justify-content-evenly m-1'>
                                        <span className="Flora-Font fs-5">{ret.item}</span>
                                        <div className="d-flex flex-row align-items-center fs-5 ms-auto">
                                            <button className="btn Flora-Font" value='sub' onClick={(e)=>cartQuant(e.target.value, ret)}>-</button>
                                            <span className="Flora-Font">{ret.quantity}</span>
                                            <button className="btn Flora-Font" value='add' onClick={(e)=>cartQuant(e.target.value, ret)}>+</button>
                                        </div>
                                        </div>
                                    })}
                                    <div className="border"></div>
                                    <div className="d-flex flex-row w-100 m-1">
                                        <span className="Flora-Font fs-5">
                                            Total
                                        </span>
                                        <span className="Flora-Font fs-5 ms-auto">
                                            x{cartQuant}
                                        </span>
                                    </div>
                                    <div className="d-flex flex-row w-100 m-1">
                                        <span className="Flora-Font fs-5">
                                            Tokens
                                        </span>
                                        <span className="Flora-Font fs-5 ms-auto">
                                            x{claimTokens.length}
                                        </span>
                                    </div>
                                    <div className="border"></div>
                                    <div className="d-flex flex-row w-100 m-1">
                                        <span className="Flora-Font fs-5">
                                            Remaining Tokens
                                        </span>
                                        <span className="Flora-Font fs-5 ms-auto">
                                            x{claimTokens.length - cartQuant}
                                        </span>
                                    </div>
                                    {
                                        (claimTokens.length - cartQuant) >= 0 ? 
                                            <button className="btn fs-2 p-3 my-3 rounded" style={{backgroundColor: '#04F2AF', color: '#00544B'}} 
                                            onClick={()=>{
                                                if(addressRequired !== true){
                                                    setOrder({Wallet: address, Items: cart.map(ret=>ret),Tokens: claimTokens.slice(0, cartQuant) ,Email: email})
                                                    return setCheckout(true)
                                                } else {
                                                    return setCheckout(true)
                                                }                                              
                                            }}>
                                                <span className="Flora-Font text-uppercase">
                                                    proceed to checkout
                                                </span>
                                            </button>
                                            :
                                            <span className="Flora-Font fs-2 p-3 my-3 text-uppercase">Insufficient funds</span>
                                    }
                                </div>
                                :
                                <button className="btn d-flex flex-row align-items-center justify-content-evenly" data-bs-dismiss="offcanvas" 
                                    onClick={()=>{
                                        if(wallet != null){
                                            return disconnect(wallet);
                                        } else if(email != null){
                                            return setEmail(null)
                                        }
                                    }}>
                                    <span className="Flora-Font fs-1">+</span>
                                    <span className="text-uppercase fs-2 Flora-Font">Add items to your cart</span>
                                </button>
                                }
                            </div>
                        </div>
                    </div>
        )
    }

    const CartEnd = () => {

        const States = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']

        return (
            <div className="container">
                <div className="row g-2">
                    <div className="col-12 text-center">
                        <a href="/" className="text-decoration-none">
                            <img className="img-fluid" src="\images\logos\gardn_logo.png" alt="logo"/>
                        </a>
                    </div>
                    <div className="col-12 d-flex flex-column">
                        <div className="d-flex flex-column">
                            <div className="py-3">
                                <span className="Flora-Font text-uppercase fs-3">Information</span>
                            </div>
                            <form className="d-flex flex-row flex-wrap justify-content-evenly">
                                <input type="email" className="form-control Flora-Font mx-1 my-2" id="InputEmail" aria-describedby="emailHelp" placeholder="Email"/>
                                {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                                <input type='text' className="form-control Flora-Font mx-1 my-2" id="InputAddress" placeholder="Address"/>
                                <input type='text' className="form-control Flora-Font mx-1 my-2" id="InputAddress" placeholder="Apartment, Suite, Etc. (optional)"/>
                                <input type='text' className="form-control Flora-Font w-25 m-1 my-2 flex-grow-1" id="InputCity" placeholder="City"/>
                                <select className="form-select Flora-Font w-25 m-1 my-2" placeholder="State">
                                    {States.map((ret)=>{
                                        return<option key={ret} value={ret} placeholder="state">{ret}</option>
                                    })}
                                </select>
                                <input type='text' className="form-control Flora-Font w-25 m-1 my-2" id="InputZipCode" placeholder="ZIP"/>
                            </form>
                            <button className="btn btn-primary Flora-Font m-1 text-uppercase" onClick={(e)=>{
                                const children = e.target.parentNode.children[1].children
                                setOrder({Items: cart.map(ret=>ret),Tokens: claimTokens.slice(0, cartQuant) ,Email: children[0].value, Address: children[1].value, Apartment: children[2].value, City: children[3].value, State: children[4].value, ZIP: children[5].value})
                            }}>Review Order</button>
                        </div>
                    </div>                       
                </div>
            </div>
        )
    }

    const FinalCart = () => {
        return(
            <div className="container"> 
                <div className="row g-2">
                    <div className="col-12 text-center">
                        <a href="/" className="text-decoration-none">
                            <img className="img-fluid" src="\images\logos\gardn_logo.png" alt="logo"/>
                        </a>
                    </div>
                    <div className="col-12 d-flex flex-column">
                        { addressRequired !== false ?
                        <div className="d-flex flex-row flex-wrap m-1">
                                <span className="Flora-Font text-uppercase fs-3">Information</span>
                                <div className="d-flex flex-column Flora-Font w-100 my-1">
                                    <label className="">Email</label>
                                    <span>{order.Email}</span>
                                </div>
                                <div className="d-flex flex-column Flora-Font w-100 my-1">
                                    <label className="">Address</label>
                                    <span>{order.Address}</span>
                                </div>
                                <div className="d-flex flex-column Flora-Font w-100 my-1">
                                    <label className="">Apartment, Suite, Etc.</label>
                                    <span>{order.Apartment}</span>
                                </div>
                                <div className="d-flex flex-column Flora-Font w-50 my-1">
                                    <label className="">City</label>
                                    <span>{order.City}</span>
                                </div>
                                <div className="d-flex flex-column Flora-Font w-25 my-1">
                                    <label className="">State</label>
                                    <span>{order.State}</span>
                                </div>
                                <div className="d-flex flex-column Flora-Font w-25 my-1">
                                    <label className="">ZIP</label>
                                    <span>{order.ZIP}</span>
                                </div>
                            </div>
                            : 
                            null
                        }
                        <span className="Flora-Font text-uppercase fs-3">cart</span>
                        <div className="d-flex flex-column m-1">
                            {order.Items.map((ret)=>{return(<div className="Flora-Font d-flex flex-row" key={ret.item}>
                                <span className="">{ret.item}</span>
                                <span className="ms-auto">x{ret.quantity}</span>
                            </div>)})}
                        </div>
                        <div className="border"></div>
                        <div className="d-flex flex-row Flora-Font m-1">
                            <span className="">Total</span>
                            <span className="ms-auto">x{cartQuant}</span>
                        </div>
                        <div className="d-flex flex-column Flora-Font m-1">
                            <div className="d-flex flex-row">
                                <span className="">Tokens</span>
                                <span className="ms-auto">x{order.Tokens.length}</span>
                            </div>
                            <div className="d-flex flex-column m-2">
                                {order.Tokens.map((ret)=>{return(<span key={ret.tokenId}>ERC {ret.tokenId}</span>)})}
                            </div>
                        </div>
                        <div className="border"></div>
                        <div className="d-flex flex-row Flora-Font m-1">
                            <span className="">Remaining Tokens</span>
                            <span className="ms-auto">x{claimTokens.length - cartQuant}</span>
                        </div>
                    </div>
                    <button className="Flora-Font btn btn-primary text-uppercase" onClick={()=>{setFinalOrder(order)}}>Confirm Order</button>
                </div>
            </div>
        )
    }

    const CheckoutSuccess = () => {
        return(
            <div className="container"> 
                <div className="row g-2">
                    <div className="col-12 text-center">
                        <a href="/" className="text-decoration-none">
                            <img className="img-fluid" src="\images\logos\gardn_logo.png" alt="logo"/>
                        </a>
                    </div>
                    <div className="col-12 d-flex flex-column text-center">
                        <span className="Flora-Font fs-3 m-2">Your order has been successfully submitted!</span>
                        {
                            wallet != null ?
                                <span className="Flora-Font fs-5 m-2">Connect your wallet in the dashboard to review your order history.</span>
                                :
                                email != null ?
                                    <span className="Flora-Font fs-5 m-2">Use your email address in the dashboard to review your order history.</span>
                                    :
                                    null
                        }
                        <a className="btn btn-primary Flora-Font fs-3 text-uppercase m-2" href="/dashboard">dashboard</a>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className='col-12 d-flex flex-column'>
        
            <div><Toaster/></div>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasExampleLabel">
                
                <div className="offcanvas-header">
                    <div>
                    </div>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={()=>{
                        if(wallet != null){
                            setOrderSucceeded(false)
                            return disconnect(wallet);
                        } else if(email != null){
                            setOrderSucceeded(false)
                            return setEmail(null)
                        }
                        return
                    }}></button>
                </div>
                
                <div className="offcanvas-body">
                    {
                    wallet===null && email===null ?
                    <CartBeg/>
                    :
                        checkout === true ?
                            order !== null ?
                                orderSuccess !== false ?
                                <CheckoutSuccess/>
                                :
                                <FinalCart/>
                            :
                            <CartEnd/>
                        :
                        <CartMid/>
                    }
                </div>
            </div> 
          
            <div className="d-flex flex-row w-100">
                <button className="btn ms-auto Flora-Font px-5 d-flex align-items-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas"><span className="p-1">({cartQuant})</span><FontAwesomeIcon icon={faCartShopping} className='p-1'/></button>
            </div>

            <div className="d-flex flex-column justify-content-evenly align-items-start px-5">
                <label className="Flora-Font text-uppercase align-self-start fs-5">select filter...</label>
                <div className="d-flex flex-row">
                    <select className="form-select m-1 Flora-Font fs-5 text-uppercase" aria-label="Default select example" onChange={
                            (e)=>{
                                if(e.target.value === 'null'){
                                    setFilter(null); 
                                    setType([]);
                                }else {
                                    setFilter(true)
                                    setType([e.target.value])
                                }
                            }
                        }>
                        <option value='null'>ALL</option>
                        <option value="clothes">clothes</option>
                        <option value="plants">plants</option>
                        <option value="service">service</option>
                    </select>
                    {type.map((ret)=>{
                        return(<div className="btn btn-primary d-flex flex-row Flora-Font m-1 fs-5 p-2 align-items-center" key={ret}><span className="text-uppercase">{ret}</span><button 
                        onLoadStart={(e)=>{e.target.parentNode.parentNode.children[0].selectedIndex = -1;}}                       
                        onClick={(e)=>{
                            e.target.parentNode.parentNode.children[0].selectedIndex = 0;
                            setFilter(null); 
                            setType([]);
                        }} className="btn btn-close m-1 fs-5"></button></div>)
                    })}                  
                </div>
            </div>
          

            <div className="d-flex flex-wrap justify-content-center align-items-center">
                {
                filter? 
                <Type /> 
                :
                <Merch />
                }
            </div>

        </div>
    )
}

export default Shop