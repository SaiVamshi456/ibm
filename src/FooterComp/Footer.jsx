import "./Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Footer(){

    useEffect(()=>{
        AOS.init({duration:2000});
    },[])

    return (
        <footer className="foot" data-aos="fade-down">
            <div className="foot-top">
                <div className="foot-left">
                    <div className="social-media">
                        <a></a>
                        <h3></h3>
                    </div>
                    <div className="social-media">
                        <a href="" target="_blank">
                           <InstagramIcon sx={{
                            color: "white",
                              fontSize: "40px",
                              "&:hover": { color: "blue"},
                        }}/>
                        </a>
                        <h3>Instagram</h3>
                    </div>
                    <div className="social-media" >
                        <a href="" target="_blank">                    
                            <TwitterIcon sx={{
                                color: "white",
                                  fontSize: "40px",
                                    "&:hover": { color: "blue"},
                            }}/>
                        </a>
                        <h3>Twitter</h3>
                    </div>
                    <div className="social-media" >
                        <a href="" target="_blank">                    
                            <FacebookIcon sx={{
                                color: "white",
                                  fontSize: "40px",
                                    "&:hover": { color: "blue"},
                            }}/>
                        </a>
                        <h3>Facebook</h3>
                    </div>
                </div>
                <div className="foot-right">
                    <div className="contact">
                        <CallRoundedIcon />
                        <h4>Contact Us: +91 465264574</h4>
                    </div>
                </div>
            </div>  
            <div className="foot-bottom">
                <p>Copyright @2023</p>
            </div>  
        </footer>
    );
}