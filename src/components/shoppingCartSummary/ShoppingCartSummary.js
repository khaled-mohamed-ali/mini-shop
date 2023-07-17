import "./shoppingCartSummary.css"
import {useSelector} from "react-redux";

export const ShoppingCartSummary = () => {

    const product = useSelector(state => state.cart.value)
        const calcTotalPrice = product.map(product => product).reduce((a,b) => a  +  b.price * b.quantity,0);


    return  (
       <aside className="d-flex flex-column asideMain ">
           <div className="text-start">CART SUMMARY</div>
           <div className="d-flex flex-row justify-content-between border-bottom border-top ">
               <div>Subtotal</div>
               <div className="fs-6 dark">{calcTotalPrice} EGP</div>
           </div>
           <div className="p-2"><button href="" className="btn-primary d-block p-2 rounded-1 w-100">CHECKOUT ( )</button></div>
       </aside>
    )
}
