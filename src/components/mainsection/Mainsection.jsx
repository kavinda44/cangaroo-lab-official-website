import React from 'react'
import "./Mainsection.css"
import ParticleBg from '../ParticleBg'
import CountUp from "react-countup";


const Mainsection = () => {

    

  return (
    
    <section className="mainwrapper">
        <div className='particles-container' >
            <ParticleBg/>
          </div>
        <div className="paddings innerWidth flexCenter main-container">
        
          
          <div className="main-left">
          
            <div className="image-container-left">
                  <img src="./left.png" alt="cdcc" />
              </div>
              <button className='flexColStart secondaryText flexhero-des button button-talk'> 
                <a href="">Talk With Us</a>
            </button>

            {/* <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
                </span>
                <span className="secondaryText">Premium Product</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
                </span>
                <span className="secondaryText">Happy Customer</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp end={28} /> <span>+</span>
                </span>
                <span className="secondaryText">Awards Winning</span>
              </div>
          </div> */}
        
            



          </div>
          <div className="flexCenter main-right">
            <div className="image-container">
                <img src="./kan2.png" alt="cdcc" />
            </div>
          </div>
            
            </div>

            
    </section>
    
  )
}

export default Mainsection