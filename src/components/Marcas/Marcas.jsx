import '../../styles/marcas/marcas.css'
import acura from '../../assets/images/car brands/acura.png'
import audi from '../../assets/images/car brands/audi.png'
import bmw from '../../assets/images/car brands/bmw.png'
import chevrolet from '../../assets/images/car brands/chevrolet.png'
import citroen from '../../assets/images/car brands/citroen.png'
import dodge from '../../assets/images/car brands/dodge.png'
import fiat from '../../assets/images/car brands/fiat.png'
import ford from '../../assets/images/car brands/ford.png'
import honda from '../../assets/images/car brands/honda.png'
import hyundai from '../../assets/images/car brands/hyundai.png'
import isuzu from '../../assets/images/car brands/isuzu.png'
import jeep from '../../assets/images/car brands/jeep.png'
import kia from '../../assets/images/car brands/kia.png'
import land_rover from '../../assets/images/car brands/land_rover.png'
import lexus from '../../assets/images/car brands/lexus.png'
import mazda from '../../assets/images/car brands/mazda.png'
import mercedes_benz from '../../assets/images/car brands/mercedes_benz.png'
import mini from '../../assets/images/car brands/mini.png'
import mitsubishi from '../../assets/images/car brands/mitsubishi.png'
import nissan from '../../assets/images/car brands/nissan.png'
import peugeot from '../../assets/images/car brands/peugeot.png'
import renault from '../../assets/images/car brands/renault.png'
import subaru from '../../assets/images/car brands/subaru.png'
import suzuki from '../../assets/images/car brands/suzuki.png'
import toyota from '../../assets/images/car brands/toyota.png'
import volkswagen from '../../assets/images/car brands/volkswagen.png'
import volvo from '../../assets/images/car brands/volvo.png'

export default function Marcas() {
    return (
        <section className='section__marcas'>
            <div className='div__marcas animate__animated animate__fadeIn animate__delay-2s'>
                <img className='img__marca' src={acura} alt='acura logo' />
                <img className='img__marca' src={audi} alt='audi logo' />
                <img className='img__marca less_width' src={bmw} alt='bmw logo' />
                <img className='img__marca' src={chevrolet} alt='chevrolet logo' />
                <img className='img__marca less_width' src={citroen} alt='citroen logo' />
                <img className='img__marca more_width' src={dodge} alt='dodge logo' />
                <img className='img__marca' src={fiat} alt='fiat logo' />
                <img className='img__marca' src={ford} alt='ford logo' />
                <img className='img__marca' src={honda} alt='honda logo' />
                <img className='img__marca' src={hyundai} alt='hyundai logo' />
                <img className='img__marca' src={isuzu} alt='isuzu logo' />
                <img className='img__marca' src={jeep} alt='jeep logo' />
                <img className='img__marca' src={kia} alt='kia logo' />
                <img className='img__marca' src={land_rover} alt='land_rover logo' />
                <img className='img__marca' src={lexus} alt='lexus logo' />
                <img className='img__marca' src={mazda} alt='mazda logo' />
                <img className='img__marca' src={mercedes_benz} alt='mercedes_benz logo' />
                <img className='img__marca' src={mini} alt='mini logo' />
                <img className='img__marca less_width' src={mitsubishi} alt='mitsubishi logo' />
                <img className='img__marca less_width' src={nissan} alt='nissan logo' />
                <img className='img__marca' src={peugeot} alt='peugeot logo' />
                <img className='img__marca less_width' src={renault} alt='renault logo' />
                <img className='img__marca' src={subaru} alt='subaru logo' />
                <img className='img__marca' src={suzuki} alt='suzuki logo' />
                <img className='img__marca less_width' src={toyota} alt='toyota logo' />
                <img className='img__marca less_width' src={volkswagen} alt='volkswagen logo' />
                <img className='img__marca' src={volvo} alt='volvo logo' />
            </div>
        </section>
    )
}
