import {Fragment} from "react"
import {Link}from "react-router-dom";
import './Nav.css'

const Navnew =()=>{
    return(
        <Fragment>
            <nav>
                <img src="./icon.png"></img>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/service"}>Services</Link></li>
                    <li><Link to={"/portfolio"}>Portfolio</Link></li>
                    <li><Link to={"/team"}>Team</Link></li>
                    <li><Link to={"/contact"}>AddEmployee</Link></li>
                    
                   </ul>
            </nav>
        </Fragment>
    )
}
export default Navnew;