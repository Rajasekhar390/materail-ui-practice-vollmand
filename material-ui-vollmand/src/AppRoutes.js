import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App';
import Add from './pages/add/add';
import Counter from './pages/counter/counter';
import List from './pages/lists/List';
import Lorem from './pages/lorem/lorem';
import Posts from './pages/posts/Posts';
import SearchTable from './pages/search/searchTable';
import SortTable from './pages/sortTable/SortTable';
import Users from './pages/users/users';
import Pagination from './pages/Pagination/Pagination';
import SearchId from './pages/SearchId/SearchId';
import Propile from './pages/search/Propile';
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
                <Route path='/sort' element={<SortTable />} />
                <Route path='/search' element={<SearchTable />} />
                <Route path='/pagi' element={<Pagination />} />
                <Route path='/searchid' element={<SearchId />} />
                <Route path='/profile' element={<Propile />} />
            </Routes>
        </BrowserRouter> </div>
    )
}

export default AppRoutes;