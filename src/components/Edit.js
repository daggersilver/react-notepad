import React, {useState, useRef} from 'react'

const Edit = ({id,text, updateNote, deleteNote}) => {
    let [note, setNote] = useState(text);
    let [justRead, setRead] = useState(true);
    let ref = useRef(null);
    return (
        <div className="create-new-cover">
            <div className="create-new">
                <p >Edit Note</p>
                <textarea value={note} onChange={handleChange} readOnly={justRead} ref={ref}/>
                <div className="create-new-div">
                    <button style={{color: "red"}} onClick={handleDelete}><i className="fa fa-trash"></i></button>
                    <button style={{color: "blue"}} onClick={handleWrite} ><i className="fa fa-edit"></i></button>
                    <button style={{color: "green"}} onClick={handleEdit}><i className="fa fa-check"></i></button>
                </div>
            </div>
        </div>
    )

    function handleChange(e){
        setNote(e.target.value);
    }
   
    function handleDelete(){
        deleteNote(id);
    }
    function handleEdit(){
        if(note){
            updateNote(id, note)
        } else{
            alert("The content is empty");
        }  
    }
    function handleWrite(e){
        setRead(false);
        e.target.style.visibility = "hidden";
        ref.current.focus(); 
    }
}

export default Edit
