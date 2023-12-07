import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./Components/Card";
import UserList from "./Components/UserList";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import List from "./Components/List";
import UserItem from "./Components/UserItem";
import TodoItem from "./Components/TodoItem";
import EventExample from "./Components/EventExample";

const App = () => {
    const [users,setUsers] = useState<IUser[]>([])
    const [todos,setTodos] = useState<ITodo[]>([])
    useEffect(() => {
        fetchUsers()
        fetchTodos()
    }, [])

    async function fetchUsers(){
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    async function fetchTodos(){
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <EventExample/>
            <Card width='200px' height='200px' variant={CardVariant.primary} onClick={(num) => console.log('click', num)}>
                <button>Кнопка</button>
            </Card>
            <List items={users}
                  renderItem={
                (user: IUser) => <UserItem user={user} key={user.id}/>
            }/>
            <List items={todos}
                  renderItem={
                (todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>
            }/>
        </div>
    );
};

export default App;