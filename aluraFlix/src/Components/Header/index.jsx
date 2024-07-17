// import MenuLink from "../MenuLink";
import logo from '../../../public/image/logo.png'
import { HeaderLogo } from './Estilo'


const Header = () => {
  return (
    <HeaderLogo>
   <img src={logo} alt="logo do site AluraFlix" />
   <nav>
    <a href="#">Home</a>
    <a href="#">Novo-Videos</a>
  
   </nav>

  
        {/* <MenuLink to="/">Inicio</MenuLink>
        <MenuLink to="/">Sobre Mim</MenuLink> */}
    
    </HeaderLogo>
  
  )
}
export default Header