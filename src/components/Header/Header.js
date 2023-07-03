import React  from "react";
import './styles.css'

export default ({black}) => {
    return(
        <header className={black ? 'black' : '' }>
            <div className="header-logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" />
                </a>
            </div>
            <div className="header-user">
            <a href="https://docs.google.com/document/d/1EkZ1UYwHzKV4ocEYXgAA768QgEIRs40fv5R_015Mf4I/edit?usp=sharing">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user" />
                </a>
            </div>
            
        </header>
    )
}