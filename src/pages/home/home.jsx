import React from 'react'
import NavBar from '../../components/navbar/navbar'
import Header from '../../components/header/header'
import SliderSection from '../../components/slider/slidersect'
import BottomSection from '../../components/bottomsect/bottomsect'
import Footer from '../../components/footer/footer'

const home = () => {

  return (<>
    <NavBar/>
    <Header/>
    <SliderSection/>
    <BottomSection/>
    <Footer/>
  </>)
}

export default home