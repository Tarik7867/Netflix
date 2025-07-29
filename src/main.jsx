import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {MainRoutes} from './MainRoutes'
import './index.css'
import {  ThemeProvider } from './ThemeProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <MainRoutes />
    </ThemeProvider>
  </StrictMode>,
)
