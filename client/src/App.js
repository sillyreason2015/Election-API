import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import RouteLayout from './pages/RouteLayout';
import LoginPage from './pages/Login';
import Register from './pages/Register';
import Results from './pages/Results';
import Elections from './pages/Elections';
import ElectionDetails from './pages/ElectionDetails';
import Logout from './pages/Logout';
import Candidates from './pages/Candidates';
import Congrats from './pages/Congrats';
import ErrorPage from './pages/ErrorPage';
import VerifyOtp from './pages/VerifyOtp';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouteLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
      index: true,
      element: <LoginPage/>
      },
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'results',
        element: <Results/>
      },
      {
        path: 'elections',
        element: <Elections/>
      },
      {
        path: 'elections/:id',
        element: <ElectionDetails/>
      },
      {
        path: 'logout',
        element: <Logout/>
      },
      {
        path: 'elections/:id/candidates',
        element: <Candidates/>
      },
       {
        path: 'congrats',
        element: <Congrats/>
      },
      {
       path: 'verify-otp',
        element: <VerifyOtp/>
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword/>
      },
      {
        path:"/reset-password/:token",
        element:<ResetPassword />}

    ]
  }
])

function App() {
  return(<RouterProvider router={router}/>)
}

export default App;
