import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter ,Router,RouterProvider} from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ErrorElement from './components/ErrorElement';
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Body/>, 
            },
            {
                path:"/about",
                element:<AboutUs/>,
                
            },
            {
                path:"/contact",
                element:<ContactUs/>,
                 
            },
            {
                path:"/restaurants/:resId/:lat/:long",
                element:<RestaurantMenu />
            }
        ],
        errorElement:<ErrorElement/>,
    },
    
    {
        path:"*",
        element:<ErrorElement/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={appRouter}/>
);

reportWebVitals();
