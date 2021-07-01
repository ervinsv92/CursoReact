/** 
 *No se debe usar el push si se está en react 
*/

const initialState = [{
    id:1,
    todo:'Comprar pan',
    done:false
}];

const todoReducer = (state = initialState, action) => {
    if(action?.type === 'agregar'){
        return [...state, action.payload];
    }
    //Siempre tienen que regresar un estado, el estado no se puede mutar, no usar push
    return state;
}



let todos = todoReducer();
console.log(todos)

let newTodo = {
    id:2,
    todo:'Comprar leche',
    done:false
}

const agregarTodoAction = {
    type:'agregar',//Las acciones siempre deben llevar el tipo, indica si la accion es para agregar, actualizar o eliminar
    payload:newTodo//Se puede poner solo newTodo cuando la llave y valor se llaman igual
}

todos = todoReducer(todos, agregarTodoAction);