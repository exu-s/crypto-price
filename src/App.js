import Recherche from "./components/recherche";
import React from "react";
import Accueil from "./components/accueil";
import Page404 from "./components/page404";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Accueil} exact={true} />
            <Route path="/Recherche" component={Recherche} />
            <Route path="*" component={Page404} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
