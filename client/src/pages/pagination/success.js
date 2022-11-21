import React, {useEffect, useState} from "react";
import axios from "axios";

const Success = () => {

    const [SUCCESS, setSUCCESS] = useState(),

    successFETCH = async () => {
        try{
            await axios.get(`${window.location.origin}/api/shop/checkout/success/recieve`)
            .then((ret)=>{
                console.log(ret.data)
                return setSUCCESS(ret.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(()=>{
        successFETCH()
    }, [setSUCCESS])

    return (
        <div className="container-fluid">
            {
                SUCCESS?
                <div className="row">
                    <div className="col-12 d-flex flex-column">
                        <div className="d-flex flex-column Flora-Font text-uppercase Sacrd-Grn m-2 align-items-center text-center">
                            <span className="fs-1">order recieved</span>
                            <div className="d-flex flex-row flex-wrap align-items-center">
                                <span className="mx-1">order#: {SUCCESS.order}</span>
                                <span className="mx-1">Date: {SUCCESS.time.date}</span>
                            </div>
                            <p>a confirmation email has been sent to <span className="text-decoration-underline">{SUCCESS.email}</span></p>
                        </div>
                        
                    </div>
                    <div className="col-sm-6 col-md-6 d-flex flex-column">
                        <div className="d-flex flex-column m-2">
                            <label className="fs-4 Flora-Font text-uppercase Sacrd-Grn">Cart</label>
                            <div className="Flora-Font text-uppercase Sacrd-Grn my-1 overflow-auto">
                                {
                                    SUCCESS.items.map((ret)=>{
                                        return(
                                            <div className='d-flex flex-column rounded my-1 flex-fill' style={{backgroundColor: "#FFF5B5", border: "solid 1px #FFE0E0"}} key={SUCCESS.items.indexOf(ret)}>
                                                <div className="d-flex flex-row mx-2">
                                                    <img src="" style={{height:"50px", width:"50px"}} alt="something"/>
                                                    <div className='d-flex flex-column justify-content-end'>
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
                                }                
                            </div>  
                        </div>
                    </div>
                    <div id="shipping" className="col-sm-6 col-md-6 d-flex flex-column">
                        <div className="d-flex flex-column m-2">
                            <label className="fs-4 Flora-Font text-uppercase Sacrd-Grn">Contact Infromation</label>                 
                            <span className="form-control Flora-Font text-uppercase Sacrd-Grn my-1">{SUCCESS.email}</span> 
                        </div>
                        <div className="d-flex flex-column m-2">
                            <label className="fs-4 Flora-Font text-uppercase Sacrd-Grn">Shipping Address</label>
                            <div className="d-flex flex-column form-control Flora-Font text-uppercase Sacrd-Grn my-1">
                                <div className="d-flex flex-row my-1">
                                    <span>{SUCCESS.shipping.name.full_name}</span>
                                </div>
                                <span className="my-1">{SUCCESS.shipping.address.address_line_1}</span>
                                {
                                    SUCCESS.shipping.address.address_line_2?
                                    <span className="my-1">{SUCCESS.shipping.address.address_line_2}</span>
                                    :
                                    null
                                }
                                <div className="d-flex flex-row justify-content-between my-1">
                                    <span>{SUCCESS.shipping.address.admin_area_2}</span>
                                    <span>{SUCCESS.shipping.address.admin_area_1}</span>
                                    <span>{SUCCESS.shipping.address.postal_code}</span>
                                </div>
                            </div>
                        </div>
                        {
                            SUCCESS.discount?
                            <div className="d-flex flex-column m-2 Flora-Font Sacrd-Grn">
                                <label className="fs-4 text-uppercase">Discount</label>
                                <div className="d-flex flex-row form-control my-1 Flora-Font Sacrd-Grn text-uppercase">
                                    <span>{SUCCESS.discount.type}</span>
                                    <span className="ms-auto">{SUCCESS.discount.percent}% off</span>
                                </div>
                            </div>
                            :
                            null
                        }
                        <div className="d-flex flex-column m-2 Flora-Font Sacrd-Grn">
                            <label className="fs-4 text-uppercase">Payment</label>
                            <div className="d-flex flex-column form-control text-uppercase Sacrd-Grn my-1">
                                <div className="d-flex flex-row Flora-Font my-1 ">
                                    <span>subtotal</span>
                                    <span className="ms-auto">${SUCCESS.subtotal}</span>
                                </div>
                                {
                                    SUCCESS.discount?
                                    <div className="d-flex flex-row Flora-Font my-1 ">
                                        <span>discount</span>
                                        <span className="ms-auto">${SUCCESS.discount.total}</span>   
                                    </div>
                                    :
                                    null
                                }
                                <div className="d-flex flex-row Flora-Font my-1 ">
                                    <span>shipping</span>
                                    <span className="ms-auto">incl.</span>
                                </div>
                                <div className="p-1 rounded" style={{backgroundColor: "#00544B"}}></div>
                                <div className="d-flex flex-row Flora-Font fs-5 my-1 ">
                                    <span>total</span>
                                    <span className="ms-auto">${SUCCESS.total}</span>
                                </div> 
                            </div>
                            
                        </div> 
                    </div>  
                </div>   
                :
                null
            }
            
        </div>
    )
}

export default Success