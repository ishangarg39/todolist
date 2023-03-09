import React, { useEffect, useState, createContext } from 'react';

export const DataContext = createContext();

export const Data = (props) => {
    const [todos, setTodos] = useState([])

    useEffect(() =>{
        localStorage.setItem('todostore',JSON.stringify(todos),[todos])
    })
    return (
        <div>
            <DataContext.Provider value={[todos, setTodos]}>
                {props.children}
            </DataContext.Provider>
        </div>
    )
}
