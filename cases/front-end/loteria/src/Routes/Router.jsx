import React from "react"
import { Routes, Route } from "react-router-dom"
import DiaDeSorte from "../Pages/DiaDeSorte/DiaDeSorte"
import Error from "../Pages/Error/Error"
import LotoFacil from "../Pages/LotoFacil/LotoFacil"
import LotoMania from "../Pages/LotoMania/LotoMania"
import MegaSena from "../Pages/MegaSena/MegaSena"
import Quina from "../Pages/Quina/Quina"
import TimeMania from "../Pages/TimeMania/TimeMania"

const Router = () => {

    return (
            <Routes>
                <Route exact path="/lotofacil">
                    <LotoFacil />
                </Route>

                <Route exact path="/lotomania">
                    <LotoMania />
                </Route>

                <Route exact path="/">
                    <MegaSena />
                </Route>

                <Route exact path="/quina">
                    <Quina />
                </Route>

                <Route exact path="/timemania">
                    <TimeMania />
                </Route>

                <Route exact path="/diadesorte">
                    <DiaDeSorte />
                </Route>

                <Route>
                    <Error />
                </Route>
            </Routes>
    )
}

export default Router