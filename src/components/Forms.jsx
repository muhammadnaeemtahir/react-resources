// import react icons 
import { HiExternalLink } from "react-icons/hi";

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('First name is required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Last name is required'),
    email: Yup.string().email('Please provide a valid email').required('Email is required'),
});


export const Forms = ({ title = 'Form Validations' }) => {


    return (
        <>
            <section className="py-5 border-bottom border-dark border-2" id="form-validations">
                <h1 className="text-center display-4">{title}</h1>
                <p className="text-center">Formik & Yup</p>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        alert(`First name: ${values.firstName} \nLast name: ${values.lastName} \nEmail: ${values.email}`)
                        // console.log(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <div className="row my-5">
                                <div className="col-12">
                                    <div className="col-md-6 mb-3 mx-auto">
                                        <Field name="firstName" placeholder="Enter your first name" className="form-control bg-light" />
                                        {errors.firstName && touched.firstName ? (
                                            <p className="text-primary">{errors.firstName}</p>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="col-md-6 mb-3 mx-auto">
                                        <Field name="lastName" placeholder="Enter your last name" className="form-control bg-light" />
                                        {errors.lastName && touched.lastName ? (
                                            <p className="text-primary">{errors.lastName}</p>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="col-md-6 mb-3 mx-auto">
                                        <Field name="email" type="email" placeholder="Enter your email address" className="form-control bg-light" />
                                        {errors.email && touched.email ? <p className="text-primary">{errors.email}</p> : null}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="col-md-4 mx-auto">
                                        <button type="submit" className="btn btn-lg btn-primary w-100">Submit</button>
                                    </div>
                                </div>

                            </div>
                        </Form>
                    )}
                </Formik>
                <a className="d-block text-center" href="https://formik.org/docs/overview" target='_blank'>
                    <HiExternalLink size='1.2rem' className="me-1" />
                    https://formik.org/docs/overview
                </a>
                <br className="" />
                <a className="d-block text-center" href="https://formik.org/docs/guides/validation" target='_blank'>
                    <HiExternalLink size='1.2rem' className="me-1" />
                    https://formik.org/docs/guides/validation
                </a>
            </section>
        </>
    )
}
