import React, {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useUserLoginPostMutation} from "../../services/productsApi"
import {useState} from "react";
import {setCredentials, setLogin} from "../../store/authSlice"
import {Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./loginStyle.css"

import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import {SlSocialTwitter} from "react-icons/sl";
import {TiSocialFacebook, TiSocialLinkedin, TiSocialYoutube} from "react-icons/ti";
import {useDispatch, useSelector} from "react-redux";
import {NotificationBar} from "../../components/notificationBar/notificationBar";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export const Login = () => {

    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z,]/, 'Password can only contain Latin letters.')
    });

    const dispatch = useDispatch()
    const [login, {data, isSuccess}] = useUserLoginPostMutation();
    const [user, setUser] = useState('')

    if (data && isSuccess) {
        dispatch(setCredentials(data.access_token))
        dispatch(setLogin(true))
    }
    if (isSuccess) {
        return <Navigate replace to="/"/>
    } else {

        return (
            <MDBContainer className="loginContainer pt-5  my-5 d-flex flex-column  h-100">
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}

                    validationSchema={SignupSchema}
                    onSubmit= { values => {
                        login(values)
                    }}
                >
                    {({errors, touched, handleSubmit,values}) => (
                        <Form onSubmit={handleSubmit}>
                            <Field className={"inputFiled"} name= "email"  wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
                            {errors.email && touched.email ? (
                                <div
                                    style={errors.email ? {color: "#B00020"} : null}
                                >
                                    {errors.email}
                                </div>
                            ) : null}
                            <Field  className={"inputFiled"} name="password" wrapperClass='mb-4' label='Password' id='form2' type='password'/>
                            {errors.password && touched.password ? (
                                <div
                                    style={errors.password ? {color: "#B00020"} : null}
                                >
                                    {errors.password}
                                </div>
                            ) : null}

                            <div className="d-flex justify-content-between mx-3 mb-4">
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me'/>
                                <a  id="aLink" href="!#">Forgot password?</a>
                            </div>
                            <button type="submit" id="btn-primary" className='btn-primary  w-100 py-2 px-4 mb-4' size='lg'
                            >login
                            </button>
                        </Form>
                        )}
                </Formik>

                <div className="text-center">
                    <p>Not a member? <a d="aLink" href="/register">Register</a></p>
                    <p>or sign up with:</p>
                    <div className="text-center text-dark p-3">
                        <ul className="list-unstyled d-flex justify-content-around">
                            <li><SlSocialTwitter/></li>
                            <li><TiSocialFacebook/></li>
                            <li><TiSocialLinkedin/></li>
                            <li><TiSocialYoutube/></li>
                        </ul>
                    </div>
                </div>

            </MDBContainer>

        );
    }
}

