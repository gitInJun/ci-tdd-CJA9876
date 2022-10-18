import React, { useCallback, useRef, useState } from "react";
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"

const TodoApp_NEWJYH = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'TDD 배우기',
            done: false,
        },
        {
            id: 2,
            text: 'react-testing-library',
            done: true,
        }        
    ]);
    const nextId = useRef(3);
    const onInsert = useCallback(text => {
        setTodos(
            todos.concat({
                id: nextId.current,
                text,
                done: false,
            })
        );
        nextId.current += 1;
    }, [todos]);
    const onToggle = useCallback(id => {
        setTodos(
            todos.map(todo => 
                todo.id === id ? {...todo, done: !todo.done} : todo
            )
        );
    }, [todos]);
    const onRemove = useCallback(id => {
        setTodos(
            todos.filter(todo => todo.id !== id)
        );
    }, [todos]);
    return (<div>
        <h1>NEWJYH 안녕하세요 진아님 NEWJYH 정영훈</h1>
        <TodoForm onInsert={onInsert}/>
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>
    </div>);
};

export default TodoApp_NEWJYH;