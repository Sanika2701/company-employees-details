import { Fragment } from "react"
import Navnew from "./NavNew";
import './Team.css'

const Team =()=>{
    return(
        <Fragment>
            <Navnew></Navnew>
            <div className="main1"><br></br>

            <h1 class="heading3">Team Members</h1>
    
            <div class="wrapper">
                
                <hr></hr>
                <div class="members">
                
                <div class="team-mem">
                <img className="img4" src="Man1.jpg"></img>
                    <h4>Mr.Anurag</h4>
                    <p>Graphic Designer</p>
                    </div>
                
                <div class="team-mem">
                <img className="img4" src="man4.jpg"></img>
                <h4>Mr.Anand</h4>
                <p>Soft - Engineer</p>
                </div>

                <div class="team-mem">
                <img className="img4" src="s1.jpg"></img>
                <h4>Ms.Soniya</h4>
                <p>Back-End Developer</p>
                </div>
                
                <div class="team-mem">
                <img className="img4" src="Man5.jpg"></img>
                <h4>Mr.Kalpesh</h4>
                <p>Front-End Developer</p>
                </div>

                <div class="team-mem">
                <img className="img4" src="img8.jpg"></img>
                <h4>Mrs.Sonali</h4>
                <p>Product Manager</p>
                </div>

                

                </div>

                </div>
                </div>
            
        </Fragment>
    )
}
export default Team;




