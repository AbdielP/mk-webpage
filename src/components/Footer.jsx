import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__left'>
        <h4>TALLER <span>M</span><span className="span__k">K</span> ®</h4>
        <div>
          <small className="small__footer">Mecánica General Avanzada</small>
          <small className="small__footer">Avenida Ernesto T. Lefevre. Frente a la estación Delta</small>
        </div>
      </div>

      <div className='footer__right'>
        <div className='div__social'>
          <InstagramIcon />
          <FacebookIcon />
          <small className='small__phone'><LocalPhoneIcon fontSize="inherit" sx={{marginRight: '.3em'}}/> +507 6490-0247</small>
        </div>
      </div>
    </footer>
  )
}
