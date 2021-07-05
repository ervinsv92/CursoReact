//reducer
export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];//Siempre hay que enviar un estado completamente nuevo
        case 'delete':
            return state.filter(todo => todo.id !== action.payload);
        case 'toggle':
            return state.map(
                todo => (todo.id === action.payload)
                ?{...todo, done:!todo.done}
                :todo
            );
        case 'toggle-old':
            return state.map(todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done:!todo.done
                    }
                }else{
                    return todo;
                }
            })
        default:
            return state;
    }
}