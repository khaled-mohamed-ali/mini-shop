import {Card,Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./productStyle.css"
import {useDispatch, useSelector} from "react-redux";
import {addToCart,hideNotificationMessage} from "../../store/shopingCartSlice";
import {ProductQuantityCounter} from "../productQuantityCounter/productQuantityCounter";


export const  Product = (props) => {
    const dispatch = useDispatch();
    const addItemToCart = (product) => {
                  dispatch(addToCart(product))
                 setTimeout( ()=> dispatch(hideNotificationMessage()),3000)
    }
    const changeButtons = useSelector(state => state.cart.value.find(q => q.id == props.product.id)?.quantity)
        return (
            <Card className="product-card position-relative border-0 rounded-0 p-3" style={{height: '32rem'}}>
                <Card.Img variant="top" src={props.product.images} className="productImg   p-3 pb-0 "/>
                <Card.Body className="d-flex row justify-content-between">
                    <Card.Title style={{maxHeight: "30px", overflow: "hidden"}}>{props.product.title}</Card.Title>
                    <Card.Text className="productDescription lh-1.1"
                               style={{wordBreak: "break-all"}}>{props.product.description}</Card.Text>
                    <Card.Text
                        className="productPrice p-auto fs-6 fw-semibold">{`${props.product.price} EGP`}</Card.Text>
                    {changeButtons >= 1 ? <div className="product-btn"><ProductQuantityCounter product={props.product}  quantity={changeButtons} /></div>:
                    <Button  id="btn-primary" variant="primary product-btn fs-6 fw-bold " className=" mt-auto d-block product-btn"
                            onClick={() => addItemToCart(props.product)}>ADD TO CART</Button>
                    }
                </Card.Body>
            </Card>
        );
    }