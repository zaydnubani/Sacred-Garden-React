import React, { useEffect, useState } from "react";
import { useConnectWallet } from '@web3-onboard/react';
import initWeb3Onboard from '../services';
import { q, client } from "../config/fauna.js";

const Dashboard = () => {

    const [web3Onboard, setWeb3Onboard] = useState();
    const [{ wallet, connecting }, connect] = useConnectWallet()
    const [ orders, setOrders ] = useState([])
    const [ address, setAddress ] = useState(null)
    const [ email, setEmail ] = useState(null)
    const [ cardPurch, setCardPurch ] = useState(false)
    const [ review, setReview ] = useState(null)
    
    // // this perpetuates the connection to blocknative
    useEffect(() => {
        // This initializes bloclknative so that wallets can be connected given custom parameters from '../service'
        setWeb3Onboard(initWeb3Onboard)
    }, []);

    useEffect(() => {
        // Asks IF there ISN'T a wallet connected or a provider then...
            if (wallet != null) {
            // throws a func that sets the provider given their ETH information to be used in a static state
                return setAddress(wallet.accounts[0].address)
                // return setAddress('0x4d394709010193bce1e60725c8595e723215429a')
            } else {
                setReview(null)
                setOrders([])
            }
            return
    }, [ wallet]);

    useEffect(() => {
        const walletOrders = (address) => {
            client.query(q.Paginate(q.Match(q.Index("walletOrders"), address)))
            .then((ret)=>{
                ret.data.map( async (ref) => {
                    await client.query(q.Get(q.Ref(q.Collection('Orders'), ref.value.id))).then((oth) => { 
                        console.log({id: ref.value.id, order: oth.data})
                        return setOrders(old=>[...old,{order: ref.value.id, oth}])
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
        }

        const cardOrders = (email) => {
            client.query(q.Paginate(q.Match(q.Index('cardOrders'), email)))
            .then((ret)=>{
                ret.data.map( async (ref) => {
                    await client.query(q.Get(q.Ref(q.Collection('Orders'), ref.value.id))).then((oth) => { 
                        return setOrders(old=>[...old,{order: ref.value.id, oth}])
                    })
                    return 
                })
            }).catch((err) => console.error(
                'Error: [%s] %s: %s',
                err.name,
                err.message,
                err.errors()[0].description,
            ))
        }

        const allOrders = () => {
            client.query(q.Paginate(q.Match(q.Index('allOrders'))))
            .then((ret)=>{
                ret.data.map( async (ref) => {
                    await client.query(q.Get(q.Ref(q.Collection('Orders'), ref.value.id))).then((oth) => {
                        return setOrders(old=>[...old,{order: ref.value.id, oth}])
                    })
                    return 
                })
            }).catch((err) => console.error(
                'Error: [%s] %s: %s',
                err.name,
                err.message,
                err.errors()[0].description,
            ))
        }
        if(address === '0x4d394709010193bce1e60725c8595e723215429a' | address === '0x61c8c27b4c2ee5c653f7cd5c50674c0250009c90'){
            return allOrders()
        } else if(address != null && address !== '0x4d394709010193bce1e60725c8595e723215429a' | address != null && address !== '0x61c8c27b4c2ee5c653f7cd5c50674c0250009c9'){
            return walletOrders(address)
        } else if(email != null){
            return cardOrders(email)
        }
    }, [address, email, web3Onboard])

    return(
        <div className="row d-flex justify-content-evenly gy-3">
            <div className="col-12 col-lg-4">
                    <div className="container-fluid p-3 rounded d-flex flex-column justify-content-evenly" style={{backgroundColor: '#FFE0E0'}}>
                    {
                        cardPurch !== false ?
                        <div className="d-flex flex-column justify-content-evenly">
                            <span className="Flora-Font fs-3">Submit an email to review orders.</span>
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
                            <span className="Flora-Font fs-3">Connect to a wallet to review orders.</span>
                            <button className='btn Flora-Font fs-2 p-3 my-3 rounded w-100' 
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
            </div>
            {
                wallet != null ?
                <div className="col-12 col-lg-4">
                    <div className="p-3 rounded d-flex flex-column justify-content-evenly" style={{backgroundColor: '#FFE0E0'}}>
                        <span className="Flora-Font fs-3">Select an order to review.</span>
                    {
                        orders.length >= 1 ?
                            orders.map((ret)=>{
                                return(
                                    <button className="p-2 mx-1 my-2 rounded btn d-flex flex-column" style={{backgroundColor: '#FFF5B5'}} key={ret.order} onClick={(e)=>{
                                        setReview(null)                                        
                                        setReview(orders[orders.indexOf(ret)])
                                    }}>
                                        <span className="Flora-Font text-uppercase fs-5">Order #: {ret.order}</span>
                                        <div  className="p-1 rounded w-100" style={{backgroundColor: '#FFC4E8'}}>
                                            {ret.oth.data.Items.map((res)=>{
                                                return(
                                                    <div className="d-flex flex-row" key={ret.oth.data.Items.indexOf(res)}>
                                                        <div className="Flora-Font">
                                                            <span className="text-capitalize">{res.item}</span>
                                                        </div>
                                                        <span className="ms-auto Flora-Font">x{res.quantity}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </button> 
                                )
                            })
                            :
                            null
                    }
                    </div>
                </div>
                :
                null
            }
            {
                review != null?
                <div className="col-12 col-lg-4">
                    <div className="p-3 rounded d-flex flex-column justify-content-evenly" style={{backgroundColor: '#FFE0E0'}}>
                        <button type="button" className="btn-close ms-auto py-3" aria-label="Close" onClick={()=>{
                        setReview(null)
                        }}></button>
                        <div className="d-flex flex-column justify-content-evenly rounded p-2" style={{backgroundColor: '#FFF5B5'}}>
                            <span className="Flora-Font text-uppercase fs-5">Order #: {review.order}</span>
                            {review.oth.data.Items.map((res)=>{
                                return(
                                    <div className="d-flex flex-row rounded p-2 my-2" key={review.oth.data.Items.indexOf(res)} style={{backgroundColor: '#FFC4E8'}}>
                                        <div className="Flora-Font">
                                            <span className="text-capitalize">{res.item}</span>
                                        </div>
                                        <span className="ms-auto Flora-Font">x{res.quantity}</span>
                                    </div>
                                )
                            })}
                            <div className="d-flex Flora-Font flex-column rounded p-2 my-2" style={{backgroundColor: '#FFC4E8'}}>
                                <div className="d-flex flex-row">
                                    <span>Tokens</span>
                                    <span className="ms-auto">x{review.oth.data.Tokens.length}</span>
                                </div>
                                {review.oth.data.Tokens.map((ret)=>{
                                    return(
                                        <div className="d-flex Flora-Font rounded p-1 m-1" key={ret.tokenId} style={{backgroundColor: '#04F2AF'}}>
                                            <span>ERC{ret.tokenId}</span>
                                        </div>
                                    )
                                })}
                            </div>
                            {
                                review.oth.data.Email != null?
                                <div className="d-flex flex-row flex-wrap Flora-Font justify-content-between">
                                    <div className="d-flex flex-column w-100 p-2 rounded my-1" style={{backgroundColor: '#FFC4E8'}}>
                                        <label>Address</label>
                                        <span  className="rounded p-1" style={{backgroundColor: '#04F2AF'}}>{review.oth.data.Address}</span>
                                    </div>
                                    {
                                        review.oth.data.Apartment?
                                        <div className="d-flex flex-column w-100 p-2 rounded my-1" style={{backgroundColor: '#FFC4E8'}}>
                                            <label>Apartment</label>
                                            <span className="rounded p-1" style={{backgroundColor: '#04F2AF'}}>{review.oth.data.Apartment}</span>
                                        </div>
                                        :
                                        null
                                    }
                                    <div className="d-flex flex-column w-50 p-2 rounded my-1" style={{backgroundColor: '#FFC4E8'}}>
                                        <label>City</label>
                                        <span className="rounded p-1" style={{backgroundColor: '#04F2AF'}}>{review.oth.data.City}</span>
                                    </div>
                                    <div className="d-flex flex-column rounded p-2 my-1" style={{backgroundColor: '#FFC4E8'}}>
                                        <label>State</label>
                                        <span className="rounded p-1" style={{backgroundColor: '#04F2AF'}}>{review.oth.data.State}</span>
                                    </div>
                                    <div className="d-flex flex-column w-25 p-2 rounded my-1" style={{backgroundColor: '#FFC4E8'}}>
                                        <label>ZIP</label>
                                        <span className="rounded p-1" style={{backgroundColor: '#04F2AF'}}>{review.oth.data.ZIP}</span>
                                    </div>
                                </div>
                                :
                                null

                            }
                        </div>
                    </div>
                </div> 
                :
                null
            }
        </div>
    )
}

export default Dashboard