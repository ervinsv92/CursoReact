import React, {useReducer, useEffect, useCallback} from 'react'
import './styles.css';
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    //const [todos], se hace con destructuracion de arreglos, por lo tanto todo puede ser cualquier nombre
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    //Se ejecuta cuando cambia el valor de un estado
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    /*
    const handleDelete = (todoId) =>{
        //e.preventDefault();
        const action = {
            type: 'delete',
            payload: todoId
        };

        //Manda la accion al reducer
        dispatch(action);
    }*/

    /*
    const handleToggle = (todoId) => {
        dispatch({
            type:'toggle',
            payload:todoId
        });
    }
*/

    //para el ejemplo no es necesario utilizar el callback, con solo pasar una funcion normal sirve
    const handleToggle = useCallback(
        (todoId) => {
            dispatch({
                type:'toggle',
                payload:todoId
            });
        },
        [dispatch],
    );

    const handleDelete = useCallback(
        (todoId) => {
            const action = {
                type: 'delete',
                payload: todoId
            };
            dispatch(action);
        },
        [dispatch],
    )

    const handleAddTodo = (newTodo) =>{
        //Manda la accion al reducer
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr></hr>

            <div className="row">
                <div className="col-7">
                <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}></TodoList>
                </div>
                <div className="col-5">
                    <TodoAdd handleAddTodo={handleAddTodo}></TodoAdd>
                </div>
            </div>
        </div>
    )
}
