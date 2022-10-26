import './App.css';
import Header from '../src/component/Shared/Header/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './component/Home/Home';
import Courses from './component/Courses/Courses';
import FAQ from './component/FAQ/FAQ';
import Blog from './component/Blog/Blog';
import DetailCourses from './component/DetailCourses/DetailCourses';
import Premium from './component/Premium/Premium';
import Login from './component/Form/Login/Login';
import SignUp from './component/Form/SignUp/SignUp';

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
        path: '/coursesDetail/:id',
        element: <DetailCourses></DetailCourses>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/coursesDetail/${params.id}`)
        }
      },
      {
        path: '/premium/:id',
        element: <Premium></Premium>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/premium/${params.id}`)
        }
      },
      {
        path: '/faq', element: <FAQ></FAQ>
      },
      {
        path: '/blog', element: <Blog></Blog>
      },
      {
        path: '/login', element: <Login></Login>
      },
      {
        path: '/signup', element: <SignUp></SignUp>
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
