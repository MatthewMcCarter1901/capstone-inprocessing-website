import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { ProtectedRoutes } from './ProtectedRoutes'
import { Login } from '../Login/Login'
import { HomePage } from '../Home/HomePage'
import { NotAuthorized } from './NotAuthorized'
import { DetailsPage } from '../Details/DetailsPage'



export const AllRoutes = () => {

    return (

        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace={true} />} />
                <Route path='/login' element={< Login />}></Route>
                <Route path='/home' element={<HomePage/>}></Route>
                <Route path='/details' element={<DetailsPage/>}></Route>
                {/* <Route element={<ProtectedRoutes />}> */}
                    {/* <Route path='/home' element={< Home />}></Route>
                    <Route path='/account' element={< Account />}></Route>
                    <Route path='/users' element={< Users />}></Route> */}
                {/* </Route> */}
                <Route path='*' element={<NotAuthorized/>}></Route>
            </Routes>
        </Router>

    )
}