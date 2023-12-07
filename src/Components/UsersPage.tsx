import React, {FC, useEffect, useState} from 'react';
import {ITodo, IUser} from "../types/types";
import axios from "axios";
import EventExample from "./EventExample";
import Card, {CardVariant} from "./Card";
import List from "./List";
import UserItem from "./UserItem";
import TodoItem from "./TodoItem";

const UsersPage: FC = () => {
    const [users,setUsers] = useState<IUser[]>([])
    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers(){
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <List items={users}
                  renderItem={
                      (user: IUser) => <UserItem user={user} key={user.id}/>
                  }/>
        </div>
    );
};

export default UsersPage;