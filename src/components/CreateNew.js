import React, {useState} from 'react'

const CreateNew = ({createNew, addNote}) => {
    const [text, setText] = useState("");
    return (
        <div className="create-new-cover">
            <div className="create-new">
                <p >Create New Note</p>
                <textarea value={text} onChange={handleChange} autoFocus/>
                <div className="create-new-div">
                    <button onClick={handleDelete}><i className="fa fa-times"></i></button>
                    <button onClick={handleCreate}><i className="fa fa-check"></i></button>
                </div>
            </div>
        </div>
    )

    function handleChange(e){
        setText(e.target.value);
    }
   

    function handleDelete(){
        setText("");
        createNew();
    }
    function handleCreate(){
        if(text){
            addNote(text);
            setText("");
        } else{
            alert("The content is empty");
        }  
        createNew();
    }
}

export default CreateNew
