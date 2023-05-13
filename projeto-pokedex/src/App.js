import React from "react";
import { GlobalStyles } from "./GlobalStyles";
import { Router } from "./Router/Router";
import { GlobalContext } from "./Global/GlobalContext"
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "./constants/url";
import { GlobalState } from "./Global/GlobalState";

function App(){
 
  return(
    <div>
      <GlobalStyles/>
      <GlobalState>
      <Router/>
      </GlobalState>
    </div>
  )
}

export default App;