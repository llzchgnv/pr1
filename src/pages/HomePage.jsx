import { useState } from 'react'
import Header from '../components/Header/Header'
import Slider from '../components/Slider/Slider'
import Title from '../components/Title/Title'
import Products from '../components/Products/Products'


function HomePage() {
  return (
    <>

        <Slider />

        <Title dispaySerch="display: none" nameTitle="Все кроcсовки" />

        <Products />


    </>
  )
}



export default HomePage
