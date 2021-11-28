import React from "react";
import VirtualCard from "../components/VirtualCard";
// import cardList from "../components/Main"

function Index(props) {
 
  
    // loaded function
    const loaded = () => {
    
    return props.cardList.map((Card, index) => (
    <div>
    <VirtualCard key={Card._id}{...Card} />
    </div>
    
            
    ));
  };

    
      
  const loading = () => {
    return <h1>Loading...</h1>;
  };
     return (
      <section>
         {props.cardList ? loaded() : loading()}
      </section>
    );
      
     }
  export default Index;