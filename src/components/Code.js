// import { useState } from "react";
// import Header from "./Header"
// import { ReactDOM } from "react";
import QRCode from "qrcode.react";
import vcardsJs from "vcards-js";

const Code = (props) => {

const vCard=vcardsJs();
  for (const [name, value] of Object.entries(props)) {
    vCard[name] = value;
    vCard.version = '3.0';
  }
return (
<div className="QRCode">
          
          <QRCode
  value={vCard.getFormattedString()}
  size={128}
  bgColor={"#00ff0080"}
  fgColor={"#013e5d"}
  level={"L"}
  includeMargin={false}
  renderAs={"svg"}
/>
                 {/* <pre className="vCardoutput">{vCard.getFormattedString()}</pre> */}
        </div>
       
);
}
export default Code;
