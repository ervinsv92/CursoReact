import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    return (
        <>
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </>
    )
}
