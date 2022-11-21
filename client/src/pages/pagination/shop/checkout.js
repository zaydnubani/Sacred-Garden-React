import React, {useEffect, useState} from  "react";
import axios from "axios";

import initWeb3Onboard from "../../../services";
import { useConnectWallet } from '@web3-onboard/react'

const Checkout = () => {

    const [web3Onboard, setWeb3Onboard] = useState(),
    [{ wallet, connecting }, connect, disconnect ] = useConnectWallet(null),
    [ address, setAddress ] = useState(null),
    [ email, setEmail ] = useState(null),
    [ tokens, setTokens ] = useState([]),
    [ cardPurch, setCardPurch ] = useState(false),
    MAINNET_CONTRACT_ADDRESS = "0X21374D22F169849CFD680241F3F37CD61AC2EEA5";

    // // // this perpetuates the connection to blocknative
    useEffect(() => {
        // This initializes bloclknative so that wallets can be connected given custom parameters from '../service'
        setWeb3Onboard(initWeb3Onboard)
    }, []);

    // when a wallet is present, i.e. coinbase, metamask, etc., useState will perpetuate the wallet's address
    useEffect(() => {
    // Asks IF there ISN'T a wallet connected or a provider then...
        if (wallet != null) {
        // throws a func that sets the provider given their ETH information to be used in a static state
            setAddress(wallet.accounts[0].address)
            return
        } else {
            // if wallet is == null then tokens, checkout, and address will be set to null so that NFT Port is not called and final cart will not set
            return
        }
    }, [ wallet ]);

    const winterFETCH = async (email) => {
        try {
            axios.get(`https://winter-api.usewinter.com/getNFTs?email=${email}`)
            .then(async (ret) => {
                const tokens = []
                await ret.data.forEach((ret)=>{
                    if(ret.smart_contract_address.toUpperCase() === MAINNET_CONTRACT_ADDRESS){
                        tokens.push({tokenId: ret.token_id, smartContract: ret.smart_contract_address.toUpperCase()})
                    }
                })
                return setTokens(tokens)
            })
            .catch((err)=>{
                console.log(err)
            })
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        if(email !== null){
            winterFETCH(email)
        }
    }, [email, setTokens])

    useEffect(()=>{

        const walletFETCH = async (address) => {
            try {
                axios.get(`https://api.nftport.xyz/v0/accounts/${address}`, {
                    params: {
                        chain: 'ethereum',
                        contract_address: "0x21374D22F169849cFD680241F3f37cD61AC2eea5"
                    }, 
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'b556fb67-bb92-4e82-85cc-643f02174e3a'
                    }
                })
                .then(async (res) => {
                    const tokens = []
                    await res.data.nfts.forEach((ret)=>{
                        tokens.push({tokenId:ret.token_id, smartContract: ret.contract_address.toUpperCase()})
                    })
                    setTokens(tokens)
                    return disconnect(wallet)
                })
                .catch(function (error) {
                    console.error(error);
                });
            } catch (err) {
                console.log(err)
            }
        }

        if(address !== null){
            walletFETCH(address)
        } else if(address === 'fool'){
            console.log(web3Onboard)
        }
    }, [address, setTokens, disconnect, web3Onboard, wallet]) 

    const [TOTAL, setTOTAL] = useState(),
    [SUBTOTAL, setSUBTOTAL] = useState(),
    [DISCOUNT, setDISCOUNT] = useState(),
    [QUANTITY, setQUANTITY] = useState();

    useEffect(()=>{
        if(tokens.length >= 1){
            setDISCOUNT(
                [{
                    total: (TOTAL* 0.10).toFixed(2),
                    type: 'membership',
                    percent: 10
                }]
            )
        }
    }, [setDISCOUNT, tokens, TOTAL])

    // Cart Array, this will temporarily store cart items to be edited, added, checkedout, etc. 
    const [CART, setCART] = useState([]),

    cartFETCH = async () => {
        try {
            axios.get(`${window.location.origin}/api/shop/cart/recieve`)
            .then((ret)=>{
                console.log(ret.data)
                setCART(ret.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        cartFETCH()
    },[])

    const checkoutPOST = async (cart, discount) => {
        try {
            axios({
                method: 'POST',
                url: `${window.location.origin}/api/shop/checkout/send`,
                data: {
                    cart: cart,
                    discount: discount
                }
            })
            .then((res)=>{
                console.log(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(()=>{
        if(CART.length>=1){
            const cost = [],
            quant = [];
            CART.forEach(ret=>{
                cost.push(ret.quantity*ret.price)
                quant.push(ret.quantity)
            })
            const total_cost = cost.reduce((x, y)=> x+y);
            const total_quantity = quant.reduce((x, y) => x+y);
            setQUANTITY(total_quantity)
            setSUBTOTAL(total_cost)
            return setTOTAL(total_cost)
        }
    }, [setTOTAL, CART])
    
    const EDIT = (item, action) => {

        const index = CART.indexOf(item),
        primary = CART.filter(ret=>ret===item),
        secondary = CART.filter(ret=>ret!==item);

        if (action === 'increase'){
            console.log(QUANTITY)
            if (primary[0].quantity >= 10){
                primary[0].quantity = 10
                secondary.splice(index, 0, primary[0])         
                return setCART(secondary)  
            } else {
                primary[0].quantity = primary[0].quantity + 1
                secondary.splice(index, 0, primary[0])         
                return setCART(secondary)
            }  
        } else{
            if (primary[0].quantity - 1 <= 0) {
                return setCART(secondary)
            } else {
                primary[0].quantity = primary[0].quantity - 1
                secondary.splice(index, 0, primary[0])          
                return setCART(secondary)   
            }
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 d-flex flex-column">
                    {
                        CART.length >= 1?
                            CART.map((ret)=>{
                                return(
                                    <div className='d-flex flex-column rounded my-1' style={{backgroundColor: "#FFF5B5", border: "solid 1px #FFE0E0"}} key={CART.indexOf(ret)}>
                                        <div className="d-flex flex-row w-100 mx-2 my-1">
                                            <img className="rounded" src="" alt="this is something" style={{height: "100px", width: "100px"}}/>
                                            <div className='d-flex flex-column justify-content-end'>
                                                <span className="Flora-Font text-uppercase Sacrd-Grn mx-1 fs-4">{ret.name}</span>
                                            </div>
                                        </div>
                                        <div className="p-1 mx-2 rounded" style={{backgroundColor: "#FFE0E0"}}></div>
                                        <div className="d-flex flex-row mx-2 my-1 Flora-Font text-uppercase Sacrd-Grn fs-5">
                                            <span className="m-1 p-1">qty</span>
                                            <div className="d-flex flex-row ms-auto align-content-center justify-content-center">
                                                <button className="Flora-Font btn rounded fs-5 m-1" style={{border: "none", backgroundColor: "#00544B", color: "#FFF5B5"}} onClick={()=>EDIT(ret, 'decrease')}>-</button>
                                                <div className="m-1 p-1">{ret.quantity}</div>
                                                <button className="Flora-Font btn rounded fs-5 m-1" style={{border: "none", backgroundColor: "#00544B", color: "#FFF5B5"}} onClick={()=>EDIT(ret, 'increase')}>+</button>
                                            </div>
                                        </div>  
                                        <div className="p-1 mx-2 rounded" style={{backgroundColor: "#FFE0E0"}}></div> 
                                        <div className="d-flex flex-row justify-content-between mx-2 my-1 text-uppercase Flora-Font Sacrd-Grn">
                                            <div className="d-flex flex-column">
                                                <span>size</span>
                                                <span className="text-wrap">{ret.size}</span>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <span>color</span>
                                                <span className="word-wrap">{ret.color}</span>
                                            </div> 
                                            <div className="d-flex flex-column">
                                                <span>price</span>
                                                <span>${ret.price}</span>
                                            </div>                                    
                                        </div>
                                    </div>
                                )
                            })
                            
                        :
                        null

                    }
                </div>
                <div className="col-md-6 d-flex flex-column">
                    <div className="d-flex flex-column m-2 Flora-Font Sacrd-Grn">
                        <label className="fs-4 text-uppercase my-1">Discount</label>
                        <div className="input-group my-1">
                            <input type="text" className="form-control Flora-Font text-uppercase" placeholder="discount code" aria-label="discount code" aria-describedby="button-addon2"/>
                            <button className="btn Flora-Font Sacrd-Grn text-uppercase" type="button" id="button-addon2" style={{backgroundColor: "#04F2AF"}} onClick={(e)=>{
                                if(e.currentTarget.parentNode.children[0].value.toUpperCase() === 'LFGROW22'){
                                    setDISCOUNT(
                                        [{
                                            total: (TOTAL * 0.10).toFixed(2),
                                            type: e.currentTarget.parentNode.children[0].value.toUpperCase(),
                                            percent: 10
                                        }]
                                    )
                                }
                            }}>apply</button>
                        </div>
                        <span className="align-self-center fs-5">- or -</span>
                        {
                            cardPurch !== false ?
                            <div className="d-flex flex-column my-1">
                                <div className="input-group">
                                    <input type="text" className="form-control Flora-Font text-uppercase" placeholder="email address" aria-label="email address" aria-describedby="button-addon2"/>
                                    <button className="btn Flora-Font Sacrd-Grn text-uppercase" type="button" id="button-addon2" style={{backgroundColor: "#04F2AF"}} onClick={(e)=>{setEmail(e.target.parentNode.children[0].value)}}>submit</button>
                                </div>
                                <button className='btn Flora-Font' onClick={()=>{
                                    setCardPurch(false)}}>
                                    <span>Purchased a Membership with a Wallet?</span>
                                </button>
                            </div> 
                            :
                            <div className="d-flex flex-column my-1">
                                <button className='btn Flora-Font fs-5 rounded' 
                                onClick={async () => (connect())}
                                style={{backgroundColor: '#04F2AF', color: '#00544B'}}>
                                    {connecting ? 'CONNECTING' : wallet ? 'CONNECTED' : 'CONNECT WALLET'}
                                </button>
                                <button className='btn Sacrd-Grn Flora-Font' onClick={()=>{
                                    setCardPurch(true)}}>
                                    <span>Purchased a Membership with a Credit or Debit Card?</span>
                                </button>
                            </div>
                        }
                    </div>
                    <div className="d-flex flex-column form-control text-uppercase Sacrd-Grn my-1">
                        <div className="d-flex flex-row Flora-Font my-1 ">
                            <span>subtotal</span>
                            <span className="ms-auto">${SUBTOTAL}</span>
                        </div>
                        <div className="d-flex flex-row Flora-Font my-1 ">
                            <span>discount</span>
                            {
                                DISCOUNT?
                                <span className="ms-auto">${DISCOUNT[0].total}</span>
                                :
                                <span className="ms-auto">...</span>
                            }
                        </div>
                        <div className="d-flex flex-row Flora-Font my-1 ">
                            <span>shipping</span>
                            <span className="ms-auto">incl.</span>
                        </div>
                        <div className="p-1 rounded" style={{backgroundColor: "#00544B"}}></div>
                        <div className="d-flex flex-row Flora-Font fs-5 my-1 ">
                            <span>total</span>
                            {
                                DISCOUNT?
                                <span className="ms-auto">${TOTAL - DISCOUNT[0].total}</span>
                                :
                                <span className="ms-auto">${TOTAL}</span>
                            }
                        </div>
                        <button className="btn Flora-Font fs-3 text-uppercase" style={{color: "#00544B", backgroundColor: "#04F2AF"}} onClick={async()=>{
                            if (DISCOUNT) {
                                await checkoutPOST(CART, DISCOUNT[0])
                            } else {
                                await checkoutPOST(CART)  
                            }
                            return window.location.replace(`${window.location.origin}/shop/checkout/payment`)
                        }} > Proceed to payment </button>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Checkout