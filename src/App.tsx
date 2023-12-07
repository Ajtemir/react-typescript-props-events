import React from 'react';
import Card, {CardVariant} from "./Components/Card";

const App = () => {
    return (
        <div>
            <Card width='200px' height='200px' variant={CardVariant.primary} onClick={(num) => console.log('click', num)}>
                <button>Кнопка</button>
            </Card>
        </div>
    );
};

export default App;