import React from 'react'
import './Hero.scss'

const Hero = ({id}) => {
  return (
    <>
         <section className={`hero hero${id}`} id={`hero${id}`}>
          <div className="container">
            <div className="Hero__wrapper">

              

            </div>
          </div>
        </section>
    </>
  )
}

export default Hero