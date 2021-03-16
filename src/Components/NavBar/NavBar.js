import React,{useState} from 'react';
import './navBar.css'
const NavBar = () => {
    const [toggleMenu,setToggleMenu] = useState(false)
    return(
        <div className="navBar">
         <div className="navContainer">
             <h1>Jibin</h1>
             {/* <button onClick={()=>setToggleMenu(!toggleMenu)} className="bar">open</button> */}
             <div className={toggleMenu?'navbar-togglebtn active':'navbar-togglebtn' } onClick={()=>setToggleMenu(!toggleMenu)}>
          <span className="bar"></span> <span class="bar"></span>
          <span className="bar"></span>
        </div>
                 <ul className={toggleMenu?'navbar-menu active':"navbar-menu"}>
                     <li>Services</li>
                     <li>Works</li>
                     <li>Contact</li>
                 </ul>
         </div>
        </div>
    )
}
export default NavBar;