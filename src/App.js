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
import PrivateRouter from './Router/PrivateRouter';
import NotFound from './component/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/', element: <Main></Main>, children: [
      {
        path: '/', element: <Home></Home>
      },
      {
        path: '/courses', element: <Courses></Courses>,
        loader: () => {
          return fetch('https://assigment-ten-server.vercel.app/allCourses')
        }
      },
      {
        path: '/coursesDetail/:id',
        element: <DetailCourses></DetailCourses>,
        loader: ({ params }) => {
          return fetch(`https://assigment-ten-server.vercel.app/coursesDetail/${params.id}`)
        }
      },
      {
        path: '/premium/:id',
        element: <PrivateRouter> <Premium></Premium></PrivateRouter>,
        loader: ({ params }) => {
          return fetch(`https://assigment-ten-server.vercel.app/premium/${params.id}`)
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
      },
      {
        path: '*', element: <NotFound></NotFound>
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
