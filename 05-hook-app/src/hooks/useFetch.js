import { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
    const isMounted = useRef(true);
    const [state, setState] = useState({data:null, loading:true, error:null});

    useEffect(() => {
        
        return () =>{
            //Solo se ejecuta cuando se desmonta el componente
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        setState({data:null, loading:true, error:null});

        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            //El time out es solo para ejemplo, en la vida real no iria
            setTimeout(() => {
                if(isMounted.current){
                    //Solo ejecuta el estado si el componente está montado
                    setState({
                        loading:false,
                        error:null,
                        data
                    });    
                }else{
                    console.log('Set state no se llamo')
                }
            }, 4000);    
        });
        
    }, [url])

    return state;
}
