import React from 'react'
import ReactDOM from 'react-dom/client';
import TaskProvider from './TaskProvider.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskProvider> {/* Asegúrate de envolver tu App con TaskProvider */}
      <App tab="home" />
    </TaskProvider>
  </React.StrictMode>
)