import React, {useEffect, useState} from "react";
import axios from "axios";
import { PayPalScriptProvider, PayPalButtons} from '@paypal/react-paypal-js';
import moment from "moment"

const Payment = () => {

    const [TOTAL, setTOTAL] = useState(),
    [SUBTOTAL, setSUBTOTAL] = useState(),
    [DISCOUNT, setDISCOUNT] = useState(),
    [QUANTITY, setQUANTITY] = useState(),
    [CART, setCART] = useState([]),
    [PRINTFUL, setPRINTFUL] = useState([]);


    useEffect(()=>{

        const fetchCART = async () => {
            try{
                await axios.get(`${window.location.origin}/api/shop/checkout/recieve`)
                .then((ret)=>{
                    if(ret.data.discount !== undefined){
                        console.log(ret.data.discount)
                        setDISCOUNT(ret.data.discount)
                    } 
                    const print = []               
                    ret.data.cart.forEach((res)=>{
                        if(res.printful){
                            res.printful.quantity = res.quantity
                            console.log(res.printful.name.split("-")[0])
                            if(res.printful.files.filter(item=>item.preview_url.split('/')[3]==="printfile-preview").length >= 1){
                                const filter = res.printful.files.filter(item=>item.preview_url.split('/')[3]!=="printfile-preview")
                                const index = filter.findIndex((item)=>item.type==="preview")
                                filter[index].type = "default"
                                res.printful.files = filter
                                print.push(res.printful)
                            }
                            
                            if (res.printful.name === "Plant Guardian & Fungi Hat" | res.printful.name === "Ayahuasca Vine Hat" | res.printful.name.split("-")[0] === "Plant Family Crop Tee " ){
                                console.log('im in the innersanctum')
                                if(res.printful.name === "Plant Guardian & Fungi Hat" ){
                                    const thread_colors = res.printful.options.findIndex((item)=>item.id === "thread_colors"),
                                    thread_colors_back = res.printful.options.findIndex((item)=>item.id === "thread_colors_back")
                                    console.log('found the scrotum', thread_colors, thread_colors_back)
                                    res.printful.options[thread_colors].value = ["#FFFFFF"]
                                    res.printful.options[thread_colors_back].value = ["#FFFFFF", "#A67843"]
                                    print.push(res.printful)
                                } else if (res.printful.name === "Ayahuasca Vine Hat") {
                                    const thread_colors = res.printful.options.findIndex((item)=>item.id === "thread_colors"),
                                    thread_colors_back = res.printful.options.findIndex((item)=>item.id === "thread_colors_back")
                                    console.log('found the scrotum', thread_colors, thread_colors_back)
                                    res.printful.options[thread_colors].value = ["#A67843", "#7BA35A"]
                                    res.printful.options[thread_colors_back].value = ["#7BA35A"]
                                    print.push(res.printful)
                                } else if (res.printful.name.split("-")[0] === "Plant Family Crop Tee ") {
                                    const thread_colors_chest_left = res.printful.options.findIndex((item)=>item.id === "thread_colors_chest_left")
                                    res.printful.options[thread_colors_chest_left].value = ["#FFFFFF", "#E25C27", "#A67843", "#01784E", "#7BA35A", "#A67843", "#333366"]
                                    console.log('found the scrotum', thread_colors_chest_left)
                                    print.push(res.printful)
                                }
                            }
                        }
                    })
                    console.log(print, QUANTITY)
                    setPRINTFUL(print)
                    return setCART(ret.data.cart)
                })
                .catch((err)=>{
                    console.log(err)
                })
            } catch (err) {
                console.log(err)
            }
        };

        fetchCART();
    },[setCART, setPRINTFUL, QUANTITY]);

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

            if(DISCOUNT){
                return setTOTAL(total_cost - DISCOUNT.total)
            }
            else{
                return setTOTAL(total_cost)
            }
        }
    }, [setTOTAL, CART, DISCOUNT])

    const [HEIGHT, setHEIGHT] = useState();

    useEffect(()=>{
        const payment = document.getElementById('payment')
        setHEIGHT(payment.clientHeight * 2)
    }, [setHEIGHT])

    const orderPOST = async (order) => {
        try {
            axios({
                method: 'POST',
                url:`${window.location.origin}/api/shop/checkout/success/create`,
                data: order
            })
            .then((res)=>{console.log(res)})
            .catch((err)=>{console.log(err)})
        } catch (err) {
            console.log(err)
        }
    },

    successPOST = async (order) => {
        try {
            axios({
                method: 'POST',
                url:`${window.location.origin}/api/shop/checkout/success/send`,
                data: order
            })
            .then((res)=>{console.log(res)})
            .catch((err)=>{console.log(err)})
        } catch (err) {
            console.log(err)
        }
    },

    printfulPOST = async (order) => {
        try {
            axios({
                method: 'POST',
                url:`${window.location.origin}/api/shop/printful/order/send`,
                data: order
            })
            .then((res)=>{console.log(res)})
            .catch((err)=>{console.log(err)})
        } catch (err) {
            console.log(err)
        }
    },

    orderCREATE = async (shipping, billing, order_num, email, payee) => {
        const object = {
            payee: payee,
            items: CART,
            shipping: shipping,
            billing: billing,
            order: order_num,
            subtotal: SUBTOTAL,
            total: TOTAL,
            discount: DISCOUNT,
            email: email,
            time: {
                date: moment().format('L'),
                military: `${moment().format('HH')}:${moment().format('mm')} ${moment().format('A')}`,
                civilian: `${moment().format('hh')}:${moment().format('mm')} ${moment().format('A')}`
            }
        };

        if(PRINTFUL.length >= 1){
            console.log(PRINTFUL)
            const printful = {
                recipient: {
                    name: shipping.name.full_name,
                    address1: shipping.address.address_line_1,
                    address2: shipping.address.address_line_2,
                    city: shipping.address.admin_area_2,
                    state_code: shipping.address.admin_area_1,
                    country_code: shipping.address.country_code,
                    zip: shipping.address.postal_code
                },
                items:PRINTFUL
            }
            console.log(printful)
            await printfulPOST(printful)
        }

        await orderPOST(object)
        await successPOST(object)
        return window.location.replace(`${window.location.origin}/success`)

    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 d-flex flex-column" style={{height: `${HEIGHT}px`}}>
                    <label className="Flora-Font text-uppercase fs-4 mx-2 Sacrd-Grn">Cart</label>
                    <div className="d-flex flex-column mx-2 overflow-auto">
                        {   
                            CART.length >= 1?
                            CART.map((ret)=>{
                                return(
                                    <div className='d-flex flex-column rounded my-1 flex-grow-1' style={{backgroundColor: "#FFF5B5", border: "solid 1px #FFE0E0"}} key={CART.indexOf(ret)}>
                                        <div className="d-flex flex-row mx-2 my-1">
                                            <img src="" style={{height:"50px", width:"50px"}} alt="something important"/>
                                            <div className='d-flex flex-column justify-content-end mx-1'>
                                                <span className="Flora-Font text-uppercase Sacrd-Grn">{ret.name}</span>
                                            </div>
                                        </div>
                                        <div className="p-1 mx-2 rounded" style={{backgroundColor: "#FFE0E0"}}></div>
                                        <div className="d-flex flex-row mx-2 my-1 Flora-Font text-uppercase Sacrd-Grn">
                                            <span>qty</span>
                                            <span className="ms-auto">{ret.quantity}</span>
                                        </div>  
                                        <div className="p-1 mx-2 rounded" style={{backgroundColor: "#FFE0E0"}}></div> 
                                        <div className="d-flex flex-row justify-content-between mx-2 my-1 text-uppercase Flora-Font Sacrd-Grn">
                                            <div className="d-flex flex-column">
                                                <span>size</span>
                                                <span>{ret.size}</span>
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
                </div>
                <div id="payment" className="col-md-6 d-flex flex-column">
                    {
                        DISCOUNT?
                        <div className="d-flex flex-column m-2 Flora-Font Sacrd-Grn">
                            <label className="fs-4 text-uppercase">discount</label>
                            <div className="d-flex flex-row form-control my-1 Flora-Font Sacrd-Grn text-uppercase">
                                <span >{DISCOUNT.type}</span>
                                <span className="ms-auto">{DISCOUNT.percent}% off</span>
                            </div>
                        </div>
                        :
                        null
                    }
                    <div className="d-flex flex-column m-2 Flora-Font Sacrd-Grn">
                        <label className="fs-4 text-uppercase">Payment</label>
                        <div className="d-flex flex-column form-control my-1 Flora-Font Sacrd-Grn text-uppercase">
                            <div className="d-flex flex-row p-1">
                                <span>subtotal</span>
                                <span className="ms-auto">${SUBTOTAL}</span>
                            </div>
                            {
                                DISCOUNT?
                                <div className="d-flex flex-row p-1">
                                    <span >discount</span>
                                    <span className="ms-auto disabled">-${DISCOUNT.total}</span>
                                </div>
                                :
                                null
                            }
                            <div className="d-flex flex-row p-1">
                                <span>shipping</span>
                                <span className="ms-auto">incl.</span>
                            </div>
                            <div className="p-1 rounded" style={{backgroundColor: '#00544B'}}></div>
                            <div className="d-flex flex-row fs-5 p-1">
                                <span>total</span>
                                <span className="ms-auto">${TOTAL}</span>
                            </div>
                            {
                                TOTAL ?
                                <PayPalScriptProvider className="align-self-center" options={{"client-id":'test'}}>
                                    <PayPalButtons
                                        onClick={()=>console.log(TOTAL)}
                                        createOrder={(data, actions) => {
                                            return actions.order.create({
                                                purchase_units: [
                                                    {
                                                        amount: {
                                                            value: TOTAL,
                                                        },
                                                    },
                                                ],
                                            });
                                        }}
                                        onApprove={(data, actions) => {
                                            return actions.order.capture().then((details) => {
                                                console.log(details.purchase_units[0].shipping)
                                                orderCREATE(details.purchase_units[0].shipping, details.payer.address, details.id, details.payer.email_address, details.purchase_units[0].payee.email_address)
                                            });
                                        }}
                                        fundingSource='paypal'
                                    />
                                    <div className="text-center">
                                        <span className="Flora-Font fs-5">- or -</span>
                                    </div>
                                    <PayPalButtons 
                                        createOrder={(data, actions) => {
                                            return actions.order.create({
                                                purchase_units: [
                                                    {
                                                        amount: {
                                                            value: TOTAL,
                                                        },
                                                    },
                                                ],
                                            });
                                        }}
                                        onApprove={(data, actions) => {
                                            return actions.order.capture().then((details) => {
                                                orderCREATE(details.purchase_units[0].shipping, details.payer.address, details.id, details.payer.email_address, details.purchase_units[0].payee.email_address)
                                            });
                                        }}
                                        fundingSource='card'
                                    />
                                </PayPalScriptProvider>
                                :
                                null
                            }
                            
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        
    )
}

export default Payment