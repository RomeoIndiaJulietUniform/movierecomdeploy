import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SearchBar from './Components/SearchBar.jsx'
import "./index.css"
import Footer from './Components/Footer.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='hotfix'>
    <App />
    <SearchBar/>
    <Footer/>
    </div>
  </React.StrictMode>,
)
