import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/**
 * Optimized Theme Injection
 * We run this immediately to prevent "Flash of Unstyled Content" (FOUC).
 * Using 'classList.toggle' is more performant than 'add/remove' logic.
 */
const applyTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
  document.documentElement.classList.toggle('dark', isDark);
};

applyTheme();

/**
 * Root Rendering
 * React.StrictMode is great for development but can double-render 
 * some logic. This version ensures a clean mount.
 */
const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}