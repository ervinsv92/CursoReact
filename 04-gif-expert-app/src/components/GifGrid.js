import React, {useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(()=>{
        //Se ejecuta solo cuando el componente se crea
        getGifs();
    }, [])

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?limit=10&api_key=FPaw1LlihURIe2UxXhZA2nJok23mE2Qe&q=homer';
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium?.url
            }
        })

        setImages(gifs);
    }

    return (
        <>
            <h3>{category}</h3>
            {
                images.map(img => (
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />
                    )
                )
            }
        </>
    )
}
