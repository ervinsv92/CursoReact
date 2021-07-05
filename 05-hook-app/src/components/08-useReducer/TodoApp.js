import React, {useReducer, useEffect} from 'react'
import './styles.css';
import { todoReducer } from './todoReducer';
import {useForm} from '../../hooks/useForm';

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    //const [todos], se hace con destructuracion de arreglos, por lo tanto todo puede ser cualquier nombre
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{description}, handleInputChange, reset] = useForm({
        description:''
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        
    }, [todos]);

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

        dispatch(action);
        reset();
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr></hr>

            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                {
                    todos.map((todo, i) => {
                        return   <li 
                                        key={todo.id}
                                        className="list-group-item"
                                    >
                                    <p className="text-center">{i+1}. {todo.desc}</p>
                                    <button type="button" className="btn btn-danger">Borrar</button>
                                    </li>
                    })
                }
                </ul>
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
