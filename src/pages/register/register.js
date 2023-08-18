import React, {useState} from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon, MDBCheckbox,
}
    from 'mdb-react-ui-kit';
import {useRegisterPostMutation} from "../../services/productsApi"
import {Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./registerStyle.css"
import {useDispatch, useSelector} from "react-redux";
import {hideNotificationMessage, registerNotification} from "../../store/shopingCartSlice"
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {BiHide, BiShow} from "react-icons/bi";


export const Register = () => {
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z,]/, 'Password can only contain Latin letters.')
    });


    const dispatch = useDispatch();
    const allRules = {"role": "admin", "avatar": "https://images.app.goo.gl/vGPLcYUHR47CEdf59"};
    const [register, {data, error, isSuccess}] = useRegisterPostMutation()
    const [showPass, setShowPass] = useState(false)

    const registerHandle = (user) => {
        register(user).unwrap().then((isSuccess) => {
            if (isSuccess) {
                return (

                    dispatch(registerNotification()),
                        setTimeout(() => dispatch(hideNotificationMessage()), 3000)
                )
            }
        })
    }


    if (isSuccess) {
        return (<Navigate replace to="/login"></Navigate>)
    }

    return (
        <>
            <MDBContainer fluid>
                <MDBCard className=' text-black  m-md-5 ' style={{borderRadius: '25px'}}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md='10' lg='6'
                                    className='order-2 order-lg-1 d-flex flex-column  align-items-center'>
                                <div style={{height: "100%"}} style={{maxHeight: "15%"}}>
                                    <p className="text-center  fw-bold  mx-1 mx-md-4 ">Sign up</p>
                                </div>
                                <Formik
                                    initialValues={{
                                        name: '',
                                        email: '',
                                        password: '',
                                    }}
                                    validationSchema={SignupSchema}
                                    onSubmit={values => {
                                        registerHandle({...allRules, ...values})
                                    }}
                                >
                                    {({errors, touched, handleSubmit, values}) => (
                                        <Form
                                            className=" inputsForm d-flex flex-column h-100   align-items-center w-100"
                                            onSubmit={handleSubmit}
                                        >
                                            <div>
                                                <Field name="name"
                                                       autoComplete="off"
                                                       value={values.name}
                                                       placeholder="your name"
                                                       style={errors.name ? {borderColor: "#B00020"} : null}
                                                       label='Your Name'
                                                       id='form1' type='text' className='w-100'/>
                                                {errors.name && touched.name ? (
                                                    <div
                                                        style={errors.name ? {color: "#B00020"} : null}>{errors.name}
                                                    </div>
                                                ) : null}
                                            </div>
                                            <div>

                                                <Field name="email"
                                                       autoComplete="off"
                                                       value={values.email}
                                                       placeholder="your email"
                                                       style={errors.email ? {borderColor: "#B00020"} : null}
                                                       label='Your email'
                                                       id='form2' type='text' className='w-100'
                                                />
                                                {errors.email && touched.email ? (
                                                    <div
                                                        style={errors.email ? {color: "#B00020"} : null}
                                                    >
                                                        {errors.email}
                                                    </div>
                                                ) : null}
                                            </div>
                                            <div>
                                                <Field name="password"
                                                       type={showPass ? "text" : "password"}
                                                       autoComplete="off"
                                                       value={values.password}
                                                       placeholder="password"
                                                       style={errors.password ? {borderColor: "#B00020"} : null}
                                                       label='Your password'
                                                       id='form3'
                                                       className='w-100'/>
                                                {errors.password && touched.password ? (
                                                    <div
                                                        style={errors.password ? {color: "#B00020"} : null}
                                                        className="errorMessage"
                                                    >
                                                        {errors.password}
                                                    </div>
                                                ) : null}
                                            </div>
                                            <div className="d-flex justify-content-start p-1">
                                                <div className="bolder">
                                                    <button type='button' onClick={e => setShowPass(!showPass)} className="showPass">
                                                        {showPass ? <BiShow/> : <BiHide/>}
                                                    </button>
                                                    {showPass ? " hide passowrd" : " show password"}
                                                </div>
                                            </div>
                                            <div>
                                                <button
                                                    type="submit" id="btn-primary"
                                                    className='btn-primary w-100 py-2 px-4 mb-4'
                                                    size='lg'
                                                    disabled={isSuccess}
                                                >Register
                                                </button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>

                            </MDBCol>


                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage
                                    src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'
                                    fluid/>
                            </MDBCol>

                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>


            </MDBContainer>
        </>
    );
}

