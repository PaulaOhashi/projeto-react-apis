import React from "react";
import { GlobalStyles } from "./GlobalStyles";
import { Router } from "./Router/Router";
import { GlobalState } from "./Global/GlobalState";
import Modal from "./Components/Modal/Modal";
import { GlobalContext } from "./Global/GlobalContext";

function App(){

  const context = GlobalState()

  return(
    <div>
      <GlobalStyles/>
      <GlobalContext.Provider value={context}>
      <Router/>
      {context.showModal ? <Modal action={context.action}/>:''}
      </GlobalContext.Provider>
    </div>
  )
}

export default App;