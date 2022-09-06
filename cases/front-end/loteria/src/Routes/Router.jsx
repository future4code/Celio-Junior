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
                <Route path="/" element={<MegaSena/>}/>

                <Route path="/lotofacil" element={<LotoFacil/>}/>

                <Route path="/lotomania" element={<LotoMania/>}/>        

                <Route path="/quina" element={<Quina/>}/>
                    
                <Route path="/timemania" element={<TimeMania/>}/>
                    
                <Route path="/diadesorte" element={<DiaDeSorte/>}/>
                    
                <Route element={<Error/>}/>
            </Routes>
    )
}

export default Router