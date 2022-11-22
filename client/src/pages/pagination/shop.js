import React, {useEffect, useState} from 'react' 
import axios from 'axios'

import Cart from './shop/components/cart';

import defIMG1 from '../../images/300px/1.png';
import defIMG2 from '../../images/300px/2.png';

const Shop2 = () => {  

    const itemPOST = async (item) => {
        try {
            axios({
                method: 'POST',
                url: `${window.location.origin}/api/shop/item/send`,
                data: item
            }
            ).then(res=>{
                console.log(res.data)
                window.location.replace(`${window.location.origin}/item`)
            }).catch(err=>console.log(err)) 
        } catch (err) {
            console.log(err)
        }
    },

    [FAUNA, setFAUNA] = useState([]),

    // This function retrieves all the shop items from the faunaDB via an api call to the backend server. 
    faunaFETCH = async () => {
        try{
            await axios.get(`${window.location.origin}/api/shop/collection`)
            .then((ret)=>{
                setFAUNA(ret.data)
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
        faunaFETCH();
    },[])

    // Shop items array, category - MERCHANDISE; where all the information related to MERCHANDISE will be held.
    const [PRINTFUL, setPRINTFUL] = useState([]),

    // This function retrieves all the shop items from the printful via an api call to the backend server. 
    printfulFETCH = async () => {
        try{
            axios.get(`${window.location.origin}/api/shop/printful/collection`)
            .then(async (res) =>{
                const data = await res.data,
                arr = [];
                data.forEach((ret)=>{
                    const object = {
                        category: 'merch',
                        images: {
                            cover: ret.sync_product.thumbnail_url,
                            hover:  ret.sync_variants[0].files[0].preview_url,
                            other: [null]
                        },
                        badge: null,
                        drop: null,
                        details: {
                            name: ret.sync_product.name,
                            location: null,
                            description: null
                        },
                        selectors: ret.sync_variants.map(res=>{
                            const size = [];

                            if (res.sku.split('_')[1] === undefined){
                                console.log(true)
                                size.push('O/S')
                            } else {
                                size.push(res.sku.split('_')[1])
                            }

                            return {
                                size: size[0],
                                color: ['O/C'],
                                price: res.retail_price,
                                stock: null
                            }
                        }),
                        source: 'printful',
                        variable: null,
                        data: ret.sync_variants
                    }
                    arr.push(object)
                })
                return setPRINTFUL(arr)
            })
            .catch(err=>console.log(err))     
        } catch (err) {
            console.log(err)
        }
    }

    // This calls the function that retrieves all the shop items from the faunaDB via an api call to the backend server. 
    useEffect(()=>{
        printfulFETCH()
    }, [setPRINTFUL])

    const [COLLECTION, setCOLLECTION] = useState([]);

    useEffect(()=>{
        setCOLLECTION(FAUNA.concat(PRINTFUL))
    }, [PRINTFUL, FAUNA, setCOLLECTION])

    return(
        <div className='d-flex flex-row flex-wrap justify-content-center'>
            <div className='col-12 d-flex'>
                <div className='ms-auto'>
                    <Cart/>
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
                                <div className='d-flex flex-row'>
                                    {/* img container */}
                                    <div className='d-flex flex-column w-50 position-relative'>
                                        <img 
                                            className='img-fluid'
                                            src={defIMG1} 
                                            onMouseOver={(e)=>{e.currentTarget.src=defIMG2}}
                                            onMouseOut={(e)=>{e.currentTarget.src=defIMG1}}
                                            alt="something"
                                        />
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
                                        <span className="Flora-Font Sacrd-Grn text-uppercase fs-5">
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
                                    onClick={()=>{
                                        itemPOST(ret)
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