import '../component/Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer(){
    return(
        <div>
            <footer className="footer">
                <div className='contenu'>
                <p> © Nyugga 2022 </p>
                <p><GitHubIcon /> Theo Versluys </p>
                <p><LinkedInIcon /> Theo Versluys</p>
                </div>
            </footer>
        </div>
    )
}