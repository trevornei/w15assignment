 import { React } from 'react'
import MeatAndPotatoesCont from './components/UsersAndForm/MeatAndPotatoesCont'
import RandomImage from './RandomImage'
import KeyboardCat from './assets/Keyboard_cat.jpg'
import Nav from './components/UsersAndForm/Nav'
import { Routes, Route, Outlet, Link } from "react-router-dom"
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import NoMatch from './NoMatch'

export default function App() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start mx-3/4 px-12">
      
      <Nav />
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MeatAndPotatoesCont />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      
      <RandomImage src={KeyboardCat}/>
    </div>
  )
}

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}


