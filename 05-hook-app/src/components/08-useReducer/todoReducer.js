//reducer
export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];//Siempre hay que enviar un estado completamente nuevo
        case 'delete':
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
}