import React from 'react';
import ReactDOM from 'react-dom/client';
import './App/Layout/styles.css';
import reportWebVitals from './reportWebVitals';
import { StoreContext, store } from './App/Stores/store';
import { router } from './App/Router/Routes';
import { RouterProvider } from "react-router-dom"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <StoreContext.Provider value={store}>
      <RouterProvider router={router}/>
    </StoreContext.Provider>
  // </React.StrictMode>
);
reportWebVitals();
