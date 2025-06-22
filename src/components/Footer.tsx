import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/AgniAditya" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/aditya-agnihotri-097408302/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:agniaditya05@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
      </div>
    </footer>
  );
}

export default Footer;