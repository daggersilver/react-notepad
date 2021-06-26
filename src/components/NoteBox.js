import React from 'react'

import Note from './Note'

const NoteBox = ({notes, editNote}) => {
    return (
        <div className="note-box">
            {notes.map((note)=>{
                return <Note 
                    note={note} 
                    key={note.id} 
                    id={note.id}
                    editNote={editNote}
                    />
            })}
        </div>
    )
}

export default NoteBox
