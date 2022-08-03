import React from 'react';

import Chacruna from '../images/Partner Logos/Chacruna-logo-original.png'
import GrowMedicine from '../images/Partner Logos/GrowMedicine_High Res Logo.png'
import ICEERS from '../images/Partner Logos/ICEERS1.png'
import PsychedelicsToday from '../images/Partner Logos/Psychedlics Today Logo Black Words .png'
import SistersPsychedelics from '../images/Partner Logos/Sisters in Psychedelics.png'
import TucsonHerpSociety from '../images/Partner Logos/Tucson Herpetological Society_hires.png'

const Partners = () => {
    return(
        <div className="container direct-row wrap align-center space-evenly w-90 h-auto">
            <a className="container align-center justify-center h-auto p-1 partner-link" href="https://chacruna.net/"><img className="img partner-icon" src={Chacruna} alt=""/></a>
            <a className="container align-center justify-center h-auto p-1 partner-link" href="https://growmedicine.com/"><img className="img partner-icon" src={GrowMedicine} alt=""/></a>
            <a className="container align-center justify-center h-auto p-1 partner-link" href="https://www.iceers.org/"><img className="img partner-icon" src={ICEERS} alt=""/></a>
            <a className="container align-center justify-center h-auto p-1 partner-link" href="https://psychedelicstoday.com/"><img className="img partner-icon" src={PsychedelicsToday} alt=""/></a>
            <a className="container align-center justify-center h-auto p-1 partner-link" href="https://sistersinpsychedelics.org/"><img className="img partner-icon" src={SistersPsychedelics} alt=""/></a>
            <a className="container align-center justify-center h-auto p-1 partner-link" href="https://tucsonherpsociety.org/"><img className="img partner-icon" src={TucsonHerpSociety} alt=""/></a>
        </div>
    )
}

export default Partners