import React from 'react'
import {Link,NavLink} from 'react-router-dom'


function Nav(){
    return (
        
            <nav class="navbar navbar-expand-sm  sticky-top">
                <Link to="/">
                    <div className="navbar-band">HealthCare 
                        </div>
                </Link>

            <button
                class="navbar-toggler navbar-toggler-rigth"
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <i class="fa fa-bars" style={{color:"white"}}></i>
            </button>
            
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <ul className="navbar-nav" >
                    
                    <li class="nav-item" >
                        <Link to="/">Home</Link>
                        </li>
                    <li class="nav-item" >
                        <NavLink   to="/About">About</NavLink>
                        </li>
                    <li class="nav-item ">
                        <NavLink  to="/Doctor">Doctor</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            
        
       

        
    )
}
export default Nav;