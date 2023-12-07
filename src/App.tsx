import React from 'react';
import Card, {CardVariant} from "./Components/Card";
import UserList from "./Components/UserList";
import {IUser} from "./types/types";

const App = () => {
    const users: IUser[] = [
        {id: 1, name: 'Ulbi tv', email: 'asf@mail.ru', address: {city:'Moscow', street:'Lenin', zipcode:'12'},},
        {id: 2, name: 'Timur', email: 'asf@mail.ru', address: {city:'Maliningrad', street:'Pushkin', zipcode:'12'},},
    ]
    return (
        <div>
            <Card width='200px' height='200px' variant={CardVariant.primary} onClick={(num) => console.log('click', num)}>
                <button>Кнопка</button>
            </Card>
            <UserList users={users}/>
        </div>
    );
};

export default App;