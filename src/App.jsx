import RootLayout from './components/RootLayout'
import Create from './components/Create'
import Homepage from './components/Homepage'
import Profile, { tasksLoader } from './components/Profile'
import Dashboard, { productsLoader } from './components/Dashboard'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// router and routes
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Homepage />} />
            <Route path="dashboard" element={<Dashboard />} loader={productsLoader} />
            <Route path="create" element={<Create />} />
            <Route path="profile" element={<Profile />} loader={tasksLoader}/>
        </Route>
    )
)

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}