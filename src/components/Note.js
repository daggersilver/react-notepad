import React from 'react'

const Note = ({note, id, editNote}) => {
    const cont = truncate(note.content);
    return (
        <div className="note" style={{backgroundColor: note.color}} onClick={()=>{editNote(id, note.content)}}>
            <p>{cont}</p>
        </div>
    )
}

function truncate(text){
    const limit = 150;
    let data = null;
    if(text.length > limit) {
        data = text.slice(0, limit);
        data += "...";
    } else {
        data = text;
    }
    return data;
}

export default Note
