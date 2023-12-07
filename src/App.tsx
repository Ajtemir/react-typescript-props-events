import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import UsersPage from "./Components/UsersPage";
import TodosPage from "./Components/TodosPage";
import UserItemPage from "./Components/UserItemPage";
import TodoItemPage from "./Components/TodoItemPage";

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
                <Route path={'/users/:id'} element={<UserItemPage/>}/>
                <Route path={'/todos/:id'} element={<TodoItemPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;