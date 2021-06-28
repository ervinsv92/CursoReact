import React from 'react'
/**
 * Memo se usa para que le componente no se renderize si sus datos no han cambiado, evitando asi posibles llamados http inecesarios con datos iguales.
 * Solo se dispara si las propertys cambian
 */
export const Small = React.memo(({value}) => {
    return (
        <small>
            {value}
        </small>
    )
})
