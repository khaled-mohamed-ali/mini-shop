import React from "react";
import './deleteWarning.css';
import { BiTrashAlt } from "react-icons/bi";
import {GrFormClose} from "react-icons/gr"
import {useDispatch,useSelector} from "react-redux";
import {closeOpenDeleteConfirm,deleteFromCart,hideNotificationMessage} from "../../store/shopingCartSlice";



export const DeleteWarning = () => {
    const idToDeleteSpecfic = useSelector(state => state.cart.value.idCatcher)
    (idToDeleteSpecfic)
    const dispatch = useDispatch();
    const deleteFromTheCart = () => {
        dispatch(deleteFromCart(idToDeleteSpecfic));
        setTimeout( () => dispatch(hideNotificationMessage()),3000)
    }


    return(
        <div className={'warningPopUp'} >
            <div className={'deleteConfirmContainer'}>
                <div>
                    <button className={'first-btn'} onClick={ ()=> dispatch(closeOpenDeleteConfirm(false))}><GrFormClose className="fs-1"/></button>
                    <h2>تم ازالة المنتج من سلة التسوق</h2>
                </div>
                <p>هل تريد ازالة المنتج من سلة التسوق؟</p>
                <div><button className={'last-btn'} onClick={() => deleteFromTheCart()}><span>ازالة المنتج</span><span><BiTrashAlt/></span></button></div>
            </div>
        </div>
    )
}