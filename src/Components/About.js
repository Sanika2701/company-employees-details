import { Fragment } from "react"
import Navnew from "./NavNew";
import './About.css'

const About =()=>{
    return(
        <Fragment>
            
            <Navnew></Navnew>
            
                <div class="about-us">
                    <div className="container3">
                        <div class="row1">
                            <div class="flex">
                                <h1>About Us</h1>
                                <h2>Discover Our Team's Story</h2>
                                <p>We are a team of passionate individuals who are dedicated to providing 
                                    high-quality products and services to our customers.Our company was 
                                    founded in 2015 with the mission of making people's lives easier and more enjoyable.
                                    Since then,we have been working hard to develop innovative solutions that meet
                                     the needs of our customers.</p>
                                    
                                <div class="social-links">
                                    <a href=""><i class="bi bi-twitter"></i></a>

                                    <a href=""><i class="bi bi-instagram"></i></a>
                                    <a href=""><i class="bi bi-facebook"></i></a>
                                    </div>
                                <a href="" class="btn5">Learn More</a>
                            </div>
                            <div class="flex">
                                <img src=" about us.webp"></img>
                            </div>
                        </div>
                    </div>
                </div>
            

        </Fragment>
    )
}
export default About;