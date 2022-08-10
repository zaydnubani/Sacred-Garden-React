import React from 'react';

import Chacruna from '../images/Partner Logos/Chacruna-logo-original.png'
import GrowMedicine from '../images/Partner Logos/GrowMedicine_High Res Logo.png'
import ICEERS from '../images/Partner Logos/ICEERS1.png'
import PsychedelicsToday from '../images/Partner Logos/Psychedlics Today Logo Black Words .png'
import SistersPsychedelics from '../images/Partner Logos/Sisters in Psychedelics.png'
import TucsonHerpSociety from '../images/Partner Logos/Tucson Herpetological Society_hires.png'

const Partners = () => {
    return(
        <div className="col-12 d-flex flex-row flex-wrap align-items-center justify-content-evenly">
            <a className="d-flex align-items-center justify-content-center w-25 m-3" href="https://chacruna.net/"><img className="img-fluid" src={Chacruna} alt=""/></a>
            <a className="d-flex align-items-center justify-content-center w-25 m-3" href="https://growmedicine.com/"><img className="img-fluid" src={GrowMedicine} alt=""/></a>
            <a className="d-flex align-items-center justify-content-center w-25 m-3" href="https://www.iceers.org/"><img className="img-fluid" src={ICEERS} alt=""/></a>
            <a className="d-flex align-items-center justify-content-center w-25 m-3" href="https://psychedelicstoday.com/"><img className="img-fluid" src={PsychedelicsToday} alt=""/></a>
            <a className="d-flex align-items-center justify-content-center w-25 m-3" href="https://sistersinpsychedelics.org/"><img className="img-fluid" src={SistersPsychedelics} alt=""/></a>
            <a className="d-flex align-items-center justify-content-center w-25 m-3" href="https://tucsonherpsociety.org/"><img className="img-fluid" src={TucsonHerpSociety} alt=""/></a>
        </div>
    )
}

export default Partners