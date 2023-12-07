import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import UsersPage from "./Components/UsersPage";
import TodosPage from "./Components/TodosPage";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <NavLink to="/users">Пользовактели</NavLink>
                <NavLink to="/todos">Список дел</NavLink>
            </div>
            <Routes>
                <Route path={'/users'} element={<UsersPage/>}/>
                <Route path={'/todos'} element={<TodosPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;