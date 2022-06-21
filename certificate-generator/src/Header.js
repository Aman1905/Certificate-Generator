import React from 'react'

const Header = ({Config}) => {
    return (
        <nav className="header navbar navbar-dark bg-dark">
            <div className="container-fluid justify-content-center">
              <span className='navbar-brand mb-0 h1'>
                {Config.Name} : Claim or Verify your Certificates
              </span>
            </div>
        </nav>
    )
}

export default Header;