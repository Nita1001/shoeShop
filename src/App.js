
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home.page';
import Products from './pages/Products.page';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error.page';
import ProductDetail from './pages/ProductDetail';
import './App.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:productId', element: <ProductDetail /> }
    ],
  },
])

function App() {
 

  return (
    <RouterProvider router={router} />

  );
}

export default App;
