import './App.css';
import Header from '../src/component/Shared/Header/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './component/Home/Home';
import Courses from './component/Courses/Courses';
import FAQ from './component/FAQ/FAQ';
import Blog from './component/Blog/Blog';

const router = createBrowserRouter([
  {
    path: '/', element: <Main></Main>, children: [
      {
        path: '/', element: <Home></Home>
      },
      {
        path: '/courses', element: <Courses></Courses>,
        loader: () => {
          return fetch('http://localhost:5000/allCourses')
        }
      },
      {
        path: '/faq', element: <FAQ></FAQ>
      },
      {
        path: '/blog', element: <Blog></Blog>
      }
    ]
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
