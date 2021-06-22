import { useEffect, useState } from "react";
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) =>{

    //useState - Se usa para renderizar la pantalla
    const [state, setState] = useState({
        data:[],
        loading:true
    });

    //los efectos no puede ser async
    useEffect(()=>{
        //Se ejecuta solo cuando el componente se crea
        getGifs(category).then( imgs => {
            setState({
                data:imgs,
                loading:false
            });
        });
    }, [category]);

    return state; //{data:[], loading:true}
}