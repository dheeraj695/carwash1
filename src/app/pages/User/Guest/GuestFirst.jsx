import React from 'react'
import Guest1 from '../Component/Backimag'
import Question from '../Component/Question'
import AboutGuest from '../Component/AboustGuest'
import OurService from '../Component/OurService'
import OurServiceCard_car from '../Component/OurServiceCarCard'
import Cards from '../Component/RotinCard'
import Reviwes from '../Component/Reviwes'

const GuestFirst = () => {
  return (
    <div>
        <Guest1/>
        <AboutGuest/>
        <OurService/>
        <OurServiceCard_car/>
       
        <Cards/>
          
         <Reviwes/>
        <Question/>
    </div>
  )
}

export default GuestFirst