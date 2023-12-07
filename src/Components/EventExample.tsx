import React, {FC, useState} from 'react';

const EventExample: FC = () => {
    const [value,setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>();
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    };

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG')
    };
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('DROP')
    };
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    };
    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    };
    return (
        <div>
            <input value={value} onChange={changeHandler} type="text"/>
            <button onClick={clickHandler}>Button</button>
            <div draggable onDrag={dragHandler} style={{width:200, height:200, background: 'red'}}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                 style={{width:200, height:200, background: isDrag ? 'blue' : 'red', marginTop:15}}></div>
        </div>
    );
};

export default EventExample;