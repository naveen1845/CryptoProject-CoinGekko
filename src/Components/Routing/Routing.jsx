import { Route, Routes } from "react-router-dom"
import MainLayout from "../../Pages/Layout"
import { lazy, Suspense } from "react"

const Home = lazy(() => import("../../Pages/Home"));
const CoinDetails = lazy(() => import("../../Pages/CoinDetails"))

function Routing() {
    return(
        <Routes>
            <Route path="/" element = {<MainLayout/>}>

                <Route index element = {
                    <Suspense fallback={<>Loading Home..</>}>
                        <Home />
                    </Suspense>
                 }
                />


                <Route path="/details/:coinId" element={
                    <Suspense fallback={<>Loading details..</>}>
                        <CoinDetails />
                    </Suspense>
                 } 
                />

            </Route>
        </Routes>
    )
}

export default Routing