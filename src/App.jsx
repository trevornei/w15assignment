import { React, useState, useEffect } from 'react'
import Footer from './components/Footer'
import AppTitle from './components/AppTitle'
import MeatAndPotatoesCont from './components/UsersAndForm/MeatAndPotatoesCont'
import RandomImage from './RandomImage'
import KeyboardCat from './assets/Keyboard_cat.jpg'


export default function App() {


  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start">
      <AppTitle/>
      <RandomImage src={KeyboardCat}/>
      {/* 
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/>
      <RandomImage src={KeyboardCat}/> */}
      <MeatAndPotatoesCont/>
      <Footer/>
    </div>
  )
}


