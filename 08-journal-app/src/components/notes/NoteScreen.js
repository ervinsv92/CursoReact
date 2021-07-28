import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const {active:note} = useSelector(state => state.notes)
    const [formValues, handleInputChange, reset] = useForm(note);
    const {body, title} = formValues;

    //Combierte a programacion imperativa (la de toda la vida)
    const activeId = useRef(note.id);
    /*
        Con el useEffect hay que tener cuidado para que no se encicle el efecto y no pegue la pc
    */ 
    useEffect(() => {
        //La idea es que el efecto se dispare solo si el id de la nota cambio
       if(note.id !== activeId.current){
           reset(note);
           activeId.current = note.id;
       }
    }, [note, reset])

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input 
                    type="text" 
                    placeholder="Some awesome title" 
                    className="notes__title-input" 
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea 
                    placeholder="What happened today" 
                    className="notes__textarea"
                    value={body}
                    onChange={handleInputChange}
                ></textarea>

                {   
                    (note.url) &&
                    <div className="notes_image">
                        <img src="http://www.foondos.com/wp-content/uploads/2012/08/Bob-Esponja-HD-17-720x540.jpg" alt="imagen"/>
                    </div>
                }
            </div>
        </div>
    )
}
