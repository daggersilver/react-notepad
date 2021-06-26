import React from 'react'

const Navbar = ({createNew}) => {
    return (
        <div className="navbar">
            <p>Notes</p>
            <button onClick={createNew}>Create Note</button>
        </div>
    )

}

export default Navbar
