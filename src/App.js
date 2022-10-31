import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import AddUser from './components/AddUser';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    loader: () => {
      return fetch('http://localhost:5000/users');
    }
  },
  {
    path: '/users/add',
    element: <AddUser></AddUser>
  }
])



function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
