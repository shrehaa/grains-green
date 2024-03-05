import './footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className='footer-container'>
        
        <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Cancellation & Refund</li>
            <li>Contact Us</li>
        </ul>
        <div style={{marginTop:"10px", marginRight:"20px"}}>
            <InstagramIcon sx={{color:"#fff", marginRight:"10px", cursor:"pointer"}}/>
            <XIcon sx={{color:"#fff", marginRight:"10px", cursor:"pointer"}}/>
            <LinkedInIcon sx={{color:"#fff", marginRight:"10px", cursor:"pointer"}}/>
        </div>
    </div>
  )
}

export default Footer