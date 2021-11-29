import {
  useEffect,
  useState
} from "react";
import {
  Route,
  Switch
} from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";
import InputForm from "../pages/InputForm";




function Main(props) {
  const [cardList, setcardList] = useState(null);

  const URL = "https://backend-addmeqrc.herokuapp.com/cardlist/";

  const getcardList = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setcardList(data);
  };

  console.log(cardList);

  const createcardList = async (card) => {
    // make post request to create cardList
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(card),
    });
    // update list of cardList
    getcardList();
    console.log(cardList);
  };

  const updatecardList = async (card, id) => {
    // make put request to create cardList
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(card),
    });
    // update list of cardList
    getcardList();
  };

  const deletecardList = async (id) => {
    // make delete request to create cardList
    await fetch(URL + id, {
      method: "DELETE",
    });
    // update list of cardList

    getcardList();
  };

  useEffect(() => getcardList(), []);

  return ( 
   <main>
    <Switch>
    <Route exact path="/">
      <InputForm createcardList = {createcardList}/> 
      </Route>
      <Route exact path = "/cardlist" render = { (rp) => ( < Index cardList={cardList} getcardList={getcardList} {...rp} /> 
      )} />
      <Route path = "/cardlist/:id"
    render = {
      (rp) => ( <
        Show cardList = {
          cardList
        }
        updatecardList = {
          updatecardList
        }
        deletecardList = {
          deletecardList
        } {
          ...rp
        }
        />
      )
    }
    /> < /
    Switch > <
    /main>
  );
}

export default Main;