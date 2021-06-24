import React from 'react'

export const Message = () => {

    useEffect(() => {
        console.log("componente montado")
        return () => {
            //sirve para ejecutar codigo cuando el componente se desmonta de la GUI
            console.log("componente desmontado")
        }
    }, [])

    return (
        <div>
            <h3>Eres genial</h3>
        </div>
    )
}
