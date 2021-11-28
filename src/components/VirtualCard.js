import React from "react";
import { Link } from "react-router-dom";
import Code from "./Code";



const VirtualCard = (props) => {
  return (
    <div>
       <div key={props._id} className="props" tag={props.role}>
       <Link to={`/cardList/${props._id}`}> 
       <h3> {props.role}</h3>
          <div className="Btn" >
            <p className="Organization">{props.organization}</p>
           <div>
  
           <p className="Name">{props.firstName} {props.lastName}</p>
             <p className="Title">{props.title}</p>
            </div>
             <div className="CardCode">
              <Code {...props} />
             </div>
           </div>
        </Link>
      </div>
      </div>
          )};
    export default VirtualCard;