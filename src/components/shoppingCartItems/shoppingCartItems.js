import {useSelector,useDispatch} from "react-redux"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./shopingCartItemsStyle.css"
import {ProductQuantityCounter} from "../productQuantityCounter/productQuantityCounter"
import {addToIdCatcher,closeOpenDeleteConfirm} from "../../store/shopingCartSlice"
import {FiTrash} from "react-icons/fi"




export const ShoppingCartItems = () => {
    const dispatch = useDispatch()
    const product = useSelector(state => state.cart.value)
    const itemCount = product.map(ele => ele.quantity).reduce((a,b) => a + b,0)

    const showDeletePop = (id) => {
        dispatch(addToIdCatcher(id))
        dispatch(closeOpenDeleteConfirm(true))
    }

    return (
        <Row>
            <div className="d-flex flex-column justify-content-between bg-white rounded">
                <div className="header h5  text-start p-1  border-bottom">cart ({itemCount})</div>
                {product.map((product, index) => {
                    return (
                        <article key={index} className="p-2 py-3 px-0 product">
                            <Row className="mx-1 justify-content-between ">
                                <Col  md={2} xs={{span:6,order:1}} className="img-container ps-0 position-relative" >
                                    <img className="position-absolute rounded-2 top-0 start-0 product-img ps-0 pt-1" src={product.images[0]} alt=""/>
                                </Col>
                                <Col  md={{span:8,order:2}}  xs={{span:12,order:3}} className="product-text ps-2  py-0 pt-1 text-start "><p>{product.description}</p></Col>
                                <Col  md={{span:2,order:3}} xs={{span:6,order:2}} className= "product-price  text-end px-0 pt-1"><span>{product.price} EGP</span></Col>
                            </Row>
                            <div className="d-flex justify-content-between align-baseline pt-2">
                                <div className="trachIcone" onClick={()=> showDeletePop(product.id)}><FiTrash/> REOMVE</div>
                                <div><ProductQuantityCounter product={product} quantity={product.quantity} /></div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </Row>
    )
}