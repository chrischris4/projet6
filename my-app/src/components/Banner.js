import logo from '../assets/LOGO.png'
import '../styles/Banner.css'

function Banner() {
    const title = 'La maison jungle'
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='kasa' className='kasa-logo' />
            <h1 className='lmj-title'>{title}</h1>
        </div>
    )
}

export default Banner