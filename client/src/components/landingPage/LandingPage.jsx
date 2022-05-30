import React from 'react';
// import React, { useState, useEffect, useRef } from 'react';
import imageOne from './assets/Chalten.jpg'
import imageTwo from './assets/MachuPicchu.jpg';
import imageThree from './assets/MontSaintFrance.jpg';
import imageFour from './assets/NewYork.jpg';
import style from './assets/LandingPage.module.css'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import logo from './assets/travel-svgrepo-com.svg'



const slideImages = [imageOne, imageTwo, imageThree, imageFour];

export default function LandingPage() {

    const properties = {
        duration: 5000,
        transitionDuration: 1000,
        infinite: true,
        indicators: false,
        arrows: false,
        onChange: (oldIndex, newIndex) => { }
    }

    return (
        <div>
            <h1 className={style.h1}>Henry</h1>
            <h2 className={style.h2}>Travel</h2>
            <a href="/home"><img className={style.logo} src={logo} alt='HenryTravel' /></a>
            <div className={style.container}>
                <Fade {...properties}>
                    <div className={style.slide}>
                        <div className={style.image}>
                            <img alt='' src={slideImages[0]} />
                            <span className={style.location}><h3 className={style.textLocation}>Chalten, Santa Cruz, Argentina</h3></span>
                        </div>
                    </div>
                    <div className={style.slide}>
                        <div className={style.image}>
                            <img alt='' src={slideImages[1]} />
                            <span className={style.location}><h3 className={style.textLocation}>Machu Picchu, Urubamba, Peru</h3></span>
                        </div>
                    </div>
                    <div className={style.slide}>
                        <div className={style.image}>
                            <img alt='' src={slideImages[2]} />
                            <span className={style.location}><h3 className={style.textLocation}>Monte Saint-Michel, Normandía, Francia</h3></span>
                        </div>
                    </div>
                    <div className={style.slide}>
                        <div className={style.image}>
                            <img alt='' src={slideImages[3]} />
                            <span className={style.location}><h3 className={style.textLocation}>New York, Estados Unidos</h3></span>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}


