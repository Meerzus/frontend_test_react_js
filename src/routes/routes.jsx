import {createBrowserRouter} from 'react-router-dom';
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <App />,
        children: [
            {
                path: '/',
                element: <HomePage/>,
            },
        ],
    },
], {
    future: {
        v7_partialHydration: true,
        v7_fetcherPersist: true,
        v7_startTransition: true,
        v7_relativeSplatPath: true,
        v7_normalizeFormMethod: true,
        v7_skipActionErrorRevalidation: true,
    },
});