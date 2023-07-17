import {ProductsContainer} from "../productsContainer/productsContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './mainPageStyle.css'
import {Footer} from "../../components/footer/footer";
import {PaginationButtons} from "../../components/pagination/paginations";



export const MainPage = () => {
    return (
        <div className="mainPage">
            <ProductsContainer/>
            <PaginationButtons/>
            <Footer/>
        </div>
    )
}