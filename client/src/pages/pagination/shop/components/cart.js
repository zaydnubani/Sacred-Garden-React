import React, {useEffect, useState} from "react";
import axios from "axios";

const Cart = () => {
    
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

    const cartPOST = async (cart) => {
        try {
            axios({
                method: 'POST',
                url: `${window.location.origin}/api/shop/cart/send`,
                data: cart
            
            })
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })
        } catch (err) {
            console.log(err)
        }
    },

    [TOTAL, setTOTAL] = useState(),
    [QUANTITY, setQUANTITY] = useState();

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
            return setTOTAL(total_cost)
        }
    }, [setTOTAL, CART])
    
    const EDIT = (item, action) => {

        const index = CART.indexOf(item),
        primary = CART.filter(ret=>ret===item),
        secondary = CART.filter(ret=>ret!==item);

        if (action === 'increase'){
            console.log(TOTAL)
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
            if(primary[0].quantity - 1 <= 0){
                return setCART(secondary)
            } else {
                primary[0].quantity = primary[0].quantity - 1
                secondary.splice(index, 0, primary[0])          
                return setCART(secondary)   
            }
        }
    }

    return (
        <div>
            {
                CART.length >= 1 ?
                <div className="d-flex flex-row">
                    <span className='btn Flora-Font'>({QUANTITY})</span>
                    <button className="btn ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offCART" aria-controls="offcanvasRight"><i className="fa-solid fa-cart-shopping ms-auto"></i></button>
                </div>
                :
                null
            }
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offCART" aria-labelledby="offCARTLabel" style={{backgroundColor: "#E8FFFB"}}>
                <div className="offcanvas-header">
                    <div id="offCARTLabel" className='text-uppercase Flora-Font fs-3'>cart</div>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body d-flex flex-column justify-content-between">
                    <div className='d-flex flex-column'>
                    {
                        CART.length >= 1?
                            CART.map((ret)=>{
                                return(
                                    <div className='d-flex flex-column rounded my-1' style={{backgroundColor: "#FFF5B5", border: "solid 1px #FFE0E0"}} key={CART.indexOf(ret)}>
                                        <div className="d-flex flex-row w-100 mx-2">
                                            <img className='img-fluid' src="" alt="this is something" style={{height:"50px", width:"50px"}}/>
                                            <div className='d-flex flex-column justify-content-end'>
                                                <span className="Flora-Font text-uppercase Sacrd-Grn">{ret.name}</span>
                                            </div>
                                        </div>
                                        <div className="p-1 mx-2 rounded" style={{backgroundColor: "#FFE0E0"}}></div>
                                        <div className="d-flex flex-row mx-2 my-1 Flora-Font text-uppercase Sacrd-Grn">
                                            <span className="m-1 p-1">qty</span>
                                            <div className="d-flex flex-row ms-auto align-content-center justify-content-center">
                                                <button className="Flora-Font btn rounded m-1" style={{border: "none", backgroundColor: "#00544B", color: "#FFF5B5"}} onClick={()=>EDIT(ret, 'decrease')}>-</button>
                                                <div className="m-1 p-1">{ret.quantity}</div>
                                                <button className="Flora-Font btn rounded m-1" style={{border: "none", backgroundColor: "#00544B", color: "#FFF5B5"}} onClick={()=>EDIT(ret, 'increase')}>+</button>
                                            </div>
                                        </div> 
                                        <div className="p-1 mx-2 rounded" style={{backgroundColor: "#FFE0E0"}}></div> 
                                        <div className="d-flex flex-row justify-content-between mx-2 my-1 Flora-Font text-uppercase Sacrd-Grn">
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
                    <div className="d-flex flex-column text-uppercase Sacrd-Grn my-1">
                        <button className="btn Flora-Font fs-3 text-uppercase" style={{color: "#00544B", backgroundColor: "#04F2AF"}} onClick={async()=>{
                            await cartPOST(CART)
                            return window.location.replace(`${window.location.origin}/shop/checkout/`)
                        }} > Proceed to Checkout</button>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Cart