import React, {useEffect} from 'react';
import {useGetAllProductsSearchQuery} from "../../services/productsApi";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {Product} from "../../components/product/product";
import {useSelector} from "react-redux";
import {Header} from "../../components/header/header";
import {useSearchParams} from "react-router-dom";

const SearchPage = () => {
    const searchResults = useSelector(state => state.cart.searchResult);
    const searchItemName = useSelector(state => state.cart.searchItemName)
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setSearchParams({query: searchItemName})
    }, [])

    return (
        <div className="">
            <Container className="mt-4 w-75">
                <h3 className="text-start">search results for {searchItemName}</h3>
                <Row className="gap-0">
                    {searchResults.map((product, index) => {
                        return (
                            <Col key={index} xl={3} lg={4} sm={6} xs={12} className="mb-4  p-0">
                                <Product product={product}/>
                            </Col>
                        )
                    })}
                </Row>
            </Container>

        </div>
    );
};
export default SearchPage;
