import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

export default function Contact() {
  return (
    <div className='c-wrapper'>
        <div className="paddings fullWidth flexCenter c-container">
            <div className="flexColStart c-left">
                <span className='orangeText'>Contact Us</span>
                <span className='primaryText'>Feel Free To Reach Out</span>
                <span className='secondaryText'>We always ready to help by providing the best services for you.</span>
                <div className="contact-row">
                    {/* <p>test</p> */}
                    <div className="contact-modes">
                        {/* <div className="flexStart row"> */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Call</span>
                                        <span className="secondaryText">+63 917 1234</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>
                            </div>
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Chat</span>
                                        <span className="secondaryText">+63 917 1234</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>
                            </div>
                        {/* </div> */}

                        {/* <div className="flexStart row"> */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Video Call</span>
                                        <span className="secondaryText">+63 917 1234</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Video Call Now</div>
                            </div>
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Message</span>
                                        <span className="secondaryText">+63 917 1234</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Message Now</div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
                
            </div>
            <div className="c-right flexColCenter">
                <div className="image-container">
                    <img src="./contact.jpg" alt="Contact Image" />
                </div>
            </div>
        </div>
    </div>
  )
}
