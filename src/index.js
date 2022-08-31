import React from 'react';
import ReactDOM, { render }  from 'react-dom/client';
import App from './components/App';
import './styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ReactDOM.render(<App />, document.querySelector('#root'));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        <React.StrictMode>
            <BrowserRouter>
                
                    <App />
                
            </BrowserRouter>
        </React.StrictMode>

);
// render(
//     <React.StrictMode>
//         <BrowserRouter>
            
//                 <App />
            
//         </BrowserRouter>
//     </React.StrictMode>
    
    
//     ,
//     document.getElementById('root')
// )