import React, { lazy,Suspense } from 'react';
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

const Grocery=lazy(()=>import("./components/Grocery"));



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
                path:"/grocery",
                element:<Suspense fallback={<>This will be shown till the comp loads</>}><Grocery/></Suspense>
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
