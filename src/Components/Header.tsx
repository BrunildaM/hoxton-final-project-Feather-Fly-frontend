import logo from './assets/logo.png'
import './Header.css' 

export function Header () {
    return (
        <div className='header'>
           <img className='logo' src={logo} alt="logo" />
           <h1 className='moto'>FEATHER FLY, REACH THE SKY!</h1>
        </div>
    )
}