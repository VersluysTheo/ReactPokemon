import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route , BrowserRouter} from "react-router-dom";
import NotFound from './assets/NotFound';
import Liste from './assets/component/Liste';
import FormApp from './assets/component/Form';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/liste" element={<Liste />} />
        <Route path="/addpokemon" element={<FormApp />} />
      </Routes>
    </BrowserRouter>

);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
