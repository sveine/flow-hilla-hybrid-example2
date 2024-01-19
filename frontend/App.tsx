import {router} from "Frontend/routes.js";
import {RouterProvider} from "react-router-dom";


export default function App() {
    (window as any).vaadinCallable = () => {
        console.warn("vaadinCallable called");
    };
    return <RouterProvider router={router}/>;
}


