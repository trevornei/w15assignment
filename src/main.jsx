import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// import Root from 'postcss/lib/root.js'

// const router = createBrowserRouter([
//       {
//             path: "/",
//             element: <Root />,
//       }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
      <BrowserRouter>
            <App />
      </BrowserRouter>
)
