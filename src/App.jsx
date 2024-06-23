import { RouterProvider, createBrowserRouter } from "react-router-dom"
import './App.css'
import Home from "./pages/HomePage/Home"
import SignInPage from "./pages/AuthPage/SignInPage"
import SignupForm from "./pages/AuthPage/SignupForm"



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Signin',
    element: <SignInPage />
  },
  {
    path: '/signup',
    element: <SignupForm />
  },
])



function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App