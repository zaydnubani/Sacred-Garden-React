import React, { useEffect, useState } from "react";
import axios from "axios";

// import phIMG from '../../../images/300px/1.png'

const Item = () => {

    const [CART, setCART] = useState([]),

    cartFETCH = async () => {
        try {
            axios.get(`${window.location.origin}/api/shop/cart/recieve`)
            .then((ret)=>{
                if(ret.data === ''){
                    return setCART([])
                } else {
                    return setCART(ret.data)
                }
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
            console.log(CART)
            axios({
                method: 'POST',
                url: `${window.location.origin}/api/shop/cart/send`,
                data: cart
            })
            .then((res)=>{
                console.log(res.data)
                return window.location.replace(`${window.location.origin}/shop`)
            })
            .catch((err)=>{
                console.log(err)
            })
        } catch (err) {
            console.log(err)
        }
    },

    addCART = async (item) => {
        console.log(CART)
        // this checks if there is more than one item of the same size, color, and name in the CART array; if there is then it will change said items quantity. 
        if(CART.filter(ret=>ret.name === item.name && ret.size === item.size && ret.color === item.color).length >= 1){
            console.log('duplicate')
            // this finds the index of the duplicate.
            const index = CART.findIndex(ret=>ret.name === item.name && ret.size === item.size && ret.color === item.color),
            // this sets a variable with the duplicates starting quantity.
            quantity = CART[index].quantity,
            // this creates an empty array where we'll store the updated cart.
            updCART = [];
            // this increases the duplicate quantity to be reflected in the cart.
            CART[index].quantity = await quantity + item.quantity;
            // this pushes all the items in the cart to the empty array updCART.
            CART.forEach(ret=>updCART.push(ret));
            // sets the state CART with the updCART array; this will invoke a change so that the quantity increase will be seen in real time. 
            setCART(updCART);
            return cartPOST(CART)
        } else {
            console.log('no duplicate', item)
            // if there is no duplicate the object ITEM will be added to the CART. 
            CART.push(item)
            return cartPOST(CART)
        }
    },

    [ITEM, setITEM] = useState(),
    
    itemGET = async() => {
        try {
            return await axios.get(`${window.location.origin}/api/shop/item/recieve`)
            .then(res=>{
                if(!res.data){
                    return window.location.replace(`${window.location.origin}/shop`)
                }else {
                    return setITEM(res.data)
                }
            })
            .catch(err=>console.log(err))
        } catch (err){
            return console.log(err)
        }
    }

    useEffect(()=>{
        itemGET();
    }, []);

    const [SELECT, setSELECT] = useState(0),

    [QUANTITY, setQUANTITY] = useState(1);

    useEffect(()=>{
        if (QUANTITY <= 0){
            return setQUANTITY(1)
        } else if (QUANTITY >= 10){
            return setQUANTITY(10)
        }
        return
    }, [QUANTITY]);
    
    return(
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                {
                    ITEM?
                    <div className="d-flex flex-column rounded my-1" style={{backgroundColor: "#FFF5B5", border: "#FFE0E0 solid 2px"}}>
                        <div className="d-flex flex-column px-2">
                            <div className="d-flex flex-row Flora-Font position-relative my-1">
                                    <img className="rounded" src="" alt="" style={{height: "150px", width: "150px"}}/>
                                    {
                                        ITEM.badge?
                                        <div className="rounded px-1" style={{backgroundColor: "#43D3EE", transform: "rotate(-90deg)", position: "absolute", top: "50%", left: "-40px"}}>
                                            <span style={{color: "#FFAC80"}}>     
                                                {ITEM.badge}
                                            </span>
                                        </div>
                                        :
                                        null
                                    }
                                    
                                <div className="Sacrd-Grn fs-3 text-uppercase align-self-end mx-1">
                                    {ITEM.source}
                                </div>
                            </div>                
                            <div className="p-1 rounded" style={{backgroundColor: "#FFE0E0"}}></div>
                        </div>
                        <div className="d-flex flex-row py-2 mx-2 Flora-Font Sacrd-Grn fs-5 text-uppercase">
                            <span>item</span>
                            <span className="ms-auto">{ITEM.details.name}</span>
                        </div>
                        <div className="p-1 mx-2 rounded" style={{backgroundColor: "#FFE0E0"}}></div>
                        <div className="d-flex flex-row py-2 mx-2 fs-5 Flora-Font text-uppercase Sacrd-Grn">
                            <span className="py-1 my-1">quantity</span>
                            <div className="ms-auto d-flex flex-row">
                                <button className="Flora-Font rounded fs-5 btn" style={{backgroundColor: "#00544B", color: "#FFF5B5", border: "none"}} onClick={()=>{
                                    setQUANTITY(QUANTITY - 1);
                                }}>-</button>
                                <span className="p-1 m-1">{QUANTITY}</span>
                                <button className="Flora-Font rounded btn fs-5" style={{backgroundColor: "#00544B", color: "#FFF5B5", border: "none"}} onClick={()=>{
                                    setQUANTITY(QUANTITY + 1);
                                }}>+</button>
                            </div>
                        </div>
                        <div className="p-1 mx-2 rounded" style={{backgroundColor: "#FFE0E0"}}></div>
                        <div className="d-flex flex-row py-2 mx-2 Flora-Font Sacrd-Grn fs-5 text-uppercase">
                            <span>color</span>
                            <select id="color" className="ms-auto rounded btn Flora-Font text-uppercase" style={{backgroundColor: "#00544B", color: "#FFF5B5", border: "none"}}>
                                {
                                    ITEM.selectors[SELECT].color.map((ret)=>{
                                        return(
                                            <option key={ITEM.selectors[SELECT].color.indexOf(ret)} value={ret}>{ret}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="p-1 mx-2 rounded" style={{backgroundColor: "#FFE0E0"}}></div>
                        <div className="d-flex flex-row py-2 mx-2 Flora-Font Sacrd-Grn fs-5 text-uppercase">
                            <span>size</span>
                                <select id="color" className="ms-auto rounded btn Flora-Font text-uppercase" style={{backgroundColor: "#00544B", color: "#FFF5B5", border: "none"}} onChange={((e)=>{
                                const index = ITEM.selectors.findIndex(ret=>ret.size===e.currentTarget.value);
                                e.preventDefault()
                                setSELECT(index)
                            })}
                            >    
                                {
                                    ITEM.selectors.map((ret)=>{
                                        console.log(ret.size)
                                        return(
                                            <option key={ITEM.selectors.indexOf(ret)} 
                                            value={ret.size}>
                                                {ret.size}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="p-1 mx-2 rounded" style={{backgroundColor: "#FFE0E0"}}></div>
                        <div className="d-flex flex-row py-2 mx-2 Flora-Font Sacrd-Grn fs-5 text-uppercase">
                            <span>price</span>
                            <span className="ms-auto">${ITEM.selectors[SELECT].price}</span>
                        </div>
                        {
                            ITEM.details.description?
                            <div className="d-flex flex-column py-2 mx-2 Flora-Font Sacrd-Grn">                        
                                <div className="p-1 rounded" style={{backgroundColor: "#FFE0E0"}}></div>
                                <span className="fs-5 text-uppercase">description</span>
                                <p className="mx-2">
                                {ITEM.details.description}
                                </p>
                            </div>
                            :
                            null
                        }
                        <div className="p-1 mx-2 rounded" style={{backgroundColor: "#FFE0E0"}}></div>
                        {
                            ITEM.variable?
                                ITEM.variable.map((ret)=>{
                                    return(
                                        <div className="d-flex flex-column py-2 mx-2 Flora-Font Sacrd-Grn" key={ITEM.variable.indexOf(ret)}>
                                            <div className="d-flex flex-row">
                                                <span className="fs-5 text-uppercase py-1 my-1">{ret[0]}</span>
                                                <button className="ms-auto btn fs-5 Sacrd-Grn" type="button"
                                                onClick={(e)=>{
                                                    console.log(e.currentTarget.className)
                                                    if (e.currentTarget.className === "ms-auto btn fs-5 Sacrd-Grn"){
                                                        console.log('start')
                                                        e.currentTarget.children[0].className = 'fa-regular fa-circle-up'
                                                    } else if (e.currentTarget.className === "ms-auto btn fs-5 Sacrd-Grn collapsed"){
                                                        console.log('finish')
                                                        e.currentTarget.children[0].className = 'fa-regular fa-circle-down'
                                                    } else {
                                                        console.log('somewhere')
                                                    }
                                                }}
                                                data-bs-toggle="collapse" data-bs-target={`#collapses${ITEM.variable.indexOf(ret)}`} aria-expanded="false" aria-controls={`collapses${ITEM.variable.indexOf(ret)}`}>
                                                    <i className="fa-regular fa-circle-down"></i>
                                                </button>
                                            </div>
                                            <div id={`collapses${ITEM.variable.indexOf(ret)}`} className="collapse">
                                                <p>
                                                    {ret[1]}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                null
                        }
                        
                        <button className= "btn fs-1 Flora-Font text-uppercase Sacrd-Grn" onMouseOver = {(e) => {
                            e.currentTarget.className = `${e.currentTarget.className} text-decoration-underline`
                        }} onMouseOut =  {(e) => {
                            e.currentTarget.className = "btn fs-1 Flora-Font text-uppercase Sacrd-Grn" 
                        }} onClick={()=>{
                            if(ITEM.data){
                                const object = {
                                    name: ITEM.details.name,
                                    quantity: QUANTITY,
                                    images: ITEM.images,
                                    size: ITEM.selectors[SELECT].size,
                                    price: ITEM.selectors[SELECT].price,
                                    color: null,
                                    source: ITEM.source,
                                    fauna_db: ITEM,
                                    printful: ITEM.data[SELECT]
                                }
                                const color = document.getElementById('color').value;
                                object.color = color
                                console.log(ITEM.data[SELECT])
                                addCART(object)
                            } else {
                                const object = {
                                    name: ITEM.details.name,
                                    quantity: QUANTITY,
                                    images: ITEM.images, 
                                    size: ITEM.selectors[SELECT].size,
                                    price: ITEM.selectors[SELECT].price,
                                    color: null,
                                    source: ITEM.source,
                                    fauna_db: ITEM,
                                } 
                                const color = document.getElementById('color').value;
                                object.color = color
                                // console.log(ITEM.data[SELECT])
                                addCART(object)
                            }
                        }}>add to cart</button>
                    </div>
                    :
                    null
                }
                
            </div>
        </div> 
    </div>
    )
}

export default Item