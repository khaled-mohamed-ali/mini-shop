import Pagination from 'react-bootstrap/Pagination';
import "./paginationStyle.css"
import {useGetAllProductsQuery} from "../../services/productsApi"
import {changePageNumber} from "../../store/shopingCartSlice"
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";



export  const PaginationButtons = () => {
    const dispatch = useDispatch()
    const pageNumber = useSelector(state=> state.cart.pageNumber)

    return  (
        <Pagination className="mainPagination justify-content-around">
            <Pagination.Prev disabled={pageNumber <= 1} onClick={()=> dispatch(changePageNumber(pageNumber- 1))} />
            <Pagination.Item className="active">{pageNumber}</Pagination.Item>
            <Pagination.Next disabled={pageNumber >= 20}  onClick={()=> dispatch(changePageNumber(pageNumber + 1))}/>
        </Pagination>


    )
}



