import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import { q, client } from "../config/fauna.js";


const Faq = () => {

    const [faqAbout, setAbout] = useState([])
    const [faqWeb3, setWeb3] = useState([])
    
    useEffect(() => {

        // About SACRΞD GARDΞN
        client.query(q.Paginate(q.Match(q.Index('FAQ_CATEGORY'), 'About SACRΞD GARDΞN')))
        .then((ret) => {
            ret.data.map( async (res) => {
                await client.query(q.Get(q.Ref(q.Collection('FAQ'), res.value.id))).then((ref) => {
                    setAbout(old=>[...old, ref.data])
                })
                return 
            })
        }).catch((err) => console.error(
            'Error: [%s] %s: %s',
            err.name,
            err.message,
            err.errors()[0].description,
        ))

        // Web3 101
        client.query(q.Paginate(q.Match(q.Index('FAQ_CATEGORY'), 'Web3 101')))
        .then((ret) => {
            ret.data.map( async (res) => {
                await client.query(q.Get(q.Ref(q.Collection('FAQ'), res.value.id))).then((ref) => {
                    setWeb3(old=>[...old, ref.data])
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
        <div className='col-12'>
            <div>
                <span className="Flora-Font fs-1" style={{color: '#00544B'}}>About SACRΞD GARDΞN</span>
            {
                faqAbout.map((res)=>{
                    return(
                        <div className="d-flex flex-column" key={faqAbout.indexOf(res)}>
                            <div className='d-flex flex-row p-3 m-3 rounded' style={{backgroundColor: '#00544B'}}>
                                <span className='Flora-Font fs-1' style={{color: '#FFAC80'}}>{res.faq.quest}</span>
                                <button className="btn fs-1 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target={`#faq${faqAbout.indexOf(res)}`} aria-expanded="false" aria-controls={`faq${faqAbout.indexOf(res)}`} style={{color: '#FFAC80'}}>
                                    <FontAwesomeIcon icon={faPlus}/>
                                </button>
                            </div>
                            <div className="collapse" id={`faq${faqAbout.indexOf(res)}`}>
                                <div className="card card-body Flora-Font fs-4" style={{color: '#00544B', backgroundColor: '#FFF5B5'}}>
                                    <span className="py-1">
                                        {res.faq.answ}
                                    </span>
                                    {
                                        res.links?
                                        <div className="d-flex flex-column p-2 rounded" style={{backgroundColor: '#43D3EE'}}>
                                            <span className="">Useful Resources:</span>
                                            <div className="d-flex flex-row">
                                                {
                                                    res.links.map((ret)=>{
                                                        return(
                                                            <a key={res.links.indexOf(ret)} className='btn fs-5' href={ret.src} style={{backgroundColor: '#04F2AF'}}>
                                                                <span className="Flora-Font" style={{color:'#00544B'}}>{ret.name}</span>
                                                            </a>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        :
                                        null
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <div>
                <span className="Flora-Font fs-1" style={{color: '#00544B'}}>Web3 101</span>
            {
                faqWeb3.map((res)=>{
                    return(
                        <div className="d-flex flex-column" key={faqWeb3.indexOf(res)}>
                            <div className='d-flex flex-row p-3 m-3 rounded' style={{backgroundColor: '#00544B'}}>
                                <span className='Flora-Font fs-1' style={{color: '#FFAC80'}}>{res.faq.quest}</span>
                                <button className="btn fs-1 ms-auto" type="button" data-bs-toggle="collapse" data-bs-target={`#faqWeb3${faqWeb3.indexOf(res)}`} aria-expanded="false" aria-controls={`faqWeb3${faqWeb3.indexOf(res)}`} style={{color: '#FFAC80'}}>
                                    <FontAwesomeIcon icon={faPlus}/>
                                </button>
                            </div>
                            <div className="collapse" id={`faqWeb3${faqWeb3.indexOf(res)}`}>
                                <div className="card card-body Flora-Font fs-4" style={{color: '#00544B', backgroundColor: '#FFF5B5'}}>
                                    <span className="py-1">
                                        {res.faq.answ}
                                    </span>
                                    {
                                        res.links?
                                        <div className="d-flex flex-column p-2 rounded" style={{backgroundColor: '#43D3EE'}}>
                                            <span className="">Useful Resources:</span>
                                            <div className="d-flex flex-row flex-wrap">
                                                {
                                                    res.links.map((ret)=>{
                                                        return(
                                                            <a key={res.links.indexOf(ret)} className='btn fs-5 mx-1' href={ret.src} style={{backgroundColor: '#04F2AF'}}>
                                                                <span className="Flora-Font" style={{color:'#00544B'}}>{ret.name}</span>
                                                            </a>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        :
                                        null
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
};

export default Faq;