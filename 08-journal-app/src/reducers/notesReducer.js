/*
    {
        notes:[],
        active:null,
        active:{
            id:'5545s4df5s4df54sd',
            title:'',
            body:'',
            imageUrl:'',
            date:545454545454
        }
    }
*/

import { types } from "../types/types";

const initialState = {
    notes:[],
    active: null
}

export const notesReducer = (state = initialState, action)=>{
    switch(action.type){
        case types.notesActive:
            return {
                ...state,
                active:{
                    ...action.payload
                }
            }
        case types.notesAddNew:
            return{
                ...state,
                notes: [action.payload, ...state.notes]
            }
        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload] //TODO: hará falta esparcir los elementos del array?
            }
        case types.notesUpdated:
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id
                    ? action.payload.note
                    : note
                )
            }
        case types.notesDelete:
            return {
                ...state,
                active:null,
                notes: state.notes.filter(x => x.id !== action.payload)
            }
        case types.notesLogoutCleaning:
            return {
                ...initialState
            }
        default:
            return state;
    }
}