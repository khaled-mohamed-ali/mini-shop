import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {AiOutlineShoppingCart,AiOutlineUser} from 'react-icons/ai'
import {Link} from "react-router-dom"
import {FiHelpCircle} from "react-icons/fi"
import {MdLogout} from "react-icons/md"
import {BsFillStarFill} from "react-icons/bs"
import './headerStyle.css'
import {useDispatch, useSelector} from "react-redux";
import {setLogin} from "../../store/authSlice"


 export const  Header = () => {
    const dispatch = useDispatch()
     const product = useSelector(state => state.cart.value)
     const itemCount = product.map(ele => ele.quantity).reduce((a,b) => a + b,0)

     return (
         <div className="Header mt-4">
             <Navbar bg='white' expand="lg">
                 <Container className='justify-content-between w-75'>
                     <Navbar.Brand className="fw-bolder pageName"><Link to="/">MINI SHOP <div className="starContainer"><BsFillStarFill className="logoStart"/></div> </Link></Navbar.Brand>
                     <Navbar.Toggle aria-controls="navbarScroll"/>
                     <Navbar.Collapse id="navbarScroll" className="justify-content-between flex-grow-1">
                         <Form className="d-flex flex-grow-1  justify-content-center ">
                             <Form.Control
                                 type="search"
                                 placeholder="Search"
                                 className="me-2 w-50"
                                 aria-label="Search"
                             />
                             <Button variant="outline-success" className="btn-primary fs-6">Search</Button>
                         </Form>
                         <Nav className="me-auto my-2 my-lg-0 fs-7 fw-semibold" style={{maxHeight: '100px'}} navbarScroll>
                             <NavDropdown title={<span><AiOutlineUser className="fs-3"/>&nbsp;&nbsp;login&nbsp;&nbsp;</span>} id="navbarScrollingDropdown">
                                 <NavDropdown.Item ><Link to="register">Register</Link></NavDropdown.Item>
                                 <NavDropdown.Item ><Link to="login">Login</Link></NavDropdown.Item>
                                 <NavDropdown.Item ><Link onClick={() => dispatch(setLogin(false))}>logout &nbsp;&nbsp;&nbsp;<MdLogout/></Link></NavDropdown.Item>

                             </NavDropdown>
                             <Nav.Link ><FiHelpCircle className="fs-3"/>&nbsp;&nbsp;Help</Nav.Link>
                             <Nav.Link className="position-relative">
                                 <div className="wrap-circle position-relative">{itemCount?
                                 <div className="orangeCircle  position-absolute">{itemCount}</div>:""}
                                 <Link  to="/shoppingCart"> <AiOutlineShoppingCart className="fs-3"/>  Cart</Link> <i className="bi bi-cart3"/>
                             </div>
                             </Nav.Link>
                         </Nav>
                     </Navbar.Collapse>
                 </Container>
             </Navbar>
         </div>
     );
}

