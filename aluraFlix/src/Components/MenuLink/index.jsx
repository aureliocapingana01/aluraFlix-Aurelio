import { Link, useLocation } from "react-router-dom";
// import Home from "../../pages/Home";

const MenuLink = ({children, to}) => {

  const localizacao = useLocation();

  return (
    <Link
      className={`
      ${localizacao.pathname === to ? ola: ""}`}
      to={to}
    >
      {children}
    </Link>
    
  );
};
export default MenuLink;
