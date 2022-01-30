import React from 'react';
import { HomePage } from './Pages/HomePage'
import { TripsPage } from './Pages/TripsPage'
import { LoginPage } from './Pages/LoginPage';
import { ApplicationFormPage } from './Pages/ApplicationFormPage'
import { AdminHomePage } from './Pages/AdminHomePage'
import { CreateTripPage } from './Pages/CreateTripPage'
import { TripDetailsPage } from './Pages/TripDetailsPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/tripspage"}>
          <TripsPage />
        </Route>

        <Route exact path={"/loginpage"}>
          <LoginPage />
        </Route>

        <Route exact path={"/applicationformpage"}>
          <ApplicationFormPage />
        </Route>

        <Route exact path={"/adminhomepage"}>
          <AdminHomePage />
        </Route>

        <Route exact path={"/createtrippage/"}>
          <CreateTripPage />
        </Route>

        <Route exact path={"/tripdetailspage"}>
          <TripDetailsPage />
        </Route>

      </Switch>
    </BrowserRouter>

  
  );
}

export default App;
