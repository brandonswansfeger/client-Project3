import { useState } from "react";
// import { Link } from "react-router-dom";
import QRCode from "qrcode.react";
import vcardsJs from "vcards-js";
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom";


function InputForm(props) {

  const [newForm, setnewForm]=useState({
    
      firstName: "", 
      lastName: "", 
      nameSuffix: "",
      cellPhone: "",
      email: "",
      organization: "", 
      title: "",
      url: "",
      workPhone: "",
      note: "",
      role: "",
    });

  const onChange = evt => {
    const { name, value } = evt.target;
    setnewForm({
      ...newForm,
      [name]: value
    });
  };

  const vCard=vcardsJs();
  for (const [name, value] of Object.entries(newForm)) {
    vCard[name] = value;
    vCard.version = '3.0';
  }
let history = useHistory()


      
const handleSubmit = (event) => {
    event.preventDefault();
    props.createcardList(newForm);
    history.push("/cardList");
          setnewForm({
      firstName: "", 
      lastName: "", 
      nameSuffix: "",
      cellPhone: "",
      email: "",
      organization: "", 
      title: "",
      url: "",
      workPhone: "",
      note: "",
      role: "",
     
    });
  
       

  };


  return (
<div className="InputForm">
 <form className="RegForm" onSubmit={handleSubmit}>
 <div className="H7"> <strong>Step 1:</strong> Enter desired contact details and the QR Code below will update as you type. <br/><strong>Step 2:</strong> Simply take a picture with phone or save as image to your local computer.</div>
   <div className="InputField">
      <div className="FormField">
            <p className="Label">
            First Name</p>
            <input
           type="text" 
          
           value={newForm.firstName} 
           name="firstName" 
           placeholder="First Name"
           onChange={onChange} 
            />
        </div> 
        <div className="FormField">
          <p className="Label">Last Name</p>
          <input
           type="text" value={newForm.lastName} name="lastName" placeholder="Doe"onChange={onChange} 
            />
        </div> 
        <div className="FormField">
          <p className="Label">Suffix</p>
          <input
           type="text" value={newForm.nameSuffix} name="nameSuffix" placeholder="Jr."onChange={onChange} 
            />
        </div> 
        <div className="FormField">
          <p className="Label">Cell Phone</p>
          <input
          type="text" value={newForm.cellPhone} name="cellPhone" placeholder="312-555-1212" onChange={onChange}/>
        </div> 
        <div className="FormField">
            <p className="Label">Email</p>
            <input
               type="text" value={newForm.email} name="email" placeholder="johndoe@ACMECorporation.com" onChange={onChange} />
        </div>
        <div className="FormField">
          <p className="Label">Organization</p>
          <input
           type="text" value={newForm.organization} name="organization" placeholder="ACME Corporation" onChange={onChange} />
        </div> 
        <div className="FormField">
          <p className="Label">Title</p>
          <input
            type="text" value={newForm.title} name="title" placeholder="Software Developer" onChange={onChange}/>
        </div> 
        <div className="FormField">
            <p className="Label">Website/URL</p>
            <input
               type="text" value={newForm.url} name="url" placeholder="http://ACMECorporation.com" onChange={onChange} />
        </div>
        <div className="FormField">
          <p className="Label">Work Phone</p>
          <input
          type="text" value={newForm.workPhone} name="workPhone" placeholder="312-555-1212" onChange={onChange}/>
        </div> 
        <div className="FormField">
                <p className="Label">Address/Location</p>
                <input
                  type="text" value={newForm.note} name="note" placeholder="12346 Main Street, Atlanta, GA 55555" onChange={onChange}/>
       </div>
       </div> 
    
      
         
        <div className="output">
          <div className="Add" style={{width:'250px', border:'solid 2px #F5F0EC'}}>
        <button type="submit"><strong> +  Add to VIRTUAL DIRECTORY after choosing category below</strong></button>
        <div>
          <select type="text" className="form-control form-control-lg" placeholder="Priority" name="role" value="" onChange={onChange} onSubmit={handleSubmit}>
                <option>Accounting & Tax Services</option>
                <option>Arts, Culture & Entertainment</option>
                <option>Auto Sales & Service</option>
                <option>Banking & Finance</option>
                <option>Business Services</option>
                <option>Community Organizations</option>
                <option>Dentists & Orthodontists</option>
                <option>Education</option>77
                <option>Health & Wellness</option>
                <option>Health Care</option>
                <option>Home Improvement</option>
                <option>Insurance</option>
                <option>Internet & Web Services</option>
                <option>Legal Services</option>
                <option>Lodging & Travel</option>
                <option>Marketing & Advertising</option>
                <option>News & Media</option>
                <option>Pet Services</option>
                <option>Real Estate</option>
                <option>Restaurants & Nightlife</option>
                <option>Shopping & Retail</option>
                <option>Sports & Recreation</option>
                <option>Transportation</option>
                <option>Utilities</option>
                <option>Wedding, Events & Meetings</option>
                <option>Other</option>
            </select>
         </div>
          <button type="button"><Link to={`/cardList/`} className="Link">VIRTUAL DIRECTORY</Link></button>
         </div>
        
         <div className="QRCodeBox">
          <h4 style={{fontWeight:"bold"}}>QR Code (to save image, <br/> right-click -> Save Image As)</h4>
          <QRCode
  value={vCard.getFormattedString()}
  size={128}
  bgColor={"#90d9d1"}
  fgColor={"#013e5d"}
  level={"L"}
  includeMargin={false}
  renderAs={"canvas"}
/>
        </div>
           <div className="VCard">
          <h4>VCard Data String</h4>
          <pre className="vCardoutput">{vCard.getFormattedString()}</pre>
        </div>
      </div>
     </form>
    </div>
   )};


export default InputForm;