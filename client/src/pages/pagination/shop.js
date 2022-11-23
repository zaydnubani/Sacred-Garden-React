import React, {useEffect, useState} from 'react' 
import axios from 'axios'

import defIMG1 from '../../images/300px/1.png';

const Shop2 = () => {  

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
            axios({
                method: 'POST',
                url: `${window.location.origin}/api/shop/cart/send`,
                data: cart
            })
            .then((res)=>{
                console.log(res.data)
                // return window.location.replace(`${window.location.origin}/shop`)
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
    },

    itemPOST = async (item) => {
        try {
            axios({
                method: 'POST',
                url: `${window.location.origin}/api/shop/item/send`,
                data: item
            }
            ).then(res=>{
                console.log(res.data)
            }).catch(err=>console.log(err)) 
        } catch (err) {
            console.log(err)
        }
    },
    
    [COLLECTION, setCOLLECTION] = useState([]),

    // This function retrieves all the shop items from the faunaDB via an api call to the backend server. 
    collectionFETCH = async () => {
        try{
            await axios.get(`${window.location.origin}/api/shop/collection`)
            .then(async (fauna_res)=>{
                const fauna = await fauna_res.data.filter(item=>item.category.toLowerCase()!=='merch')
                await axios.get(`${window.location.origin}/api/shop/printful/collection`)
                .then(async(print_res) =>{
                    const printful = []
                    await print_res.data.forEach((print_ret)=>{
                        const object = {
                            selectors: print_ret.sync_variants.map(variant=>{
                                const size = [];
    
                                if (variant.sku.split('_')[1] === undefined){
                                    console.log(true)
                                    size.push('O/S')
                                } else {
                                    size.push(variant.sku.split('_')[1])
                                }
    
                                return {
                                    size: size[0],
                                    color: ['O/C'],
                                    price: variant.retail_price,
                                    stock: null
                                }
                            }),
                            source: 'printful',
                            variable: null,
                            data: print_ret.sync_variants
                        };
                        fauna_res.data.forEach((fauna_ret)=>{
                            if(fauna_ret.details.name.toLowerCase() === print_ret.sync_product.name.toLowerCase()){
                                object.category = fauna_ret.category
                                object.images = fauna_ret.images
                                object.details = fauna_ret.details
                                printful.push(object)
                            }
                        })
                    })
                    return setCOLLECTION(printful.concat(fauna))
                })
                .catch(err=>console.log(err))  
            })
            .catch((err)=>{
                console.log(err)
            })
        } catch (err) {
            console.log(err)
        }
    }

    // This calls the function that retrieves all the shop items from the faunaDB via an api call to the backend server. 
    useEffect(()=>{
        collectionFETCH();
    },[])

    return(
        <div className='d-flex flex-row flex-wrap justify-content-center'>
            <div className='col-12 d-flex'>
                <div className='ms-auto'>
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
                                                    <img className='img-fluid mt-1' src={ret.images.cover} alt="this is something" style={{height:"50px", width:"50px"}}/>
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
                                    return window.location.replace(`${window.location.origin}/checkout`)
                                }} > Proceed to Checkout</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div 
                className='px-4 col-12 col-sm-6 col-lg-4 d-flex flex-row order-1'
                style={{backgroundColor: '#FFF5B5', borderRadius: '10%', border: 'solid 2px #FFE0E0'}} 
            >
                <div className='d-flex flex-column w-50 px-1 py-2 justify-content-between'>
                    <span className='Flora-Font text-uppercase fs-1 Sacrd-Grn'>grow</span>
                    <img 
                    src={defIMG1} 
                    className='img-fluid'
                    alt='default placeholder'
                    style={{visibility: 'hidden'}}
                    />
                </div>
                <div className='d-flex flex-column w-50 py-3 px-1 text-end justify-content-end'>
                    <span 
                        className='Flora-Font text-lowercase Sacrd-Grn'
                        style={{fontSize: 'small'}}
                    >sacred plants</span>
                    <span 
                        className='Flora-Font text-lowercase Sacrd-Grn'
                        style={{fontSize: 'small'}}
                    >tools for growth</span>
                    <span 
                        className='Flora-Font text-lowercase Sacrd-Grn'
                        style={{fontSize: 'small'}}
                    >small farms</span>
                </div>
            </div>

            <div 
                className='px-4 col-12 col-sm-6 col-lg-4 d-flex flex-row order-2'
                style={{backgroundColor: '#E8FFFB', borderRadius: '10%', border: 'solid 2px #FFE0E0'}} 
            >
                <div className='d-flex flex-column w-50 px-1 py-2 justify-content-between'>
                    <span className='Flora-Font text-uppercase fs-1 Sacrd-Grn'>MERCH</span>
                    <img 
                    src={defIMG1} 
                    className='img-fluid'
                    alt='default placeholder'
                    style={{visibility: 'hidden'}}
                    />
                </div>
                <div className='d-flex flex-column w-50 py-3 px-1 text-end justify-content-end'>
                    <span 
                        className='Flora-Font text-lowercase Sacrd-Grn'
                        style={{fontSize: 'small'}}
                    >chill vibes</span>
                    <span 
                        className='Flora-Font text-lowercase Sacrd-Grn'
                        style={{fontSize: 'small'}}
                    >low key</span>
                    <span 
                        className='Flora-Font text-lowercase Sacrd-Grn'
                        style={{fontSize: 'small'}}
                    >designer style</span>
                </div>
            </div>

            <div 
                className='px-4 col-12 col-sm-6 col-lg-4 d-flex flex-row order-3'
                style={{backgroundColor: '#FFF5B5', borderRadius: '10%', border: 'solid 2px #FFE0E0'}} 
            >
                <div className='d-flex flex-column w-50 px-1 py-2 justify-content-between'>
                    <span className='Flora-Font text-uppercase fs-1 Sacrd-Grn'>COLLABS</span>
                    <img 
                    src={defIMG1} 
                    className='img-fluid'
                    alt='default placeholder'
                    style={{visibility: 'hidden'}}
                    />
                </div>
                <div className='d-flex flex-column w-50 py-3 px-1 text-end justify-content-end'>
                    <span 
                        className='Flora-Font text-lowercase Sacrd-Grn'
                        style={{fontSize: 'small'}}
                    >products we love</span>
                    <span 
                        className='Flora-Font text-lowercase Sacrd-Grn'
                        style={{fontSize: 'small'}}
                    >creators we believe in</span>
                    <span 
                        className='Flora-Font text-lowercase Sacrd-Grn'
                        style={{fontSize: 'small'}}
                    >partners in our mission</span>
                </div>
            </div>
            {
                COLLECTION.map(ret=>{
                    return(
                        // Container, or card body.
                        <div 
                            className={
                                ret.category === 'merch'?
                                    'd-flex flex-column position-relative px-4 col-12 col-sm-6 col-lg-4 order-2'
                                    :
                                    ret.category === 'plants'?
                                        'd-flex flex-column position-relative px-4 col-12 col-sm-6 col-lg-4 order-1'
                                        :
                                        'd-flex flex-column position-relative px-4 col-12 col-sm-6 col-lg-3 order-3'
                            }
                            id='plant' 
                            style={
                                ret.category === 'merch'?
                                    {backgroundColor: '#E8FFFB', borderRadius: '10%', border: 'solid 2px #FFE0E0'}
                                    :
                                    {backgroundColor: '#FFF5B5', borderRadius: '10%', border: 'solid 2px #FFE0E0'}
                            } 
                            key={COLLECTION.indexOf(ret)}
                            // changes the position of the card edge decoration on hover.
                            onMouseOver={(e)=>{
                                e.currentTarget.children[0].className='rounded rounded-circle position-absolute bottom-0 start-0 p-3';
                                e.currentTarget.children[0].children[0].className='rounded rounded-circle position-absolute top-0 end-0 p-2';
                            }}
                            onMouseOut={(e)=>{
                                e.currentTarget.children[0].className='rounded rounded-circle position-absolute top-0 start-0 p-3'
                                e.currentTarget.children[0].children[0].className='rounded rounded-circle position-absolute bottom-0 end-0 p-2'
                            }}
                        >   
                                {/*card edge decoration  */}
                            <div 
                                className='rounded rounded-circle position-absolute position-relative top-0 start-0 p-3'
                                style={{backgroundColor:'#FFE0E0', zIndex:1}}
                            >
                                {/* inner card edge decoration */}
                                <div
                                    className='rounded rounded-circle position-absolute bottom-0 end-0 p-2'
                                    style={{backgroundColor:'#43D3EE'}}
                                >
                                </div>
                            </div>

                            {/* card header */}
                            <div className='d-flex flex-column'>
                                <div className='d-flex flex-row mt-1'>
                                    {/* img container */}
                                    <div className='d-flex flex-column w-50 position-relative'>
                                        {
                                            ret.images.hover?
                                            <img 
                                                className='rounded img-fluid'
                                                src={ret.images.cover}
                                                onMouseOver={(e)=>{e.currentTarget.src=ret.images.hover}}
                                                onMouseOut={(e)=>{e.currentTarget.src=ret.images.cover}}
                                                alt="something"
                                                style={{height:"200px", width:"200px"}}
                                            />
                                            :
                                            <img className="rounded img-fluid" src={ret.images.cover} style={{height:"200px", width:"200px"}}/>
                                        }
                                        {/* absolute positioned badge */}
                                        <div 
                                            className='rounded position-absolute top-50 px-1' 
                                            style={{backgroundColor: '#43D3EE', transform: 'rotate(-90deg)', left: '-45px'}}
                                        >
                                            <span 
                                                className="Flora-Font" 
                                                style={{color: '#FFAC80'}}
                                            >
                                                {ret.badge}
                                            </span>
                                        </div>
                                    </div>
                                    {/* source label container */}
                                    <div className="d-flex w-50 align-items-end Flora-Font Sacrd-Grn text-uppercase fs-5 Sacrd-Grn">
                                        <span className="Flora-Font Sacrd-Grn text-uppercase fs-5 mx-1">
                                        {ret.source}
                                        </span>
                                    </div>
                                </div> 
                                {/* dividing line */}
                                <div className="p-1 rounded" style={{backgroundColor: '#FFE0E0'}}></div>
                            </div>
                            <div className='d-flex flex-column py-2 Sacrd-Grn'>
                                {/* item name and price container */}
                                <div className='d-flex flex-row'>
                                    <span className='text-uppercase Flora-Font'>{ret.details.name}</span>
                                    <span className='Flora-Font ms-auto'>${ret.selectors[0].price}</span>
                                </div>
                                {/* add to cart action button */}
                                <button
                                    onMouseOver={(e)=>{e.currentTarget.className='ms-auto text-uppercase text-decoration-none Flora-Font text-decoration-underline Sacrd-Grn'}}
                                    onMouseOut={(e)=>{e.currentTarget.className='ms-auto text-uppercase text-decoration-none Flora-Font Sacrd-Grn'}} 
                                    className='ms-auto text-uppercase text-decoration-none Flora-Font Sacrd-Grn'
                                    style={{border: 'none', background: 'none'}}
                                    onClick={async ()=>{
                                        await itemPOST(ret)
                                        await cartPOST(CART)
                                        return window.location.replace(`${window.location.origin}/item`)
                                    }}
                                >
                                    add to cart
                                </button> 
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Shop2