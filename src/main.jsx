import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './layout/Layout.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Layout>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Layout>
)
