// importing font
import '@fontsource/orbitron'; // Defaults to 400
import '@fontsource/orbitron/500.css'; // Optional weights
import '@fontsource/orbitron/700.css';

import { StrictMode } from 'react'
import { createRoot }from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter, 
  RouterProvider, 
  HashRouter, createRoutesFromElements, 
  Route
} from 'react-router-dom'
  
// Components
import App from './App.jsx'
import Home from './pages/home.jsx'
import About from './pages/aboutMe.jsx'
import Contact from './pages/contactMe.jsx'
import Projects from './pages/projects.jsx'
import Video from './pages/video.jsx'

// React Router
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />}>
//         <Route path="" element={<Home/>}/>
//         <Route path="aboutMe" element={<About/>}/>
//         <Route path="contactMe" element={<Contact/>}/>
//         <Route path="projects" element={<Projects/>}/>
//         <Route path="video" element={<Video/>}/>
//     </Route>
//   )
// )

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'aboutMe', element: <About /> },
      { path: 'contactMe', element: <Contact /> },
      { path: 'projects', element: <Projects /> },
      { path: 'video', element: <Video /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>
)
