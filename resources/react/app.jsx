import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import MantramBase from './ui/MantramBase';
import MantramDetail from './ui/MantramDetail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/mantram/:mantramBaseId',
        element: <MantramBase />
    },
    {
        path: '/mantram/:mantramBaseId/:mantramId',
        element: <MantramDetail />
    }
])

ReactDOM.createRoot(document.getElementById('app')).render(
    <RouterProvider router={router} />
);
