import Container from "react-bootstrap/Container";
import {Product} from "../../components/product/product";
import {Col, Row} from "react-bootstrap";
import {useGetAllProductsQuery} from "../../services/productsApi";
import {useSelector} from "react-redux";


export const ProductsContainer = () => {
    const pageNumber = useSelector(state => state.cart.pageNumber)
    const {data} = useGetAllProductsQuery(pageNumber);
    if(data === undefined) {return []}
    return  (
        <Container className="mt-4 w-75">
            <Row className="gap-0">
                    {data.map((product,index) => {
                        return (
                            <Col key={index} xl={3} lg={4}  sm={6} xs={12} className="mb-4  p-0" >
                                <Product product={product}/>
                            </Col>
                        )
                    })}
            </Row>
        </Container>
   )
}

