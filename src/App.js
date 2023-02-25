import { createBrowserRouter, RouterProvider } from 'react';
import HomePage from './pages/Home.page';
import Products from './pages/Products.page';
import RootLayout from './pages/Root'

import './App.css';
// https://example.com/

const router = createBrowserRouter([
  { path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <Products /> },
    ],
  },
])


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router}/>
      </header>
    </div>
  );
}

export default App;
