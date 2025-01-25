import { Fragment } from "react"
import Navnew from "./NavNew";
import './Services.css'


const Services =()=>{
    return(
        <Fragment>
            <Navnew></Navnew>
            <div class="container35">
                <h1 class="heading">Our Services</h1>
            <div class="box-container">
                
                <div class="box">
                    <img className="img11" src="digital.png" alt=""></img>
                    <h3>Digital Marketing</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Minus,commodi?</p>
                
                </div>

                <div class="box">
                    <img className="img12" src="salesforce.png" alt=""></img>
                    <h3>Salesforce Development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Minus,commodi?</p>
                
                </div>

                <div class="box">
                    <img className="img13" src="web.jpg" alt=""></img>
                    <h3>Web Applications</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Minus,commodi?</p>
                
                </div>

                <div class="box">
                    <img className="img14" src="mobile.jpg" alt=""></img>
                    <h3>Mobile Applications</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Minus,commodi?</p>
                
                </div>

                <div class="box">
                    <img className="img15" src="blockchain.jpeg" alt=""></img>
                    <h3>Blockchain Solutions</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Minus,commodi?</p>
                
                </div>

                <div class="box">
                    <img className="img16" src="hire.jpg" alt=""></img>
                    <h3>Hire Us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Minus,commodi?</p>
               
                </div>





            
            
            </div>
            </div>
        </Fragment>
    )
}
export default Services;