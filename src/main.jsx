import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'flowbite';
import App from './App.jsx'
import React from 'react';
import { RouterProvider } from 'react-router';
import router from './router.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={router} />
  // </StrictMode>,
)
