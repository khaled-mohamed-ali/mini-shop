import {SlSocialTwitter} from "react-icons/sl"
import {TiSocialFacebook,TiSocialLinkedin,TiSocialYoutube} from "react-icons/ti"
import './footerStyle.css'
export const Footer = () => {
    return (
        <footer className="socialFooter text-center text-white" style={{backgroundColor: "#f1f1f1"}}>
            <div className= "text-center text-dark p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                <ul>
                    <li><SlSocialTwitter/></li>
                    <li><TiSocialFacebook/></li>
                    <li><TiSocialLinkedin/></li>
                    <li><TiSocialYoutube/></li>
                </ul>
            </div>
        </footer>
    )
}