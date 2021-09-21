import { fetchConToken } from "../helpers/fetch";
import { prepareEvents } from "../helpers/prepareEvents";
import { types } from "../types/types";

export const eventStartAddNew = (evento)=>{
    return async(dispatch, getState)=>{

        const {uid, name} = getState().auth;

        try {
            const resp = await fetchConToken('events', evento, 'POST');
            const body = await resp.json();  
            if(body.ok){
                evento.id = body.evento.id;
                evento.user = {
                    _id:uid,
                    name
                }
                dispatch(eventAddNew(evento));
            }  
        } catch (error) {
            console.log(error)
        }
    }
}

const eventAddNew = (event) =>({
    type: types.eventAddNew,
    payload: event
});

export const eventSetActive = (event) =>({
    type: types.eventSetActive,
    payload: event
});

export const eventClearActiveEvent = ()=>({
type:types.eventClearActiveEvent
})

export const eventUpdated = (event)=>({
    type:types.eventUpdated,
    payload:event
});

export const eventDeleted = ()=>({
    type:types.eventDeleted
});

export const eventStartLoading = ()=>{
    return async (dispatch)=>{
        try {
            const resp = await fetchConToken('events');
            const body = await resp.json();
            const events = prepareEvents(body.eventos);
            dispatch(eventLoaded(events));
        } catch (error) {
            console.log(error)
        }
    }
}

const eventLoaded = (eventos)=>({
    type:types.eventLoaded,
    payload:eventos
})