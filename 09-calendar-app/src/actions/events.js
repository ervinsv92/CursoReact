import Swal from "sweetalert2";
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

export const eventStarUpdate = (event)=>{
    return async (dispatch) =>{
        try {
            const resp = await fetchConToken(`events/${event.id}`, event, 'PUT');
            const body = await resp.json();
            if(body.ok){
                dispatch(eventUpdated(event));
            }else{
                Swal.fire('Error', body.msg, 'error');
            }
        } catch (error) {
            console.log(error)
        }
    }
}

const eventUpdated = (event)=>({
    type:types.eventUpdated,
    payload:event
});

export const eventStartDelete = ()=>{
    return async (dispatch, getState)=>{

        const {id} = getState().calendar.activeEvent;

        try {
            const resp = await fetchConToken(`events/${id}`, {}, 'DELETE');
            const body = await resp.json();
            if(body.ok){
                dispatch(eventDeleted());
            }else{
                Swal.fire('Error', body.msg, 'error');
            }
        } catch (error) {
            console.log(error)
        }
    }
}

const eventDeleted = ()=>({
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

export const eventLogout = ()=>({
    type:types.eventLogout
})