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
    const [ details, setDetails ] = useState([])
    const [ tracking, setTracking ] = useState([])
    const [ reload, setReload ] = useState(false)
    
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
                setAddress(null)
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

    useEffect(()=>{
        const updateOrder = (trackingNum, id) => {
            client.query(
                q.Update(
                  q.Ref(q.Collection('Orders'), id),
                  {
                    data: trackingNum,
                  },
                )
              )
              .then((ret) => console.log(ret))
              .catch((err) => console.error(
                'Error: [%s] %s: %s',
                err.name,
                err.message,
                err.errors()[0].description,
                )
            )
        }

        if(tracking.length >= 1){
            return updateOrder(tracking[0].data, tracking[0].order)
        }
        return
    }, [tracking])

    useEffect(()=>{
        const getOrder = (id) =>{
            client.query(
                q.Get(q.Ref(q.Collection('Orders'), id))
              )
              .then((ret) => setDetails([ret.data]))
              .catch((err) => console.error(
                'Error: [%s] %s: %s',
                err.name,
                err.message,
                err.errors()[0].description,
              ))
        }
        if (review != null){
            getOrder(review)
        }
        return
    }, [review])

    return(
        <div className="row d-flex justify-content-evenly gy-3">
            <div className="col-12 col-lg-4">
                    <div className="container-fluid p-3 rounded d-flex flex-column justify-content-evenly">
                    {
                        cardPurch !== false ?
                        <div className="d-flex flex-column justify-content-evenly">
                            <span className="Flora-Font fs-3 text-center w-100" style={{color: '#00544B'}}>Submit an email to review orders</span>
                            <div className="d-flex flex-row w-100">
                                <input className='Flora-Font p-3 my-3 text-uppercase rounded w-75 mx-1 border-0' type={'email'} placeholder='Email Address'/>
                                <button className="btn Flora-Font fs-5 p-3 my-3 text-uppercase" 
                                onClick={(e)=>{setEmail(e.target.parentNode.children[0].value)}} style={{backgroundColor: '#04F2AF', color: '#00544B'}}>
                                    submit
                                </button>
                            </div>
                            <button className='btn Flora-Font text-decoration-underline text-primary' onMouseOver={(e)=>{e.target.className = 'btn Flora-Font text-decoration-underline text-secondary'}} onMouseOut={(e)=>{e.target.className = 'btn Flora-Font text-decoration-underline text-primary'}} onClick={()=>{
                                setCardPurch(false)}}>
                               Purchased a Membership with a Wallet?
                            </button>
                        </div> 
                        :
                        <div className="d-flex flex-column justify-content-evenly align-items-center">
                            <span className="Flora-Font fs-3 text-center w-100" style={{color: '#00544B'}}>To review orders connect a wallet</span>
                            <button className='btn Flora-Font fs-4 p-3 my-3 rounded w-100' 
                            onClick={async () => (connect())}
                            style={{backgroundColor: '#04F2AF', color: '#00544B'}}>
                                {connecting ? 'CONNECTING' : wallet ? 'CONNECTED' : 'CONNECT WALLET'}
                            </button>
                            <button className='btn Flora-Font text-decoration-underline text-primary' onMouseOver={(e)=>{e.target.className = 'btn Flora-Font text-decoration-underline text-secondary'}} onMouseOut={(e)=>{e.target.className = 'btn Flora-Font text-decoration-underline text-primary'}} onClick={()=>{
                                setCardPurch(true)}}>
                                Purchased a Membership with a Credit or Debit Card?
                            </button>
                        </div>
                    }
                    </div>
            </div>
            {
                wallet != null | email != null?
                <div className="col-12 col-lg-4">
                    {
                        orders.length >= 1 ?
                        <div className="p-3 rounded d-flex flex-column justify-content-evenly">
                            <span className="Flora-Font fs-3 text-center w-100" style={{color: '#00544B'}}>Tap or Click an order to review details</span>
                            {orders.map((ret)=>{
                                return(
                                    <button className="p-2 mx-1 my-2 rounded btn d-flex flex-column" style={{backgroundColor: '#04F2AF'}} key={orders.indexOf(ret)} onClick={(e)=>{
                                        setReview(null)
                                        setDetails([])
                                        setReload(false)                           
                                        setReview(ret.order)
                                    }}>
                                        <span className="Flora-Font text-uppercase w-100" style={{color: '#00544B'}}>Order: {ret.order}</span>
                                        <div  className="p-1 rounded w-100">
                                            {ret.oth.data.Items.map((res)=>{
                                                return(
                                                    <div className="my-1 p-2 rounded" key={ret.oth.data.Items.indexOf(res)} style={{backgroundColor: '#43D3EE', color: '#00544B'}}>
                                                        {
                                                            res.size?
                                                            <div className="d-flex flex-column rounded w-100">
                                                                <span className="Flora-Font text-capitalize align-self-start">{res.item}</span>
                                                                <div className="d-flex flex-row">
                                                                    <span className="Flora-Font mx-4">{res.size}</span>
                                                                    <span className="ms-auto Flora-Font">x{res.quantity}</span>
                                                                </div>
                                                            </div>
                                                            :
                                                            <div className="d-flex flex-row rounded w-100">
                                                                <span className="Flora-Font text-capitalize align-self-start">{res.item}</span>
                                                                <span className="ms-auto Flora-Font align-self-center">x{res.quantity}</span>
                                                            </div>
                                                        }
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </button> 
                                )
                            })}
                        </div>
                        :
                        <div className="p-3 rounded d-flex flex-column justify-content-evenly text-center" style={{backgroundColor: '#FFE0E0'}}>
                            <span className="Flora-Font fs-3">No orders associated with this account.</span>
                            <span className="Flora-Font fs-5">Visit the shop to place an order!</span>
                            <a href="/shop" className="btn Flora-Font btn-primary text-uppercase fs-3">SHOP</a>
                        </div>
                    }
                </div>
                :
                null
            }
            {
                review != null?
                <div className="col-12 col-lg-4">
                    {details.map((ret)=>{
                        return(
                            <div className="p-3 rounded d-flex flex-column justify-content-evenly">
                                <span className="Flora-Font fs-3 text-center w-100" style={{color: '#00544B'}}>Review order details</span>
                                <div className="d-flex flex-column justify-content-evenly rounded p-2" style={{backgroundColor: '#04F2AF'}}>
                                    <div className="d-flex flex-row w-100 align-items-center py-1">
                                        <span className="Flora-Font text-uppercase" style={{color: '#00544B'}}>Order: {review}</span>
                                        <button type="button" className="btn-close ms-auto" aria-label="Close" onClick={()=>{
                                            setReview(null)
                                            setDetails([])
                                            setReload(false)
                                        }}></button>
                                    </div>
                                    {ret.Items.map((res)=>{
                                        return(
                                            <div className="rounded" key={ret.Items.indexOf(res)} style={{backgroundColor: '#43D3EE', color: '#00544B'}}>
                                                {
                                                    res.size?
                                                    <div className="d-flex flex-column rounded p-2 my-2">
                                                        <span className="Flora-Font text-capitalize">{res.item}</span>
                                                        <div className="d-flex flex-row">
                                                            <span className="Flora-Font mx-4">{res.size}</span>
                                                            <span className="ms-auto Flora-Font">x{res.quantity}</span>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className="d-flex flex-row rounded p-2 my-2">
                                                        <span className="Flora-Font text-capitalize">{res.item}</span>
                                                        <span className="ms-auto Flora-Font align-self-center">x{res.quantity}</span>
                                                    </div>
                                                }
                                            </div>
                                        )
                                    })}
                                    <div className="d-flex Flora-Font flex-column rounded p-2 my-2" style={{backgroundColor: '#43D3EE', color: '#00544B'}}>
                                        <div className="d-flex flex-row">
                                            <span>Tokens</span>
                                            <span className="ms-auto">x{ret.Tokens.length}</span>
                                        </div>
                                        {ret.Tokens.map((res)=>{
                                            return(
                                                <div className="d-flex Flora-Font rounded p-1 m-1" key={ret.Tokens.indexOf(res)} style={{backgroundColor: '#FFF5B5'}}>
                                                    <span>ERC{ret.tokenId}</span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    {
                                        ret.email ? 
                                        <div className="d-flex flex-column w-100 p-2 rounded my-1" style={{backgroundColor: '#43D3EE', color: '#00544B'}}>
                                            <label>Email</label>
                                            <span  className="rounded p-1" style={{backgroundColor: '#FFF5B5'}}>{ret.Email}</span>
                                        </div>  
                                        :
                                        null
                                    }
                                    {
                                        ret.Address != null?
                                            <div className="d-flex flex-row flex-wrap Flora-Font justify-content-between">
                                                {
                                                    ret.First ?
                                                    <div className="d-flex flex-row w-100 rounded" style={{backgroundColor: '#43D3EE', color: '#00544B'}}>
                                                        <div className="d-flex flex-column w-50 p-2 my-1">
                                                            <label>First Name</label>
                                                            <span className="rounded p-1" style={{backgroundColor: '#FFF5B5'}}>{ret.First}</span>
                                                        </div>
                                                        <div className="d-flex flex-column w-50 p-2 my-1">
                                                            <label>Last Name</label>
                                                            <span className="rounded p-1" style={{backgroundColor: '#FFF5B5'}}>{ret.Last}</span>
                                                        </div>
                                                    </div>
                                                    :
                                                    null
                                                }
                                                <div className="d-flex flex-column w-100 p-2 rounded my-1" style={{backgroundColor: '#43D3EE', color: '#00544B'}}>
                                                    <label>Address</label>
                                                    <span  className="rounded p-1" style={{backgroundColor: '#FFF5B5'}}>{ret.Address}</span>
                                                </div>
                                                {
                                                    ret.Apartment?
                                                        <div className="d-flex flex-column w-100 p-2 rounded my-1" style={{backgroundColor: '#43D3EE', color: '#00544B'}}>
                                                            <label>Apartment</label>
                                                            <span className="rounded p-1" style={{backgroundColor: '#FFF5B5'}}>{ret.Apartment}</span>
                                                        </div>
                                                        :
                                                        null
                                                }
                                                <div className="d-flex flex-column w-50 p-2 rounded my-1" style={{backgroundColor: '#43D3EE', color: '#00544B'}}>
                                                    <label>City</label>
                                                    <span className="rounded p-1" style={{backgroundColor: '#FFF5B5'}}>{ret.City}</span>
                                                </div>
                                                <div className="d-flex flex-column rounded p-2 my-1" style={{backgroundColor: '#43D3EE', color: '#00544B'}}>
                                                    <label>State</label>
                                                    <span className="rounded p-1" style={{backgroundColor: '#FFF5B5'}}>{ret.State}</span>
                                                </div>
                                                <div className="d-flex flex-column w-25 p-2 rounded my-1" style={{backgroundColor: '#43D3EE', color: '#00544B'}}>
                                                    <label>ZIP</label>
                                                    <span className="rounded p-1" style={{backgroundColor: '#FFF5B5'}}>{ret.ZIP}</span>
                                                </div>
                                                {
                                                    address === '0x4d394709010193bce1e60725c8595e723215429a' | address === '0x61c8c27b4c2ee5c653f7cd5c50674c0250009c90'?
                                                        ret.Tracking?
                                                            <div className="d-flex flex-column w-100 p-2 rounded my-1" style={{backgroundColor: '#43D3EE', color: '#00544B'}}>
                                                                <label>Tracking</label>
                                                                <span className="rounded p-1" style={{backgroundColor: '#FFF5B5'}}>{ret.Tracking}</span>
                                                            </div>
                                                            :
                                                            reload !== false?
                                                            <div className="d-flex flex-column w-100 p-2 rounded my-1" style={{backgroundColor: '#43D3EE', color: '#00544B'}}>
                                                                <label className="my-1">Update Tracking Information:</label>
                                                                <span className="rounded p-1 Flora-Font my-1 border-0" style={{backgroundColor: '#FFF5B5'}}>Refresh or comeback later to review tracking</span>
                                                            </div>
                                                            :
                                                            <div className="d-flex flex-column w-100 p-2 rounded my-1" style={{backgroundColor: '#43D3EE', color: '#00544B'}}>
                                                                <label className="my-1">Update Tracking Information:</label>
                                                                <input className="rounded p-1 Flora-Font my-1 border-0" style={{backgroundColor: '#FFF5B5'}} placeholder="Tracking Number"/>
                                                                <button className="btn Flora-Font fs-5 text-uppercase my-1" style={{backgroundColor: '#04F2AF', color: '#00544B'}} onClick={(e)=>{
                                                                    setReload(true)
                                                                    setTracking([{order: review, data: {Wallet: ret.Wallet, Items: ret.Items, Tokens: ret.Tokens, First: ret.First, Last: ret.Last, Email: ret.Email, Address: ret.Address, Apartment: ret.Apartment, City: ret.City, State: ret.State, ZIP: ret.ZIP, Tracking: e.target.parentNode.children[1].value}}])
                                                                }}>Update Tracking</button>
                                                            </div>
                                                    :
                                                    review.oth.data.Tracking?
                                                        <div className="d-flex flex-column w-100 p-2 rounded my-1" style={{backgroundColor: '#FFC4E8'}}>
                                                            <label>Tracking</label>
                                                            <span className="rounded p-1" style={{backgroundColor: '#04F2AF'}}>{review.oth.data.Tracking}</span>
                                                        </div>
                                                        :
                                                        null       
                                                }
                                            </div>
                                            :
                                            null
                                    }
                                </div>
                            </div>
                        )
                    })}
                </div> 
                :
                null
            }
        </div>
    )
}

export default Dashboard