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
        case types.notesLoad:
            return {
                ...state,
                notes: [...action.payload] //TODO: hará falta esparcir los elementos del array?
            }
        default:
            return state;
    }
}