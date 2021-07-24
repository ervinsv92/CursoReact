import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input type="text" placeholder="Some awesome title" className="notes__title-input" autoComplete="off"/>

                <textarea placeholder="What happened today" className="notes__textarea"></textarea>

                <div className="notes_image">
                    <img src="http://www.foondos.com/wp-content/uploads/2012/08/Bob-Esponja-HD-17-720x540.jpg" alt="imagen"/>
                </div>
            </div>
        </div>
    )
}
