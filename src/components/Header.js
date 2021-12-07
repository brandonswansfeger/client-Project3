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
    h1 > AddMe - QRC < /h1> <
    /Link> <
    h2 >. . . . create your own personal QR Code< /h2>
    <img src="https://i.ibb.co/XxWRNvC/Picture7.png" alt="alternatetext"  width="100" height="100"></img>
    <
    /nav>
  );
}

export default Header;