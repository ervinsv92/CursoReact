import React, {useReducer, useEffect, useCallback} from 'react'
import './styles.css';
import { todoReducer } from './todoReducer';
import {useForm} from '../../hooks/useForm';
import { TodoList } from './TodoList';

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    //const [todos], se hace con destructuracion de arreglos, por lo tanto todo puede ser cualquier nombre
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{description}, handleInputChange, reset] = useForm({
        description:''
    });

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
    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 1){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc:description,
            done:false
        };

        const action = {
            type: 'add',
            payload: newTodo
        };

        //Manda la accion al reducer
        dispatch(action);
        reset();
    }

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

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr></hr>

            <div className="row">
                <div className="col-7">
                <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}></TodoList>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr></hr>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="description" placeholder="Aprender ..." autoComplete="off" className="form-control" 
                        onChange={handleInputChange}
                        value={description}
                    />
                        <button className="btn btn-outline-primary mt-1 btn-block" type="submit">Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
