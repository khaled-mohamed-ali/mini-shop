import "./ProductQuantityCounterStyle.css"
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai"
import {useDispatch, useSelector} from "react-redux";
import {plus,minus,hideNotificationMessage} from "../../store/shopingCartSlice";

export const ProductQuantityCounter = (props) => {
const dispatch = useDispatch();

const minusQuantity = () => {
    dispatch(minus(props.product.id))
    setTimeout(()=> {
        dispatch(hideNotificationMessage())
    },3000)
}
    const plusQuantity = () => {
        dispatch(plus(props.product.id))
        setTimeout(()=> {
            dispatch(hideNotificationMessage())
        },3000)
    }

    return (
        <div className="buttons-container d-flex justify-content-between align-items-end ">
            <button className="btn-primary" id="btn-primary" disabled={props.product.quantity <= 1}  onClick={()=> minusQuantity() }><AiOutlineMinus/></button>
            <div className="px-3">{props.quantity}</div>
            <button id="btn-primary" className="#btn-primary" disabled={props.quantity >= 15} onClick={()=> plusQuantity()}><AiOutlinePlus/></button>
        </div>
    )
}