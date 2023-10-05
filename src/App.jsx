import { React } from 'react'
import MeatAndPotatoesCont from './components/UsersAndForm/MeatAndPotatoesCont'
import RandomImage from './RandomImage'
import KeyboardCat from './assets/Keyboard_cat.jpg'
import Nav from './components/UsersAndForm/Nav'
// import { Outlet, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


export default function App() {

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<Root />}>
  //       <Route index element={} />
  //     </Route>
  //   )
  // )

  // const Root = () => {
  //   return (
  //     <>
  //       <Link to="/"></Link>
  //       <Link to="/"></Link>
  //       <Link to="/"></Link>

  //       <div>
  //         <Outlet />
  //       </div>
  //     </>
  //   )
  // }

  return (
    <div className="w-full h-full flex flex-col items-center justify-start mx-3/4 px-12">
      <Nav/>
      <RandomImage src={KeyboardCat}/>
      <MeatAndPotatoesCont/>

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
      <RandomImage src={KeyboardCat}/> */}
    </div>
  )
}


