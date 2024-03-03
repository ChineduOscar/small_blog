import { createBrowserRouter } from 'react-router-dom'
import NoPage from '../pages/NoPage'
import Home from '../pages/Home'
import About from '../pages/About'
import Books from '../pages/Books'
import Book from '../pages/Book'

const router = createBrowserRouter([
  {
    path: '*',
    element: <NoPage />, // 404 page to be completed
  },
  {
    path: '/',
    element: <Home />, // Home page
  },
  {
    path: '/about',
    element: <About /> // About page
  },
  {
    path: '/books',
    element: <Books /> // About page
  },
  {
    path: '/books/:id',
    element: <Book /> // About page
  },
])

export default router
