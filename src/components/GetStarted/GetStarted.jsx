import React from 'react'
import './GetStarted.css'

export default function GetStarted() {
  return (
    <div className='g-wrapper'>
        <div className="paddings fullWidth g-container">
            <div className="flexColCenter inner-container">
                <span className="get-started-primary">Get Started with Realz</span>
                <span className="get-started-secondary">Subscribe and find super attractive price quotes</span>
                <span className="get-started-secondary">Find your residence soon</span>
                <button className='button'>
                    <a href="mailto:benjnp@gmail.com">Get Started</a>
                </button>
            </div>
        </div>
    </div>
  )
}
