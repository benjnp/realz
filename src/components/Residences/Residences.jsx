import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import './Residences.css'
import data from  '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'

export function SwiperButtons() {
    const swipeButton = useSwiper();

    return (
        <div className="flexCenter r-buttons">
            <button onClick={() => swipeButton.slidePrev()}>&lt;</button>
            <button onClick={() => swipeButton.slideNext()}>&gt;</button>
        </div>
    )
    
}

export default function Residences() {

  return (
    <div className="r-wrapper">
        <div className="paddings fullWidth r-container">
            <div className="flexColStart r-head">
                <span className="orangeText">Best Choices</span>
                <span className="primaryText">Popular Residences</span>
            </div>
            <Swiper {...sliderSettings}>
                <SwiperButtons />
                {
                    data.map((card,i) => (
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card">
                                <img src={card.image} alt={card.name} />
                                <span className="secondaryText r-price">
                                    <span className="dollar-sign">$</span>
                                    <span>{card.price}</span>
                                </span>
                                <span className="primaryText">{card.name}</span>
                                <span className="secondaryText">{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}
