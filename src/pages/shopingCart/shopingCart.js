import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {ShoppingCartSummary} from "../../components/shoppingCartSummary/ShoppingCartSummary"
import {ShoppingCartItems} from "../../components/shoppingCartItems/shoppingCartItems"
import {DeleteWarning} from "../../components/deleteWarning/deleteWarning";
import {useSelector} from "react-redux";
import {EmptyCart} from "../../components/emptyCart/emptyCart"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./shopingCartStyle.css"

export const ShopingCart = () => {
    const deleteMessage = useSelector(state => state.cart.deleteConfirm)
    const isEmpty = useSelector(state => state.cart.value.length)

    return (
        <Container className="vw-75 mt-3 ">
            {deleteMessage ? <DeleteWarning/> :
                    isEmpty <= 0 ? <EmptyCart/> :
                        <Row>
                            <Col lg={9} md={12}>
                                <ShoppingCartItems/>
                            </Col>
                            <Col lg={3} md={12} className="cartSummary">
                                <ShoppingCartSummary/>
                            </Col>
                        </Row>
                }
        </Container>
    )
}