import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Hello from './Hello';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hello greeting={"Hello React Ninja"} />
  </React.StrictMode>,
)
