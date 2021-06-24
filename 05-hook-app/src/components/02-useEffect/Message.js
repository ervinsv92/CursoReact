import React, {useState, useEffect} from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0});
    const {x,y} = coords;

    useEffect(() => {
        console.log("componente montado")

        const mouseMove = (e) =>{
            //console.log(e)
            const coords = {x:e.x, y:e.y};
            setCoords(coords);
        }

        window.addEventListener('mousemove',mouseMove)

        return () => {
            //sirve para ejecutar codigo cuando el componente se desmonta de la GUI
            console.log("componente desmontado")
            //se remueve el listener, ya que este no se borra con el componente y si se crea uno nuevo se duplica, por lo que ocaciona perdida de rendimiento en la aplicacion.
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <div>
            <h3>Eres genial</h3>
            <p>
                X:{x} Y:{y}
            </p>
        </div>
    )
}
