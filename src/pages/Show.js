import { useState } from "react";
import QRCode from "qrcode.react";
import vcardsJs from "vcards-js";

function Show(props) {
  const id = props.match.params.id;
  const cardList = props.cardList;
  const Card = cardList.find((p) => p._id === id);

  // state for form
  const [editForm, setEditForm] = useState(Card);

  // onChange function for form for vCard
  const onChange = evt => {
    const {
      name,
      value
    } = evt.target;
    setEditForm({
      ...editForm,
      [name]: value
    });
  };

  const vCard = vcardsJs();
  for (const [name, value] of Object.entries(editForm)) {
    vCard[name] = value;
    vCard.version = '3.0';
  };
  const removeCard = () => {
    props.deletecardList(Card._id);
    props.history.push("/cardlist");
  };

  // handlesubmit for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.updatecardList(editForm, Card._id);
    props.history.push("/cardlist");
     };

  return (
 <form className="showForm" onSubmit={handleSubmit}>
    <div>
      <h3 style={{fontSize:'40px'}}> {Card.firstName} {Card.lastName}</h3>
      <div style={{alignSelf:'center'}} className="rowBtn">      
        <button type="button"id="delete" onClick={removeCard}>DELETE</button> 
        <button type="submit"> Update Card </button>
      </div>
      <div className="showField">
        <div className="FormField">
            <p className="Label">First Name</p>
            <input type="text" 
          value={editForm.firstName} 
          name="firstName" 
          placeholder="First Name"
          onChange={onChange} />
        </div> 
        <div className="FormField">
          <p className="Label">Last Name</p>
         <input type="text" value={editForm.lastName} name="lastName" placeholder="Doe"onChange={onChange}/>
       </div> 
       <div className="FormField">
         <p className="Label">Suffix</p>
         <input type="text" value={editForm.nameSuffix} name="nameSuffix" placeholder="Jr."onChange={onChange} />
       </div> 
       <div className="FormField">
         <p className="Label">Cell Phone</p>
         <input type="text" value={editForm.cellPhone} name="cellPhone" placeholder="312-555-1212" onChange={onChange}/>
       </div> 
       <div className="FormField">
           <p className="Label">Email</p>
           <input type="text" value={editForm.email} name="email" placeholder="johndoe@ACMECorporation.com" onChange={onChange} />
       </div>
      <div className="FormField">
         <p className="Label">Organization</p>
         <input type="text" value={editForm.organization} name="organization" placeholder="ACME Corporation" onChange={onChange} />
       </div> 
       <div className="FormField">
         <p className="Label">Title</p>
         <input type="text" value={editForm.title} name="title" placeholder="Software Developer" onChange={onChange}/>
       </div> 
       <div className="FormField">
           <p className="Label">Website/URL</p>
           <input type="text" value={editForm.url} name="url" placeholder="http://ACMECorporation.com" onChange={onChange} />
       </div>
       <div className="FormField">
         <p className="Label">Work Phone</p>
         <input type="text" value={editForm.workPhone} name="workPhone" placeholder="312-555-1212" onChange={onChange}/>
       </div> 
       <div className="FormField">
               <p className="Label">Address/Location</p>
               <input type="text" value={editForm.note} name="note" placeholder="12346 Main Street, Atlanta, GA 55555" onChange={onChange}/>
      </div>
     <div className="output">
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
       <div className="QRCode">
         <h4>QR Code (to save image, <br/> right-click -> Save Image As)</h4>
         <QRCode value={vCard.getFormattedString()} size={128} bgColor={"#90d9d1"} fgColor={"#013e5d"} level={"L"} includeMargin={false} renderAs={"canvas"}/>
        </div>
        <div className="VCard">
         <h4>VCard Data String</h4>
         <pre className="vCardoutput" style={{fontSize:'10px', maxHeight:'100px'}}>{vCard.getFormattedString()}</pre>
       </div>
       </div>
       </div>
       </div>
    </form>
  )
}
export default Show;