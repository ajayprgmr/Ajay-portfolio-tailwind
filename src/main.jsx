import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { RouterProvider, createBrowserRouter } from 'react-router'
// import About from './components/About.jsx'
// import Home from './components/Home.jsx'
// import navbar from './components/navbar.jsx'

// const routes = createBrowserRouter([
//   {
//     path: '/about',
//     element: '<Home/>',
//     children:[
//       {
//         index:true,
//         element:<
//       }
//     ]
//   },
// ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
