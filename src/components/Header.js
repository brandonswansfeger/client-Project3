import {
  Link
} from "react-router-dom";



function Header(props) {
  return ( 
    
    <
    nav className = "nav" >
    <
    Link to = "/" >
    <
    h1 > AddMe-QRC <span style={{fontSize:"large"}}>. . . . create your own personal QR Code</span>< /h1> <
    /Link> 
   
    </nav>
  );
}

export default Header;