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

        <Route exact path={"/trips"}>
          <TripsPage />
        </Route>

        <Route exact path={"/login"}>
          <LoginPage />
        </Route>

        <Route exact path={"/application"}>
          <ApplicationFormPage />
        </Route>

        <Route exact path={"/admin"}>
          <AdminHomePage />
        </Route>

        <Route exact path={"/createtrip/"}>
          <CreateTripPage />
        </Route>

        <Route exact path={"/tripdetails"}>
          <TripDetailsPage />
        </Route>

      </Switch>
    </BrowserRouter>

  
  );
}

export default App;
