import React from 'react';
import ReactDOM, { render }  from 'react-dom/client';
import App from './components/App';
import './styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from './store'
import { Provider } from 'react-redux'

// ReactDOM.render(<App />, document.querySelector('#root'));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider const store = { store }>
                    <App />
                </Provider>
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