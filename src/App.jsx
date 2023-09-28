import { React } from 'react'
import MeatAndPotatoesCont from './components/UsersAndForm/MeatAndPotatoesCont'
import RandomImage from './RandomImage'
import KeyboardCat from './assets/Keyboard_cat.jpg'


export default function App() {


  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start mx-3/4">
      <div className="flex flex-col items-center justify-center w-full h-24 bg-cyan-400 py-8 mb-20">
        <h1 className="text-3xl font-extrabold">
            Welcome to the Top Secret Users Data Base
        </h1>
        <h3 className="text-sm font-bold">
            *Please don't alter this data for the love of god or else I am going to loose my job.
        </h3>
      </div>
      {/* <RandomImage src={KeyboardCat}/> */}
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
    </div>
  )
}


