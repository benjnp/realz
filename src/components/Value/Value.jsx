import React from 'react';
import { useState } from "react";
import { 
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion'

export default function Value() {
  return (
    <div className="v-wrapper">
        <div className="paddings fullWidth flexCenter v-container">
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="house" />
                </div>
            </div>
            <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give To You</span>
                <span className='secondaryText'>We always ready to help by providing the best services for you.</span>
                <span className='secondaryText'>We believe a good place to live can make your life better.</span>
                <Accordion
                    className="a-container"
                    allowMultipleExpanded={false}
                    preExpanded={[0]}
                >
                 {
                    data.map((item, i) => {
                        const [accordionClass, setAccordionClass] = useState("")
                        return (
                            <AccordionItem className={`accordion-item ${accordionClass}`} key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className="flexCenter accordion-button">
                                        <AccordionItemState>
                                            {({expanded}) => expanded ? setAccordionClass("accordion-expanded") : setAccordionClass("accordion-collapsed")}
                                        </AccordionItemState>
                                        <div className="flexStart icon">{item.icon}</div>
                                        <span className="accordion-primary primaryText ">{item.heading}</span>
                                        <div className="flexCenter icon"><MdOutlineArrowDropDown size={20}/></div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="secondaryText">{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    })
                 }   
                </Accordion>
            </div>
        </div>
    </div>
  )
}
