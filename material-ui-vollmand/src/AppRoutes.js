import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App';
import Add from './pages/add/add';
import Counter from './pages/counter/counter';
import List from './pages/lists/List';
import Lorem from './pages/lorem/lorem';
import Posts from './pages/posts/Posts';
import Users from './users/users';
const AppRoutes = () => {
    return (
        <div ><BrowserRouter>
            <Routes>
                <Route path='/app' element={<App />} />
                <Route path='/counter' element={<Counter />} />
                <Route path='/add' element={<Add />} />
                <Route path='/lorem' element={<Lorem />} />
                <Route path='/users' element={<Users />} />
                <Route path='/posts' element={<Posts />} />
                <Route path='/lists' element={<List />} />
            </Routes>
        </BrowserRouter> </div>
    )
}

export default AppRoutes;