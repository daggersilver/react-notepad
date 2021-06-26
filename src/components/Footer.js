import React from 'react'

const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <div className="footer">
            @copyright  {year}
        </div>
    )
}

export default Footer
