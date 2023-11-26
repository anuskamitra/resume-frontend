
import React from 'react'
import Styles from './Header.module.css'
import ResumeSVG from '../assets/resume.svg'
import Body from "./Body"
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const baseurl="https://backend-resume-ugnu.onrender.com";
  const navigate=useNavigate()
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        console.log("-------------------in try")
        axios.get(baseurl+"/api/check-auth",{
          withCredentials: true,
        }
        )
        .then(response=>{
          console.log("response"+JSON.stringify(response.data));
              if(!response.data.user){
                navigate("/")
       }
       else{
         console.log(response.data.user.id)
        }
        })
       
      } catch (error) {
        console.error("Authentication failed:", error);
        navigate("/")
      }
    };

    checkAuthentication();
  
  }, []);
  return (
    <React.Fragment>
    <div className={Styles.container}>    
            <div className={Styles.left}>
            <div className={Styles.heading}>
                <p>A <span>Resume</span> That Stands Out!</p>
                <p>Make Your Own Resume.<span>It's Free</span></p>
          
            </div>
            </div> 
            <div className={Styles.right}>
                <img src={ResumeSVG} alt='resumeimage'/>
                {/* <ResumeSVG/> */}
           
        </div>
      
    </div>
    <Body/>
    </React.Fragment>
  )
}
