
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home.page';
import Products from './pages/Products.page';
import EditItemForm from './pages/EditItemForm';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error.page';
import ProductDetail from './pages/ProductDetail';
import AddItemForm from './pages/AddItemForm';
import RemoveItemForm from './pages/RemoveItemForm';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:productId', element: <ProductDetail /> },
      { path: '/editItemForm', element: <EditItemForm /> },
      { path: '/editItemForm/addItemForm', element: <AddItemForm /> },
      { path: '/editItemForm/removeItemForm', element: <RemoveItemForm /> }
    ],
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
