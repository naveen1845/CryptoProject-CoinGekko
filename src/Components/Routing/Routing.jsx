import { Route, Routes } from "react-router-dom"
import MainLayout from "../../Pages/Layout"
import { lazy, Suspense } from "react"
import MyCustomLoader from "../Loaders/MyCustomLoader";
import CustomErrorBoundary from "../CustomErrorBoundary/CustomErrorBoundary";

const Home = lazy(() => import("../../Pages/Home"));
const CoinDetails = lazy(() => import("../../Pages/CoinDetails"))

function Routing() {
    return(
        <CustomErrorBoundary>
            <Routes>
            <Route path="/" element = {<MainLayout/>}>

                <Route index element = {
                    <Suspense fallback={<MyCustomLoader/>}>
                        <Home />
                    </Suspense>
                 }
                />


                <Route path="/details/:coinId" element={
                    <Suspense fallback={<MyCustomLoader/>}>
                        <CoinDetails />
                    </Suspense>
                 } 
                />

            </Route>
            </Routes>
        </CustomErrorBoundary>
        
    )
}

export default Routing